/**
 * gemini-tts.ts — Gemini TTS API wrapper.
 *
 * Uses generateContent endpoint (not streaming) for simplicity.
 * Each call synthesizes one sentence (~50-200ms latency).
 *
 * API: POST https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent
 * Model: gemini-3.1-flash-tts-preview (verified Aug 2026)
 * Audio: PCM 24kHz 16-bit LE mono, base64 encoded
 *
 * Voices: Achernar (default), Aoede, Kore, Leda, etc.
 */

const TTS_MODEL = "gemini-3.1-flash-tts-preview";
const TTS_API_URL = (apiKey: string) =>
  `https://generativelanguage.googleapis.com/v1beta/models/${TTS_MODEL}:generateContent?key=${apiKey}`;

export interface TTSSession {
  /** Synthesize text to PCM audio buffer (24kHz 16-bit LE mono). */
  synthesize(text: string, voice?: string): Promise<Buffer>;
  /** Close/cleanup (no-op for REST, but future-proof). */
  close(): void;
}

export function createTTSSession(apiKey: string): TTSSession {
  if (!apiKey) {
    console.error("[TTS] GEMINI_API_KEY not set — TTS disabled");
    return {
      synthesize: async () => Buffer.alloc(0),
      close: () => {},
    };
  }

  async function synthesize(text: string, voice: string = "Achernar"): Promise<Buffer> {
    const url = TTS_API_URL(apiKey);

    const body = {
      contents: [{ parts: [{ text }] }],
      generationConfig: {
        responseModalities: ["AUDIO"],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: {
              voiceName: voice,
            },
          },
        },
      },
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`[TTS] HTTP ${response.status}:`, errorText.slice(0, 200));
        throw new Error(`TTS failed: ${response.status}`);
      }

      const data = await response.json();

      // Extract audio from response
      // Response shape: { candidates: [{ content: { parts: [{ inlineData: { data: "base64..." } }] } }] }
      const audioData = data.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (!audioData) {
        console.error("[TTS] No audio in response:", JSON.stringify(data).slice(0, 200));
        throw new Error("TTS: no audio data in response");
      }

      return Buffer.from(audioData, "base64");
    } catch (error) {
      console.error("[TTS] Error:", error);
      throw error;
    }
  }

  function close() {
    // No persistent connection to close
  }

  return { synthesize, close };
}
