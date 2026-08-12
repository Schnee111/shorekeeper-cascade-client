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
 * Trade-offs:
 * - ~1-2s cold start per invocation (acceptable for voice)
 * - No true token streaming — we read stdout line-by-line instead
 * - Session continuity via --resume flag
 */

import { type Subprocess } from "bun";

export interface HermesBridge {
  /** Send user text, get streaming response. Returns full text when done. */
  query(text: string, sessionId?: string): AsyncIterable<string>;
  /** Send user text, get full response as string. */
  queryFull(text: string, sessionId?: string): Promise<{ text: string; sessionId: string }>;
  /** Kill any running subprocess. */
  abort(): void;
}

const HERMES_BIN = process.env.HERMES_BIN || "hermes";

export function createHermesBridge(): HermesBridge {
  let currentProc: Subprocess | null = null;

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
      // Drain stderr to avoid broken pipe
      await proc.exited.catch(() => {});
      currentProc = null;
    }
  }

  async function queryFull(text: string, sessionId?: string): Promise<{ text: string; sessionId: string }> {
    const chunks: string[] = [];
    for await (const chunk of query(text, sessionId)) {
      chunks.push(chunk);
    }
    // Hermes --pass-session-id appends session ID as last line prefixed with "SESSION:"
    // or returns it in the exit. For now, we generate a simple ID from timestamp.
    // TODO: parse actual session ID from hermes output when available.
    const fullText = chunks.join("\n");
    return {
      text: fullText,
      sessionId: sessionId ?? `jarvis-${Date.now()}`,
    };
  }

  return { query, queryFull, abort };
}
