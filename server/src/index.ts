import { Elysia, t } from "elysia";

const app = new Elysia()
  .get("/", () => ({
    status: "online",
    system: "Shorekeeper Tethys Core",
    version: "1.0.0"
  }))
  .get("/api/health", () => ({
    status: "ok",
    bridge: "active",
    user: "Schnee"
  }))
  .ws("/ws", {
    open(ws) {
      console.log("[WS] Client connected to Shorekeeper STT Bridge");
      ws.send({
        type: "system",
        message: "Connected to Shorekeeper STT Bridge",
        timestamp: new Date().toISOString()
      });
    },
    async message(ws, message: any) {
      // Audio biner dari VAD segment (ArrayBuffer / Uint8Array / Buffer)
      const isBinary =
        message instanceof ArrayBuffer ||
        message instanceof Uint8Array ||
        (typeof Buffer !== "undefined" && Buffer.isBuffer(message));

      if (isBinary) {
        ws.send({ type: "status", state: "processing", log: "[STT] Transcribing segment..." });
        try {
          const bytes =
            message instanceof ArrayBuffer ? new Uint8Array(message) : (message as Uint8Array);
          const blob = new Blob([bytes], { type: "audio/webm" });
          const fd = new FormData();
          fd.append("audio", blob, "segment.webm");
          const res = await fetch("http://127.0.0.1:3003/transcribe", {
            method: "POST",
            body: fd,
          });
          const data = (await res.json()) as { text?: string; lang?: string };
          const text = data.text ?? "";
          ws.send({ type: "transcript", text, final: true, log: `[STT] "${text}"` });
          ws.send({ type: "status", state: "idle" });
        } catch (e: any) {
          console.error("[STT] error:", e);
          ws.send({ type: "error", log: `[STT] error: ${e?.message ?? e}` });
          ws.send({ type: "status", state: "idle" });
        }
        return;
      }

      // Sinyal kontrol JSON (start/stop listening)
      if (message?.type === "control") {
        ws.send({ type: "status", state: message.state ?? "idle" });
      }
    },
    close(ws) {
      console.log("[WS] Client disconnected");
    }
  })
  .listen(3002);

console.log(`[Shorekeeper Server] Running on http://${app.server?.hostname}:${app.server?.port}`);
