/**
 * hermes-ws-bridge.ts — Hermes Agent bridge via WebSocket (hermes serve).
 *
 * Connects to `hermes serve` backend at ws://127.0.0.1:9119/api/ws
 * Uses JSON-RPC protocol with session.create + prompt.submit
 *
 * Advantages over CLI:
 * - Persistent process (no spawn overhead)
 * - Context cached in memory (~2s vs ~5s)
 * - Real-time streaming via WebSocket events
 * - Session continuity via session_id
 *
 * Requires: hermes serve --skip-build (with HERMES_DASHBOARD_SESSION_TOKEN env)
 */

export interface HermesWSBridge {
  query(text: string): AsyncIterable<string>;
  queryFull(text: string): Promise<{ text: string; sessionId: string }>;
  abort(): void;
  isProcessing(): boolean;
  getSessionId(): string | undefined;
}

const HERMES_WS_URL = "ws://127.0.0.1:9119/api/ws";
const HERMES_TOKEN = process.env.HERMES_DASHBOARD_SESSION_TOKEN || "jarvis-voice-secret-2026";

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

interface RPCResponse {
  jsonrpc: string;
  id?: number;
  result?: any;
  error?: { code: number; message: string };
  method?: string;
  params?: {
    type?: string;
    session_id?: string;
    payload?: any;
  };
}

export function createHermesWSBridge(): HermesWSBridge {
  let ws: WebSocket | null = null;
  let sessionId: string | undefined;
  let processing = false;
  let aborted = false;
  let messageId = 0;

  // Event stream handling
  let eventQueue: RPCResponse[] = [];
  let eventWaiter: ((e: RPCResponse) => void) | null = null;

  // RPC response handling
  let rpcWaiters = new Map<number, { resolve: (v: any) => void; reject: (e: Error) => void }>();

  async function connect(): Promise<void> {
    if (ws && ws.readyState === WebSocket.OPEN) return;

    return new Promise((resolve, reject) => {
      const url = `${HERMES_WS_URL}?token=${HERMES_TOKEN}`;
      console.log(`[HermesWS] Connecting...`);

      ws = new WebSocket(url);

      const timeout = setTimeout(() => {
        reject(new Error("Connection timeout"));
      }, 10000);

      ws.onopen = () => {
        console.log("[HermesWS] Connected");
      };

      ws.onmessage = (event) => {
        try {
          const data: RPCResponse = JSON.parse(event.data as string);

          // Gateway ready event
          if (data.method === "event" && data.params?.type === "gateway.ready") {
            clearTimeout(timeout);
            console.log("[HermesWS] Gateway ready");
            resolve();
            return;
          }

          // RPC response (has id)
          if (data.id !== undefined) {
            const waiter = rpcWaiters.get(data.id);
            if (waiter) {
              rpcWaiters.delete(data.id);
              if (data.error) {
                waiter.reject(new Error(data.error.message));
              } else {
                waiter.resolve(data.result);
              }
            }
            return;
          }

          // Event (no id, has method="event")
          if (data.method === "event") {
            if (eventWaiter) {
              eventWaiter(data);
              eventWaiter = null;
            } else {
              eventQueue.push(data);
            }
          }
        } catch (e) {
          console.error("[HermesWS] Parse error:", e);
        }
      };

      ws.onerror = (e) => {
        clearTimeout(timeout);
        console.error("[HermesWS] Error:", e);
        reject(new Error("WebSocket error"));
      };

      ws.onclose = (e) => {
        console.log(`[HermesWS] Closed: code=${e.code}`);
        ws = null;
      };
    });
  }

  async function rpcCall(method: string, params: any): Promise<any> {
    if (!ws || ws.readyState !== WebSocket.OPEN) {
      throw new Error("WebSocket not connected");
    }

    const id = ++messageId;
    return new Promise((resolve, reject) => {
      rpcWaiters.set(id, { resolve, reject });
      ws!.send(JSON.stringify({
        jsonrpc: "2.0",
        id,
        method,
        params,
      }));
    });
  }

  async function nextEvent(timeoutMs = 30000): Promise<RPCResponse | null> {
    if (eventQueue.length > 0) {
      return eventQueue.shift()!;
    }

    return new Promise((resolve) => {
      const timeout = setTimeout(() => {
        eventWaiter = null;
        resolve(null);
      }, timeoutMs);

      eventWaiter = (e) => {
        clearTimeout(timeout);
        resolve(e);
      };
    });
  }

  async function ensureSession(): Promise<string> {
    if (sessionId) return sessionId;

    await connect();

    // Create session
    const result = await rpcCall("session.create", {
      title: `jarvis-voice-${Date.now()}`,
    });
    sessionId = result.session_id;
    console.log(`[HermesWS] Session created: ${sessionId}`);

    // Activate session
    await rpcCall("session.activate", { session_id: sessionId });
    console.log(`[HermesWS] Session activated`);

    return sessionId!;
  }

  async function* query(text: string): AsyncIterable<string> {
    aborted = false;
    processing = true;

    try {
      const sid = await ensureSession();

      // Submit prompt
      await rpcCall("prompt.submit", {
        session_id: sid,
        text: VOICE_PREFIX + text,
      });

      // Stream events
      while (!aborted) {
        const event = await nextEvent(60000); // 60s timeout per event
        if (!event) break;

        const eventType = event.params?.type;
        const payload = event.params?.payload || {};

        if (eventType === "message.delta") {
          const delta = payload.text || "";
          if (delta) yield delta;
        } else if (eventType === "message.complete") {
          break;
        } else if (eventType === "turn.complete") {
          break;
        } else if (eventType === "error") {
          console.error("[HermesWS] Error event:", payload);
          break;
        }
      }
    } finally {
      processing = false;
    }
  }

  async function queryFull(text: string): Promise<{ text: string; sessionId: string }> {
    const chunks: string[] = [];
    for await (const chunk of query(text)) {
      chunks.push(chunk);
    }
    return {
      text: chunks.join(""),
      sessionId: sessionId || "",
    };
  }

  function abort() {
    aborted = true;
    processing = false;
  }

  return {
    query,
    queryFull,
    abort,
    isProcessing: () => processing,
    getSessionId: () => sessionId,
  };
}
