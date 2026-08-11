import { Elysia } from "elysia";
import { createGeminiSession } from "./gemini-live";

const API_KEY = Bun.env.GEMINI_API_KEY ?? "";
const MODEL = Bun.env.GEMINI_MODEL ?? "gemini-2.0-flash-live-001";
const VOICE = Bun.env.GEMINI_VOICE ?? "Aoede";

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

      const session = createGeminiSession(API_KEY, MODEL, VOICE, {
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
      });

      session.connect();

      // Store session on ws data for message/close handlers
      (ws as any)._gemini = session;
    },

    message(ws, message: any) {
      const session = (ws as any)._gemini;
      if (!session) return;

      try {
        const msg = typeof message === "string" ? JSON.parse(message) : message;

        if (msg.type === "audio" && msg.data) {
          // PCM base64 audio from browser
          session.sendAudio(msg.data);
        } else if (msg.type === "text" && msg.text) {
          // Text input (optional — for typing mode)
          session.sendText(msg.text);
        }
      } catch {
        // Not JSON or malformed, ignore
      }
    },

    close(ws) {
      console.log("[WS] Client disconnected — closing Gemini session");
      const session = (ws as any)._gemini;
      if (session) session.close();
    },
  })
  .listen(3002);

console.log(`[Shorekeeper JARVIS] Running on http://${app.server?.hostname}:${app.server?.port}`);
console.log(`[Shorekeeper JARVIS] Engine: Gemini Live (${MODEL}), Voice: ${VOICE}`);
