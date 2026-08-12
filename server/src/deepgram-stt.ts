/**
 * deepgram-stt.ts — Deepgram Nova-3 live STT for user subtitle overlay.
 *
 * Uses raw WebSocket instead of Deepgram SDK to avoid Bun compatibility
 * issues (SDK v5 sets binaryType="blob" which Bun doesn't support).
 *
 * Deepgram Live STT v1 WebSocket API:
 *   wss://api.deepgram.com/v1/listen?model=nova-3&language=id&...
 *   Auth: token=<API_KEY> query param or Authorization header
 *   Send: raw PCM bytes
 *   Receive: JSON with channel.alternatives[0].transcript
 */

import type { ServerWebSocket } from "bun";

const DEEPGRAM_API_KEY = process.env.DEEPGRAM_API_KEY || "";

export interface DeepgramSession {
  isReady: () => boolean;
  sendAudio: (base64Data: string) => void;
  close: () => void;
}

export async function createDeepgramSession(
  clientWs: ServerWebSocket<any>
): Promise<DeepgramSession> {
  if (!DEEPGRAM_API_KEY) {
    console.error("[Deepgram] DEEPGRAM_API_KEY not set — STT disabled");
    return {
      isReady: () => false,
      sendAudio: () => {},
      close: () => {},
    };
  }

  let ready = false;

  const params = new URLSearchParams({
    model: "nova-3",
    language: "id",
    smart_format: "true",
    interim_results: "true",
    encoding: "linear16",
    sample_rate: "16000",
    endpointing: "500",
  });

  const ws = new WebSocket(
    `wss://api.deepgram.com/v1/listen?${params.toString()}`,
    { headers: { Authorization: `Token ${DEEPGRAM_API_KEY}` } } as any
  );

  ws.onopen = () => {
    console.log("[Deepgram] Connection opened.");
    ready = true;
    try {
      clientWs.send(
        JSON.stringify({
          type: "status",
          state: "ready",
          log: "[Deepgram] STT Engine Ready (Nova-3 ID)",
        })
      );
    } catch {
      // clientWs may have closed
    }
  };

  ws.onmessage = (event) => {
    try {
      const data = JSON.parse(
        typeof event.data === "string"
          ? event.data
          : Buffer.from(event.data).toString("utf-8")
      );
      const transcript = data.channel?.alternatives?.[0]?.transcript;
      if (transcript && transcript.trim().length > 0) {
        try {
          clientWs.send(
            JSON.stringify({
              type: "transcript",
              role: "user",
              text: transcript,
              isFinal: data.is_final,
            })
          );
        } catch {
          // clientWs may have closed
        }

        if (data.is_final) {
          console.log(`[Deepgram] User (Final): "${transcript}"`);
        }
      }
    } catch {
      // non-JSON, ignore
    }
  };

  ws.onerror = (e) => {
    console.error("[Deepgram] WS Error:", e);
    try {
      clientWs.send(
        JSON.stringify({ type: "error", error: "Deepgram STT Error" })
      );
    } catch {
      // clientWs may have closed
    }
  };

  ws.onclose = () => {
    console.log("[Deepgram] Connection closed — reconnecting...");
    ready = false;
    // Auto-reconnect after brief delay
    setTimeout(() => {
      if (!closed) {
        console.log("[Deepgram] Reconnecting...");
        reconnect();
      }
    }, 500);
  };

  let closed = false;

  function reconnect() {
    const newWs = new WebSocket(
      `wss://api.deepgram.com/v1/listen?${params.toString()}`,
      { headers: { Authorization: `Token ${DEEPGRAM_API_KEY}` } } as any
    );
    newWs.onopen = ws.onopen;
    newWs.onmessage = ws.onmessage;
    newWs.onerror = ws.onerror;
    newWs.onclose = ws.onclose;
    // Replace the reference used by sendAudio/close
    activeWs = newWs;
  }

  let activeWs = ws;

  return {
    isReady: () => ready,
    sendAudio: (base64Data: string) => {
      if (!ready || activeWs.readyState !== WebSocket.OPEN) return;
      const buffer = Buffer.from(base64Data, "base64");
      activeWs.send(buffer);
    },
    close: () => {
      closed = true;
      ready = false;
      if (activeWs.readyState === WebSocket.OPEN) {
        try {
          activeWs.send(JSON.stringify({ type: "CloseStream" }));
        } catch {
          // ignore
        }
      }
      try {
        activeWs.close();
      } catch {
        // ignore
      }
    },
  };
}
