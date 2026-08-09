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
      console.log("[WS] Client connected to Shorekeeper Voice Bridge");
      ws.send({
        type: "system",
        message: "Connected to Shorekeeper Tethys Realtime Bridge",
        timestamp: new Date().toISOString()
      });
    },
    message(ws, message: any) {
      console.log("[WS] Received message:", message);
      if (message?.type === "voice_chunk" || message?.type === "prompt") {
        ws.send({
          type: "status",
          state: "processing",
          log: "[STT] Processing incoming audio stream..."
        });

        setTimeout(() => {
          ws.send({
            type: "response",
            state: "speaking",
            text: "Schnee... I hear your instruction clearly. Systems are operational.",
            log: "[Agent] Tool execution complete."
          });
        }, 1500);
      }
    },
    close(ws) {
      console.log("[WS] Client disconnected");
    }
  })
  .listen(3002);

console.log(`[Shorekeeper Server] Running on http://${app.server?.hostname}:${app.server?.port}`);
