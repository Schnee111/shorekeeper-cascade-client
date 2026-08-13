import { Elysia } from "elysia";
import { createGeminiSession, type GeminiSession } from "./gemini-live";
import { createDeepgramSession, type DeepgramSession } from "./deepgram-stt";
import { createHermesWSBridge, type HermesWSBridge } from "./hermes-ws-bridge";
import { createFishAudioSession, type FishAudioSession } from "./fish-audio-tts";
import { SentenceDetector, splitSentences, detectLanguage } from "./sentence-detector";
import { normalizeNumbersForTTS } from "./id-number-words";

const API_KEY = process.env.GEMINI_API_KEY || "";
const MODEL = process.env.GEMINI_MODEL || "gemini-3.1-flash-live-preview";
const DEFAULT_VOICE = process.env.GEMINI_VOICE || "Achernar";

/**
 * Connection state per WebSocket client.
 * Kept in WeakMap keyed by raw socket (Elysia creates new wrappers per event).
 */
type ConnState = {
  gemini?: GeminiSession;
  deepgram?: DeepgramSession;
  hermes: HermesWSBridge;
  tts: FishAudioSession;
  audioChunks: number;
  loggedClientFrame: boolean;
  // Hermes pipeline state
  hermesSessionId?: string;
  isProcessing: boolean;
  abortController?: AbortController;
  // Safety: auto-reset isProcessing if audioPlaybackDone never arrives (mobile bg, reconnect, etc.)
  processingTimeout?: ReturnType<typeof setTimeout>;
  // Voice tracking
  selectedVoice: string;
};
const conns = new WeakMap<object, ConnState>();
const socketKey = (ws: any): object => ws.raw ?? ws;

if (!API_KEY) {
  console.error("Missing GEMINI_API_KEY. Set it in .env");
  process.exit(1);
}

/**
 * Process Hermes response: stream tokens → sentence detection → parallel TTS → audio to client.
 * Uses sentence-level chunking for natural prosody.
 */
async function processHermesResponse(
  ws: any,
  state: ConnState,
  userText: string
) {
  // Abort any previous Hermes query
  if (state.abortController) {
    state.abortController.abort();
  }
  const abortController = new AbortController();
  state.abortController = abortController;
  state.isProcessing = true;

  // Safety net: if audioPlaybackDone never arrives (mobile background, reconnect, etc.),
  // auto-reset isProcessing after 30s so audio gate doesn't stay closed forever
  if (state.processingTimeout) clearTimeout(state.processingTimeout);
  state.processingTimeout = setTimeout(() => {
    if (state.isProcessing) {
      console.log("[Safety] isProcessing stuck for 30s — auto-resetting (audioPlaybackDone never arrived)");
      state.isProcessing = false;
      state.abortController = undefined;
    }
  }, 30000);

  const detector = new SentenceDetector();
  let fullResponse = "";
  const ttsPromises: Promise<{ index: number; audio: Buffer }>[] = [];
  let chunkIndex = 0;

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

      // Detect complete sentences
      const sentences = detector.addText(chunk + " ");
      
      // Start TTS generation for complete sentences in parallel
      for (const sentence of sentences) {
        if (abortController.signal.aborted) break;
        
        const currentIndex = chunkIndex++;
        // Normalize numbers to Indonesian words for natural TTS pronunciation
        const ttsText = normalizeNumbersForTTS(sentence);
        console.log(`[TTS] Sentence ${currentIndex + 1} (${sentence.length} chars): "${sentence}"`);
        if (ttsText !== sentence) {
          console.log(`[TTS] Number-normalized: "${ttsText}"`);
        }
        const language = detectLanguage(sentence);

        // Start TTS generation (non-blocking)
        const promise = state.tts.synthesize(ttsText, language)
          .then(audio => ({ index: currentIndex, audio }))
          .catch(e => {
            console.error(`[TTS] Synthesis error for sentence ${currentIndex + 1}:`, e);
            return { index: currentIndex, audio: Buffer.alloc(0) };
          });
        
        ttsPromises.push(promise);
      }
    }

    // Flush any remaining text in detector buffer
    if (!abortController.signal.aborted) {
      const finalSentence = detector.flush();
      if (finalSentence) {
        const currentIndex = chunkIndex++;
        const ttsText = normalizeNumbersForTTS(finalSentence);
        console.log(`[TTS] Final sentence (${finalSentence.length} chars): "${finalSentence}"`);
        if (ttsText !== finalSentence) {
          console.log(`[TTS] Number-normalized: "${ttsText}"`);
        }
        const language = detectLanguage(finalSentence);

        const promise = state.tts.synthesize(ttsText, language)
          .then(audio => ({ index: currentIndex, audio }))
          .catch(e => {
            console.error(`[TTS] Synthesis error for final sentence:`, e);
            return { index: currentIndex, audio: Buffer.alloc(0) };
          });
        
        ttsPromises.push(promise);
      }
    }

    // Wait for all TTS chunks to complete
    if (ttsPromises.length > 0 && !abortController.signal.aborted) {
      console.log(`[TTS] Waiting for ${ttsPromises.length} parallel TTS sentences...`);
      const results = await Promise.all(ttsPromises);
      
      // Sort by index to maintain order
      results.sort((a, b) => a.index - b.index);
      
      // Update status to speaking before sending audio
      ws.send(JSON.stringify({ type: "status", state: "speaking" }));
      
      // Send audio chunks to client in order with small delay
      for (const result of results) {
        if (abortController.signal.aborted) break;
        if (result.audio.length > 0) {
          ws.send(JSON.stringify({
            type: "audio",
            data: result.audio.toString("base64"),
          }));
          console.log(`[TTS] Sent audio sentence ${result.index + 1} (${result.audio.length} bytes)`);
          
          // Small delay to prevent WebSocket message burst
          await new Promise(resolve => setTimeout(resolve, 50));
        }
      }
    }

    // After query completes, save the session ID for next query
    state.hermesSessionId = state.hermes.getSessionId() ?? state.hermesSessionId;
    if (state.hermesSessionId) {
      console.log(`[Hermes] Session ID: ${state.hermesSessionId}`);
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
    // DON'T set isProcessing = false here - wait for client audioPlaybackDone message
  } catch (e) {
    console.error("[Hermes] Query error:", e);
    ws.send(JSON.stringify({ type: "error", error: "Hermes query failed" }));
    state.isProcessing = false;
    state.abortController = undefined;
  }
}

const app = new Elysia()
  .ws("/ws", {
    async open(ws) {
      const key = socketKey(ws);
      
      // Check if we already have a connection state (reconnecting client)
      let state = conns.get(key);
      
      if (state && state.gemini && state.deepgram) {
        console.log("[WS] Client reconnected — reusing existing sessions");
        
        // Send ready status immediately
        ws.send(JSON.stringify({
          type: "status",
          state: "ready",
          log: "[Hermes] Bridge ready (CLI mode)",
        }));
        ws.send(JSON.stringify({
          type: "status",
          state: "ready",
          log: `[TTS] Fish Audio TTS ready (model: s2.1-pro-free)`,
        }));
        
        return;
      }
      
      console.log("[WS] New client connected — creating new sessions");
      
      state = {
        audioChunks: 0,
        loggedClientFrame: false,
        hermes: createHermesWSBridge(),
        tts: createFishAudioSession(process.env.FISH_API_KEY || ""),
        isProcessing: false,
        selectedVoice: DEFAULT_VOICE,
        gemini: createGeminiSession(API_KEY, MODEL, DEFAULT_VOICE, {
          onAudio: (base64pcm) => {
            // In M3 cascaded mode, we don't use Gemini Live audio output
            // (Gemini Live is only for STT now). TTS comes from gemini-tts.ts.
            // But we keep this for backward compatibility / fallback.
            // ws.send(JSON.stringify({ type: "audio", data: base64pcm }));
          },
          onTranscript: (text, role) => {
            // Gemini Live transcript — only forward model output
            // User speech is handled by Deepgram (primary STT)
            if (role === "model") {
              ws.send(JSON.stringify({ type: "transcript", text, role, source: "gemini" }));
            }
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
            console.log("[Gemini] Session ready (STT only) — voice:", DEFAULT_VOICE);
            ws.send(JSON.stringify({ type: "status", state: "ready", log: `[Gemini] STT Connected (${MODEL})` }));
          },
          onDisconnected: () => {
            console.log("[Gemini] Session disconnected");
            ws.send(JSON.stringify({ type: "status", state: "disconnected", log: "[Gemini] Disconnected" }));
          },
        }),
      };

      // Deepgram STT — wire up final transcript → Hermes pipeline
      const DEEPGRAM_API_KEY = process.env.DEEPGRAM_API_KEY || "";
      if (DEEPGRAM_API_KEY) {
        state.deepgram = createDeepgramSession(DEEPGRAM_API_KEY);
        state.deepgram.onTranscript((text, isFinal) => {
          // Send interim transcript to client
          ws.send(JSON.stringify({
            type: "transcript",
            role: "user",
            text,
            isFinal,
            source: "deepgram",
          }));
          // Final transcript → trigger Hermes query
          if (isFinal && text.trim().length > 0) {
            console.log(`[Pipeline] Deepgram final → Hermes: "${text}"`);
            if (!state!.isProcessing) {
              ws.send(JSON.stringify({ type: "status", state: "processing" }));
              processHermesResponse(ws, state!, text.trim());
            } else {
              console.log("[Pipeline] Hermes busy, queuing...");
            }
          }
        });
        ws.send(JSON.stringify({
          type: "status",
          state: "ready",
          log: "[Deepgram] STT Engine Ready (Nova-3 ID)",
        }));
      } else {
        console.error("[Deepgram] DEEPGRAM_API_KEY not set — STT disabled");
      }

      if (state.gemini) state.gemini.connect();
      conns.set(key, state);

      ws.send(JSON.stringify({
        type: "status",
        state: "ready",
        log: "[Hermes] Bridge ready (CLI mode)",
      }));
      ws.send(JSON.stringify({
        type: "status",
        state: "ready",
        log: `[TTS] Fish Audio TTS ready (model: s2.1-pro-free)`,
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
            console.log(`[Audio] Browser chunk #${count}, base64 bytes=${msg.data.length}, deepgramActive=${!!state.deepgram}, isProcessing=${state.isProcessing}`);
          }
          // Stop sending audio to Deepgram while Hermes is processing
          // This prevents abort triggers from barge-in detection
          if (state.deepgram && !state.isProcessing) {
            state.deepgram.sendAudio(msg.data);
          } else if (state.isProcessing && count % 100 === 0) {
            console.log(`[Audio] Chunk #${count} DROPPED — isProcessing stuck? Consider timeout reset`);
          }
        } else if (msg.type === "audioPlaybackDone") {
          // Client finished playing audio, safe to re-enable Deepgram
          console.log("[Client] Audio playback done, re-enabling Deepgram");
          state.isProcessing = false;
          state.abortController = undefined;
          if (state.processingTimeout) {
            clearTimeout(state.processingTimeout);
            state.processingTimeout = undefined;
          }
        } else if (msg.type === "forceReset") {
          // Emergency reset from client (user tap) — unstick isProcessing
          console.log("[Client] Force reset — clearing isProcessing");
          state.isProcessing = false;
          state.abortController = undefined;
          if (state.processingTimeout) {
            clearTimeout(state.processingTimeout);
            state.processingTimeout = undefined;
          }
        } else if (msg.type === "diagnostic" && msg.message) {
          console.log(`[ClientDiag] ${msg.message}`);
        } else if (msg.type === "voiceChange" && msg.voice) {
          console.log(`[Voice] Switching to: ${msg.voice}`);
          state.selectedVoice = msg.voice; // Update tracked voice
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
          processHermesResponse(ws, state, msg.text);
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
console.log(`[Shorekeeper JARVIS] Engine: Cascaded (Deepgram STT → Hermes → Fish Audio TTS)`);
console.log(`[Shorekeeper JARVIS] Default Voice: ${DEFAULT_VOICE} | Gemini Live: ${MODEL} (STT fallback)`);
