/**
 * hermes-bridge.ts — Hermes Agent bridge via CLI.
 *
 * Spawns `hermes -z <prompt>` as a subprocess, captures streaming stdout.
 * Session continuity via --resume <sessionId>.
 * Persona (SOUL.md) auto-loaded by Hermes — no manual injection needed.
 *
 * Why CLI over HTTP: Hermes doesn't expose a public REST API by default.
 * The CLI is battle-tested, has full tool/memory/skill access, and
 * the Shorekeeper persona is already configured in SOUL.md.
 *
 * Session ID: `--pass-session-id` outputs the session ID to **stderr**
 * as the last line (e.g., "SESSION:abc123def"). We capture stderr in
 * parallel with stdout streaming.
 */

import { type Subprocess } from "bun";

export interface HermesBridge {
  /** Send user text, get streaming response. Returns full text when done. */
  query(text: string, sessionId?: string): AsyncIterable<string>;
  /** Send user text, get full response + session ID. */
  queryFull(text: string, sessionId?: string): Promise<{ text: string; sessionId: string }>;
  /** Kill any running subprocess. */
  abort(): void;
}

const HERMES_BIN = process.env.HERMES_BIN || "hermes";

export function createHermesBridge(): HermesBridge {
  let currentProc: Subprocess | null = null;
  let lastSessionId: string | undefined;

  function abort() {
    if (currentProc) {
      try {
        currentProc.kill();
      } catch {
        // already dead
      }
      currentProc = null;
    }
  }

  async function* query(text: string, sessionId?: string): AsyncIterable<string> {
    abort(); // kill any previous query

    const args = [
      "-z", text,
      "--no-restore-cwd",
      "--pass-session-id",
    ];
    if (sessionId) {
      args.push("--resume", sessionId);
    }

    const proc = Bun.spawn([HERMES_BIN, ...args], {
      stdout: "pipe",
      stderr: "pipe",
      stdin: "ignore",
    });
    currentProc = proc;

    // Read stderr in background to capture session ID
    // --pass-session-id outputs "SESSION:<id>" to stderr
    const stderrReader = proc.stderr.getReader();
    let stderrBuf = "";
    const stderrPromise = (async () => {
      const dec = new TextDecoder();
      try {
        while (true) {
          const { done, value } = await stderrReader.read();
          if (done) break;
          stderrBuf += dec.decode(value, { stream: true });
        }
      } catch {
        // reader closed
      }
      stderrReader.releaseLock();
      // Extract session ID from stderr — last line matching "SESSION:..."
      const lines = stderrBuf.trim().split("\n");
      for (const line of lines.reverse()) {
        const match = line.match(/SESSION:(\S+)/);
        if (match) {
          lastSessionId = match[1];
          break;
        }
      }
    })();

    const reader = proc.stdout.getReader();
    const decoder = new TextDecoder();
    let lineBuffer = "";

    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        lineBuffer += decoder.decode(value, { stream: true });

        // Emit complete lines
        const lines = lineBuffer.split("\n");
        lineBuffer = lines.pop() ?? "";

        for (const line of lines) {
          if (line.trim()) {
            yield line;
          }
        }
      }

      // Emit remaining
      if (lineBuffer.trim()) {
        yield lineBuffer.trim();
      }
    } finally {
      reader.releaseLock();
      // Wait for stderr to finish draining
      await stderrPromise;
      await proc.exited.catch(() => {});
      currentProc = null;
    }
  }

  async function queryFull(text: string, sessionId?: string): Promise<{ text: string; sessionId: string }> {
    const chunks: string[] = [];
    for await (const chunk of query(text, sessionId)) {
      chunks.push(chunk);
    }
    return {
      text: chunks.join("\n"),
      sessionId: lastSessionId ?? sessionId ?? `jarvis-${Date.now()}`,
    };
  }

  return { query, queryFull, abort };
}
