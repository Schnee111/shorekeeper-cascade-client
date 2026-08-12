import { Elysia } from "elysia";
import { createGeminiSession, type GeminiSession } from "./gemini-live";
import { createDeepgramSession, type DeepgramSession } from "./deepgram-stt";

const API_KEY = process.env.GEMINI_API_KEY || "";
const MODEL = process.env.GEMINI_MODEL || "gemini-3.1-flash-live-preview";
const VOICE = process.env.GEMINI_VOICE || "Aoede";

/**
 * Elysia (verified in elysia@1.4.29 dist/adapter/bun/index.js) constructs a NEW
 * ElysiaWS wrapper object for every lifecycle event (open/message/drain/close).
 * Properties attached to the `ws` argument therefore do NOT persist between
 * callbacks — the chunk counter attached to the wrapper reset to 0 on every
 * frame, logging "chunk #1" repeatedly.
 *
 * The stable per-connection objects across all events are:
 *   - `ws.raw` — the raw Bun ServerWebSocket (same instance for the whole
 *     connection; each wrapper only re-wraps it)
 *   - `ws.data` — the per-connection data object created once at upgrade
 *
 * Keep ALL per-connection state in a WeakMap keyed by the raw socket so it
 * survives across callbacks and is garbage-collected with the socket.
 */
type ConnState = {
  gemini?: GeminiSession;
  deepgram?: DeepgramSession;
  audioChunks: number;
  loggedClientFrame: boolean;
};
const conns = new WeakMap<object, ConnState>();
const socketKey = (ws: any): object => ws.raw ?? ws;

if (!API_KEY) {
  console.error("Missing GEMINI_API_KEY. Set it in .env");
  process.exit(1);
}

const app = new Elysia()
  .ws("/ws", {
    async open(ws) {
      console.log("[WS] Client connected — opening Gemini Live + Deepgram STT...");

      const state: ConnState = {
        audioChunks: 0,
        loggedClientFrame: false,
        gemini: createGeminiSession(API_KEY, MODEL, VOICE, {
          onAudio: (base64pcm) => {
            ws.send(JSON.stringify({ type: "audio", data: base64pcm }));
          },
          onTranscript: (text, role) => {
            ws.send(JSON.stringify({ type: "transcript", text, role }));
          },
          onTurnComplete: () => {
            ws.send(JSON.stringify({ type: "turnComplete" }));
          },
          onError: (error) => {
            console.error("[Gemini] Error:", error);
            ws.send(JSON.stringify({ type: "error", error }));
          },
          onConnected: () => {
            console.log("[Gemini] Session ready — voice:", VOICE);
            ws.send(JSON.stringify({ type: "status", state: "ready", log: `[Gemini] Connected (${MODEL}, ${VOICE})` }));
          },
          onDisconnected: () => {
            console.log("[Gemini] Session disconnected");
            ws.send(JSON.stringify({ type: "status", state: "disconnected", log: "[Gemini] Disconnected" }));
          },
        }),
      };

      // Deepgram createSession is async (SDK v5) — await it, don't block Gemini
      try {
        state.deepgram = await createDeepgramSession(ws.raw as any);
      } catch (e) {
        console.error("[Deepgram] Failed to create session:", e);
        ws.send(JSON.stringify({ type: "error", error: "Deepgram init failed" }));
      }

      if (state.gemini) state.gemini.connect();
      conns.set(socketKey(ws), state);
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
          // PCM base64 audio from browser
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
            onAudio: (base64pcm) => {
              ws.send(JSON.stringify({ type: "audio", data: base64pcm }));
            },
            onTranscript: (text, role) => {
              ws.send(JSON.stringify({ type: "transcript", text, role }));
            },
            onTurnComplete: () => {
              ws.send(JSON.stringify({ type: "turnComplete" }));
            },
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
          if (state.gemini?.isReady()) {
            state.gemini.sendText(msg.text);
          }
        }
      } catch {
        // Not JSON or malformed, ignore
      }
    },

    close(ws) {
      console.log("[WS] Client disconnected — closing Gemini session");
      const state = conns.get(socketKey(ws));
      if (state) {
        if (state.gemini) state.gemini.close();
        if (state.deepgram) state.deepgram.close();
        conns.delete(socketKey(ws));
      }
    },
  })
  .listen(3002);

console.log(`[Shorekeeper JARVIS] Running on http://${app.server?.hostname}:${app.server?.port}`);
console.log(`[Shorekeeper JARVIS] Engine: Gemini Live (${MODEL}), Voice: ${VOICE}`);
