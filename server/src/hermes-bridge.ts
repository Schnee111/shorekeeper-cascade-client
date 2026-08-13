/**
 * hermes-bridge.ts — Hermes Agent bridge via CLI.
 *
 * Spawns `hermes -z <prompt>` as a subprocess, captures streaming stdout.
 * Session continuity via --resume <sessionId>.
 *
 * Voice mode: prepends brevity instruction to every query so Hermes
 * keeps responses short (1-2 sentences) for TTS playback.
 */

import { type Subprocess } from "bun";

export interface HermesBridge {
  query(text: string, sessionId?: string): AsyncIterable<string>;
  queryFull(text: string, sessionId?: string): Promise<{ text: string; sessionId: string }>;
  abort(): void;
  isProcessing(): boolean;
  getLastSessionId(): string | undefined;
}

const HERMES_BIN = process.env.HERMES_BIN || "hermes";

// Voice-mode instruction: keep responses SHORT for TTS playback + verbal thinking
const VOICE_PREFIX = `[VOICE MODE INSTRUCTIONS]
1. Keep your response to 1-2 short sentences maximum. Be direct. No lists, no markdown, no code blocks.
2. ALWAYS start by verbally acknowledging what you're about to do BEFORE executing any tools or actions.
   - Example: "Oke, aku cek status cron job di VPS" → then execute tool
   - Example: "Baik, aku lihat anime update terbaru untukmu" → then check
   - Example: "Hmm, biarkan aku hitung dulu..." → then calculate
3. Never stay silent while processing. Always verbalize your intent first.
4. Just speak naturally and briefly.

User says: `;

export function createHermesBridge(): HermesBridge {
  let currentProc: Subprocess | null = null;
  let lastSessionId: string | undefined;
  let processing = false;
  // Use a named session for reliable continuity across queries
  // --continue <name> finds or creates a session with this name
  const connectionSessionName = `jarvis-voice-${Date.now()}`;

  function abort() {
    if (currentProc) {
      try {
        currentProc.kill();
        console.log("[Hermes] Aborted current query");
      } catch {}
      currentProc = null;
      processing = false;
    }
  }

  async function* query(text: string, sessionId?: string): AsyncIterable<string> {
    abort();
    processing = true;

    // Prepend voice-mode instruction for brevity
    const prompt = VOICE_PREFIX + text;

    const args = [
      "-z", prompt,
      "--no-restore-cwd",
    ];
    
    // Use named session for reliable continuity
    // --continue <name> finds existing session by name, or creates new one
    args.push("--continue", connectionSessionName);
    console.log(`[Hermes] Session: ${connectionSessionName}`);

    const proc = Bun.spawn([HERMES_BIN, ...args], {
      stdout: "pipe",
      stderr: "pipe",
      stdin: "ignore",
    });
    currentProc = proc;

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
      } catch {}
      stderrReader.releaseLock();
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
        const lines = lineBuffer.split("\n");
        lineBuffer = lines.pop() ?? "";
        for (const line of lines) {
          if (line.trim()) yield line;
        }
      }
      if (lineBuffer.trim()) yield lineBuffer.trim();
    } finally {
      reader.releaseLock();
      await stderrPromise;
      await proc.exited.catch(() => {});
      currentProc = null;
      processing = false;
    }
  }

  async function queryFull(text: string, sessionId?: string): Promise<{ text: string; sessionId: string }> {
    const chunks: string[] = [];
    for await (const chunk of query(text, sessionId)) {
      chunks.push(chunk);
    }
    return {
      text: chunks.join("\n"),
      sessionId: lastSessionId ?? connectionSessionName,
    };
  }

  return { query, queryFull, abort, isProcessing: () => processing, getLastSessionId: () => lastSessionId };
}
