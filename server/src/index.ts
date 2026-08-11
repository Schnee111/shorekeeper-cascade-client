import { Elysia } from "elysia";
import { createGeminiSession } from "./gemini-live";

const API_KEY = Bun.env.GEMINI_API_KEY ?? "";
const MODEL = Bun.env.GEMINI_MODEL ?? "gemini-2.0-flash-live-001";
const VOICE = Bun.env.GEMINI_VOICE ?? "Aoede";

type GeminiSession = ReturnType<typeof createGeminiSession>;

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
  session: GeminiSession;
  audioChunks: number;
  loggedClientFrame: boolean;
};
const conns = new WeakMap<object, ConnState>();
const socketKey = (ws: any): object => ws.raw ?? ws;

if (!API_KEY) {
  console.error("[FATAL] GEMINI_API_KEY not set. Copy .env.example to .env and fill in your key.");
  process.exit(1);
}

const app = new Elysia()
  .get("/", () => ({
    status: "online",
    system: "Shorekeeper JARVIS — Gemini Live Voice Engine",
    version: "2.0.0",
  }))
  .get("/api/health", () => ({
    status: "ok",
    engine: "gemini-live",
    model: MODEL,
    voice: VOICE,
  }))
  .ws("/ws", {
    open(ws) {
      console.log("[WS] Client connected — opening Gemini Live session...");

      const state: ConnState = {
        audioChunks: 0,
        loggedClientFrame: false,
        session: createGeminiSession(API_KEY, MODEL, VOICE, {
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

      state.session.connect();
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
            console.log(`[Audio] Browser chunk #${count}, base64 bytes=${msg.data.length}, geminiReady=${state.session.isReady()}`);
          }
          // PCM base64 audio from browser (dropped internally until Gemini setupComplete)
          state.session.sendAudio(msg.data);
        } else if (msg.type === "diagnostic" && msg.message) {
          console.log(`[ClientDiag] ${msg.message}`);
        } else if (msg.type === "text" && msg.text) {
          // Text input (optional — for typing mode)
          state.session.sendText(msg.text);
        }
      } catch {
        // Not JSON or malformed, ignore
      }
    },

    close(ws) {
      console.log("[WS] Client disconnected — closing Gemini session");
      const state = conns.get(socketKey(ws));
      if (state) {
        state.session.close();
        conns.delete(socketKey(ws));
      }
    },
  })
  .listen(3002);

console.log(`[Shorekeeper JARVIS] Running on http://${app.server?.hostname}:${app.server?.port}`);
console.log(`[Shorekeeper JARVIS] Engine: Gemini Live (${MODEL}), Voice: ${VOICE}`);
