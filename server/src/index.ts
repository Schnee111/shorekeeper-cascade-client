import { Elysia } from "elysia";
import { createGeminiSession, type GeminiSession } from "./gemini-live";
import { createDeepgramSession, type DeepgramSession } from "./deepgram-stt";
import { createHermesBridge, type HermesBridge } from "./hermes-bridge";
import { createTTSSession, type TTSSession } from "./gemini-tts";
import { createSentenceAccumulator } from "./sentence-detector";

const API_KEY = process.env.GEMINI_API_KEY || "";
const MODEL = process.env.GEMINI_MODEL || "gemini-3.1-flash-live-preview";
const VOICE = process.env.GEMINI_VOICE || "Aoede";

/**
 * Connection state per WebSocket client.
 * Kept in WeakMap keyed by raw socket (Elysia creates new wrappers per event).
 */
type ConnState = {
  gemini?: GeminiSession;
  deepgram?: DeepgramSession;
  hermes: HermesBridge;
  tts: TTSSession;
  audioChunks: number;
  loggedClientFrame: boolean;
  // Hermes pipeline state
  hermesSessionId?: string;
  isProcessing: boolean;
  abortController?: AbortController;
};
const conns = new WeakMap<object, ConnState>();
const socketKey = (ws: any): object => ws.raw ?? ws;

if (!API_KEY) {
  console.error("Missing GEMINI_API_KEY. Set it in .env");
  process.exit(1);
}

/**
 * Process Hermes response: stream tokens → sentence detection → TTS → audio to client.
 * Handles barge-in via abortController.
 */
async function processHermesResponse(
  ws: any,
  state: ConnState,
  userText: string,
  voice: string
) {
  // Abort any previous Hermes query
  if (state.abortController) {
    state.abortController.abort();
  }
  const abortController = new AbortController();
  state.abortController = abortController;
  state.isProcessing = true;

  const acc = createSentenceAccumulator();
  let fullResponse = "";

  try {
    // Stream from Hermes
    for await (const chunk of state.hermes.query(userText, state.hermesSessionId)) {
      if (abortController.signal.aborted) {
        console.log("[Hermes] Aborted by barge-in");
        break;
      }

      fullResponse += chunk + " ";
      // Send partial transcript to client
      ws.send(JSON.stringify({
        type: "transcript",
        role: "assistant",
        text: fullResponse.trim(),
        isFinal: false,
      }));

      // Check for complete sentences
      const sentences = acc.feed(chunk + " ");
      for (const sentence of sentences) {
        if (abortController.signal.aborted) break;

        console.log(`[TTS] Synthesizing: "${sentence}"`);
        try {
          const audio = await state.tts.synthesize(sentence, voice);
          if (abortController.signal.aborted) break;

          // Send audio to client
          ws.send(JSON.stringify({
            type: "audio",
            data: audio.toString("base64"),
          }));
        } catch (e) {
          console.error("[TTS] Synthesis error:", e);
        }
      }
    }

    // Flush remaining buffer
    if (!abortController.signal.aborted) {
      const remaining = acc.flush();
      for (const sentence of remaining) {
        console.log(`[TTS] Synthesizing (flush): "${sentence}"`);
        try {
          const audio = await state.tts.synthesize(sentence, voice);
          ws.send(JSON.stringify({
            type: "audio",
            data: audio.toString("base64"),
          }));
        } catch (e) {
          console.error("[TTS] Synthesis error:", e);
        }
      }
    }

    // Send final transcript
    ws.send(JSON.stringify({
      type: "transcript",
      role: "assistant",
      text: fullResponse.trim(),
      isFinal: true,
    }));

    // Send turn complete
    ws.send(JSON.stringify({ type: "turnComplete" }));
  } catch (e) {
    console.error("[Hermes] Query error:", e);
    ws.send(JSON.stringify({ type: "error", error: "Hermes query failed" }));
  } finally {
    state.isProcessing = false;
    state.abortController = undefined;
  }
}

const app = new Elysia()
  .ws("/ws", {
    async open(ws) {
      console.log("[WS] Client connected — opening Gemini Live + Deepgram STT + Hermes Bridge...");

      const state: ConnState = {
        audioChunks: 0,
        loggedClientFrame: false,
        hermes: createHermesBridge(),
        tts: createTTSSession(API_KEY),
        isProcessing: false,
        gemini: createGeminiSession(API_KEY, MODEL, VOICE, {
          onAudio: (base64pcm) => {
            // In M3 cascaded mode, we don't use Gemini Live audio output
            // (Gemini Live is only for STT now). TTS comes from gemini-tts.ts.
            // But we keep this for backward compatibility / fallback.
            // ws.send(JSON.stringify({ type: "audio", data: base64pcm }));
          },
          onTranscript: (text, role) => {
            // Gemini Live transcript (for STT fallback)
            ws.send(JSON.stringify({ type: "transcript", text, role, source: "gemini" }));
          },
          onTurnComplete: () => {
            // Gemini Live turn complete — not used in cascaded mode
            // (we use Deepgram final transcript instead)
          },
          onError: (error) => {
            console.error("[Gemini] Error:", error);
            ws.send(JSON.stringify({ type: "error", error }));
          },
          onConnected: () => {
            console.log("[Gemini] Session ready (STT only) — voice:", VOICE);
            ws.send(JSON.stringify({ type: "status", state: "ready", log: `[Gemini] STT Connected (${MODEL})` }));
          },
          onDisconnected: () => {
            console.log("[Gemini] Session disconnected");
            ws.send(JSON.stringify({ type: "status", state: "disconnected", log: "[Gemini] Disconnected" }));
          },
        }),
      };

      // Deepgram createSession is async — wire up final transcript → Hermes pipeline
      try {
        state.deepgram = await createDeepgramSession(
          ws.raw as any,
          (finalText) => {
            // Deepgram final transcript → trigger Hermes query
            console.log(`[Pipeline] Deepgram final → Hermes: "${finalText}"`);
            if (!state.isProcessing) {
              ws.send(JSON.stringify({ type: "status", state: "processing" }));
              processHermesResponse(ws, state, finalText, VOICE);
            } else {
              console.log("[Pipeline] Hermes busy, queuing...");
              // TODO: queue or interrupt current response
            }
          }
        );
      } catch (e) {
        console.error("[Deepgram] Failed to create session:", e);
        ws.send(JSON.stringify({ type: "error", error: "Deepgram init failed" }));
      }

      if (state.gemini) state.gemini.connect();
      conns.set(socketKey(ws), state);

      ws.send(JSON.stringify({
        type: "status",
        state: "ready",
        log: "[Hermes] Bridge ready (CLI mode)",
      }));
      ws.send(JSON.stringify({
        type: "status",
        state: "ready",
        log: `[TTS] Gemini TTS ready (voice: ${VOICE})`,
      }));
    },

    async message(ws, message: any) {
      const state = conns.get(socketKey(ws));
      if (!state) return;

      try {
        let msg: any;
        if (typeof message === "string") {
          msg = JSON.parse(message);
        } else if (message instanceof ArrayBuffer) {
          msg = JSON.parse(new TextDecoder().decode(message));
        } else if (ArrayBuffer.isView(message)) {
          msg = JSON.parse(new TextDecoder().decode(message));
        } else if (message && typeof message === "object" && "type" in message) {
          msg = message;
        } else {
          msg = JSON.parse(String(message));
        }

        if (!state.loggedClientFrame) {
          state.loggedClientFrame = true;
          console.log(`[WS] First client frame decoded: type=${msg?.type ?? "unknown"}`);
        }

        if (msg.type === "audio" && msg.data) {
          state.audioChunks += 1;
          const count = state.audioChunks;
          if (count === 1 || count % 100 === 0) {
            console.log(`[Audio] Browser chunk #${count}, base64 bytes=${msg.data.length}, deepgramReady=${state.deepgram?.isReady() ?? false}`);
          }
          // Send audio to both STT engines
          if (state.deepgram?.isReady()) {
            state.deepgram.sendAudio(msg.data);
          }
          if (state.gemini?.isReady()) {
            state.gemini.sendAudio(msg.data);
          }
        } else if (msg.type === "diagnostic" && msg.message) {
          console.log(`[ClientDiag] ${msg.message}`);
        } else if (msg.type === "voiceChange" && msg.voice) {
          console.log(`[Voice] Switching to: ${msg.voice}`);
          // Close old Gemini session
          if (state.gemini) state.gemini.close();
          // Create new one with selected voice
          state.gemini = createGeminiSession(API_KEY, MODEL, msg.voice, {
            onAudio: () => {}, // Cascaded mode: no Gemini Live audio
            onTranscript: (text, role) => {
              ws.send(JSON.stringify({ type: "transcript", text, role, source: "gemini" }));
            },
            onTurnComplete: () => {},
            onError: (error) => {
              console.error("[Gemini] Error:", error);
              ws.send(JSON.stringify({ type: "error", error }));
            },
            onConnected: () => {
              console.log("[Gemini] Session ready — voice:", msg.voice);
              ws.send(JSON.stringify({ type: "status", state: "ready", log: `[Gemini] Voice switched to ${msg.voice}` }));
            },
            onDisconnected: () => {
              console.log("[Gemini] Session disconnected");
              ws.send(JSON.stringify({ type: "status", state: "disconnected", log: "[Gemini] Disconnected" }));
            },
          });
          state.gemini.connect();
        } else if (msg.type === "text" && msg.text) {
          // Text input (for testing or fallback)
          if (state.gemini?.isReady()) {
            state.gemini.sendText(msg.text);
          }
        } else if (msg.type === "hermesQuery" && msg.text) {
          // Direct Hermes query (cascaded mode)
          console.log(`[Hermes] Query: "${msg.text}"`);
          ws.send(JSON.stringify({ type: "status", state: "processing" }));

          // Process in background
          processHermesResponse(ws, state, msg.text, msg.voice || VOICE);
        }
      } catch {
        // Not JSON or malformed, ignore
      }
    },

    close(ws) {
      console.log("[WS] Client disconnected — cleaning up");
      const state = conns.get(socketKey(ws));
      if (state) {
        if (state.gemini) state.gemini.close();
        if (state.deepgram) state.deepgram.close();
        if (state.tts) state.tts.close();
        if (state.hermes) state.hermes.abort();
        conns.delete(socketKey(ws));
      }
    },
  })
  .listen(3002);

console.log(`[Shorekeeper JARVIS] Running on http://${app.server?.hostname}:${app.server?.port}`);
console.log(`[Shorekeeper JARVIS] Engine: Cascaded (Deepgram STT → Hermes → Gemini TTS)`);
console.log(`[Shorekeeper JARVIS] TTS Voice: ${VOICE} | Gemini Live: ${MODEL} (STT fallback)`);
