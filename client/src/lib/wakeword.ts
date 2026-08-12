/**
 * wakeword.ts — openWakeWord wake word listener (browser, ONNX Runtime Web WASM).
 *
 * Standby gate: listens locally for the "hey jarvis" pre-trained model
 * (Apache-2.0, no account/key needed — replaces Picovoice Porcupine). On
 * detection, calls onWake once (debounced), then the caller switches mic
 * ownership to Gemini capture.
 *
 * MIC OWNERSHIP: the openwakeword-web `Microphone` owns getUserMedia while
 * subscribed. The caller MUST stop this (via the returned stop fn) before
 * starting Gemini capture, and only re-arm it after Gemini capture has
 * stopped. Never run both concurrently.
 *
 * ASSETS (served from Vite `public/`, paths respect `base: '/jarvis/'`):
 *   /jarvis/wakeword/melspectrogram.onnx        — feature model
 *   /jarvis/wakeword/embedding_model.onnx       — feature model
 *   /jarvis/wakeword/hey_jarvis_v0.1.onnx       — wake word model
 *   /jarvis/wakeword/mic-worklet.js             — 16 kHz PCM AudioWorklet
 *   /jarvis/ort/ort-wasm-simd-threaded.{mjs,wasm} — ONNX Runtime wasm
 */

import { OpenWakeWord } from "openwakeword-web";
import { Microphone } from "openwakeword-web/microphone";
import * as ort from "onnxruntime-web";

const BASE = "/jarvis/";
const MODELS_URL = `${BASE}wakeword/`;
const ORT_WASM_URL = `${BASE}ort/`;
const WORKLET_URL = `${BASE}wakeword/mic-worklet.js`;

/** Suppress double-triggers from consecutive above-threshold frames. */
const WAKE_DEBOUNCE_MS = 2500;

/**
 * Start listening for the wake word ("hey jarvis").
 * @param onWake  called once when the keyword is detected
 * @param onError called with a human-readable message on any failure
 * @returns async stop fn that unsubscribes the mic and releases the model
 */
export async function startWakeWord(
  onWake: () => void,
  onError: (message: string) => void = () => {}
): Promise<() => Promise<void>> {
  let oww: OpenWakeWord | null = null;
  let mic: Microphone | null = null;
  let lastFired = 0;

  try {
    // Force asking for microphone permission FIRST before loading any WASM
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true }).catch(err => {
      onError(`Microphone permission denied: ${err.message}`);
      throw err;
    });

    // Close the initial stream just used for permission check
    stream.getTracks().forEach(track => track.stop());

    // Configure ONNX Runtime to find the local WASM files
    ort.env.wasm.wasmPaths = ORT_WASM_URL;
    ort.env.wasm.numThreads = 1;
    ort.env.wasm.simd = false;

    // VERY CRITICAL: Disable JSEP explicitly to prevent the runtime from trying to load it
    // even if hardware theoretically supports it (prevents .jsep.mjs fetching error)
    // ort.env.wasm.wasmPaths alone is not enough to stop WebNN/JSEP probes
    if (ort.env.wasm) {
      // Try to prevent any JSEP/WebGPU initialization at the environment level
      (ort.env as any).webgpu = false;
      (ort.env as any).webgl = false;
    }

    oww = await OpenWakeWord.create({
      baseUrl: MODELS_URL,
      wakewordModels: ["hey_jarvis"],
      melspecModelPath: `${MODELS_URL}melspectrogram.onnx`,
      embeddingModelPath: `${MODELS_URL}embedding_model.onnx`,
      threshold: 0.5,
      onDetection: () => {
        const now = Date.now();
        if (now - lastFired < WAKE_DEBOUNCE_MS) return;
        lastFired = now;
        onWake();
      },
    });

    mic = new Microphone(
      async (frame) => {
        try {
          await oww!.predict(frame);
        } catch (e) {
          const message = e instanceof Error ? `${e.name}: ${e.message}` : String(e);
          onError(`wakeword:predict-error ${message}`);
        }
      },
      { workletUrl: WORKLET_URL }
    );

    await mic.start();
  } catch (e) {
    const message = e instanceof Error ? `${e.name}: ${e.message}` : String(e);
    onError(`wakeword:init-error ${message}`);
    // Best-effort cleanup of anything partially started.
    if (mic) {
      try {
        await mic.stop();
      } catch {
        // ignore stop errors on failed init
      }
    }
    if (oww) {
      try {
        await oww.reset();
      } catch {
        // ignore reset errors on failed init
      }
    }
    return async () => {};
  }

  const activeMic = mic;
  const activeOww = oww;
  return async () => {
    try {
      await activeMic.stop(); // stops tracks + closes context → releases mic
    } catch {
      // ignore stop errors
    }
    try {
      await activeOww.reset();
    } catch {
      // ignore reset errors
    }
  };
}