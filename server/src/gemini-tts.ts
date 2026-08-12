/**
 * gemini-tts.ts — Gemini TTS API wrapper (verified Aug 12, 2026).
 *
 * Uses generateContent (non-streaming) by default; streaming supported on
 * gemini-3.1-flash-tts-preview via streamGenerateContent?alt=sse.
 *
 * API: POST https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent
 * Models: gemini-3.1-flash-tts-preview (recommended, streaming) | gemini-2.5-flash-preview-tts (no streaming)
 * Audio: RAW PCM 24kHz 16-bit LE mono, base64 encoded — NO WAV header.
 *        Wrap with toWav() for browser playback, or feed raw PCM to the
 *        existing JARVIS playback queue (same format as Gemini Live output).
 *
 * Voices: Achernar (default, Soft/female), Aoede, Kore, Leda, etc. (30 total)
 *
 * ⚠️ FREE TIER QUOTA: 10 requests/day PER MODEL PER PROJECT (verified live,
 *    metric generate_content_free_tier_requests, limit 10). 429 body carries
 *    RetryInfo.retryDelay (seconds) — respect it. Paid tier: ~$0.005 per 10s line.
 * ⚠️ gemini-3.1-flash-tts-preview occasionally returns text tokens → server 500.
 *    Docs mandate retry logic (implemented below).
 */

const TTS_MODEL = process.env.GEMINI_TTS_MODEL ?? "gemini-3.1-flash-tts-preview";
const TTS_VOICE = process.env.GEMINI_TTS_VOICE ?? "Achernar";
const TTS_API_URL = (model: string, apiKey: string, stream = false) =>
  `https://generativelanguage.googleapis.com/v1beta/models/${model}:${
    stream ? "streamGenerateContent?alt=sse" : "generateContent"
  }`;

export interface TTSSession {
  /** Synthesize text to PCM audio buffer (24kHz 16-bit LE mono, no WAV header). */
  synthesize(text: string, voice?: string): Promise<Buffer>;
  /** Streaming variant — yields raw PCM chunks as they arrive. 3.1 model only. */
  synthesizeStream(
    text: string,
    voice?: string,
    onChunk?: (pcmChunk: Buffer) => void
  ): Promise<Buffer>;
  /** Close/cleanup (no-op for REST, but future-proof). */
  close(): void;
}

/** Wrap raw PCM (24kHz s16le mono) in a WAV header for <audio>/decodeAudioData. */
export function toWav(pcm: Buffer): Buffer {
  const header = Buffer.alloc(44);
  header.write("RIFF", 0);
  header.writeUInt32LE(36 + pcm.length, 4);
  header.write("WAVE", 8);
  header.write("fmt ", 12);
  header.writeUInt32LE(16, 16); // fmt chunk size
  header.writeUInt16LE(1, 20); // PCM format
  header.writeUInt16LE(1, 22); // mono
  header.writeUInt32LE(24000, 24); // sample rate
  header.writeUInt32LE(24000 * 2, 28); // byte rate
  header.writeUInt16LE(2, 32); // block align
  header.writeUInt16LE(16, 34); // bit depth
  header.write("data", 36);
  header.writeUInt32LE(pcm.length, 40);
  return Buffer.concat([header, pcm]);
}

export function createTTSSession(apiKey: string): TTSSession {
  if (!apiKey) {
    console.error("[TTS] GEMINI_API_KEY not set — TTS disabled");
    return {
      synthesize: async () => Buffer.alloc(0),
      synthesizeStream: async () => Buffer.alloc(0),
      close: () => {},
    };
  }

  function buildBody(text: string, voice: string) {
    return {
      contents: [{ parts: [{ text }] }],
      generationConfig: {
        responseModalities: ["AUDIO"],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: voice },
          },
        },
      },
    };
  }

  /** Single request with retry on 500 (documented 3.1 text-token bug) and 429 backoff. */
  async function requestWithRetry(
    url: string,
    body: unknown,
    maxRetries = 2
  ): Promise<Response> {
    let delayMs = 1000;
    for (let attempt = 0; ; attempt++) {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey },
        body: JSON.stringify(body),
      });

      if (response.ok) return response;

      // 429: read RetryInfo.retryDelay from error body if present
      if (response.status === 429 && attempt < maxRetries) {
        let waitMs = delayMs;
        try {
          const err = await response.clone().json();
          const retryInfo = err?.error?.details?.find(
            (d: { retryDelay?: string }) => d.retryDelay
          );
          if (retryInfo?.retryDelay) {
            const secs = parseFloat(retryInfo.retryDelay.replace(/s$/, ""));
            if (Number.isFinite(secs)) waitMs = Math.min(secs * 1000, 60_000);
          }
        } catch {}
        console.warn(`[TTS] 429, retrying in ${waitMs}ms (attempt ${attempt + 1})`);
        await new Promise((r) => setTimeout(r, waitMs));
        delayMs *= 2;
        continue;
      }

      // 500: documented random text-token failure on 3.1 — retry
      if (response.status >= 500 && attempt < maxRetries) {
        console.warn(`[TTS] HTTP ${response.status}, retrying (attempt ${attempt + 1})`);
        await new Promise((r) => setTimeout(r, delayMs));
        delayMs *= 2;
        continue;
      }

      return response;
    }
  }

  async function synthesize(text: string, voice: string = TTS_VOICE): Promise<Buffer> {
    const url = TTS_API_URL(TTS_MODEL, apiKey);
    const response = await requestWithRetry(url, buildBody(text, voice));

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[TTS] HTTP ${response.status}:`, errorText.slice(0, 300));
      throw new Error(`TTS failed: ${response.status}`);
    }

    const data = await response.json();
    const audioData = data.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (!audioData) {
      console.error("[TTS] No audio in response:", JSON.stringify(data).slice(0, 200));
      throw new Error("TTS: no audio data in response");
    }
    return Buffer.from(audioData, "base64");
  }

  /** SSE streaming — gemini-3.1-flash-tts-preview only. Concatenates chunks. */
  async function synthesizeStream(
    text: string,
    voice: string = TTS_VOICE,
    onChunk?: (pcmChunk: Buffer) => void
  ): Promise<Buffer> {
    const url = TTS_API_URL(TTS_MODEL, apiKey, true);
    const response = await requestWithRetry(url, buildBody(text, voice));

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[TTS] stream HTTP ${response.status}:`, errorText.slice(0, 300));
      throw new Error(`TTS stream failed: ${response.status}`);
    }

    const chunks: Buffer[] = [];
    const reader = response.body!.getReader();
    const decoder = new TextDecoder();
    let buf = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buf += decoder.decode(value, { stream: true });

      let idx: number;
      while ((idx = buf.indexOf("\n")) >= 0) {
        const line = buf.slice(0, idx).trim();
        buf = buf.slice(idx + 1);
        if (!line.startsWith("data:")) continue;
        try {
          const ev = JSON.parse(line.slice(5));
          const parts = ev.candidates?.[0]?.content?.parts ?? [];
          for (const p of parts) {
            if (p?.inlineData?.data) {
              const chunk = Buffer.from(p.inlineData.data, "base64");
              chunks.push(chunk);
              onChunk?.(chunk);
            }
          }
        } catch {}
      }
    }

    return Buffer.concat(chunks);
  }

  function close() {
    // No persistent connection to close
  }

  return { synthesize, synthesizeStream, close };
}
