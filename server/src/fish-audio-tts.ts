/**
 * fish-audio-tts.ts — Fish Audio TTS API wrapper (s2.1-pro-free model)
 * 
 * API: POST https://api.fish.audio/v1/tts
 * Model: s2.1-pro-free (free tier, unlimited)
 * Audio formats: mp3, wav, pcm, opus
 * 
 * Single voice strategy: use Vestia Zeta for all languages
 * This ensures consistent voice character across EN/ID/JP responses
 */

const FISH_API_URL = "https://api.fish.audio/v1/tts";
const FISH_MODEL = "s2.1-pro-free";

// Single voice for all languages (Vestia Zeta)
const VOICE_ID = "3095f8e1d1fa4b82acaa8aca720a7f83";

export interface FishAudioSession {
  /** Synthesize text to audio buffer (MP3 format by default) */
  synthesize(text: string, language?: "en" | "id" | "jp"): Promise<Buffer>;
  /** Close/cleanup */
  close(): void;
}

/**
 * Detect language from text (simplified)
 */
export function detectLanguage(text: string): "en" | "id" | "jp" {
  // Check for Japanese characters
  const japanesePattern = /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]/;
  if (japanesePattern.test(text)) {
    return "jp";
  }

  // Check for Indonesian keywords
  const indonesianKeywords = /\b(aku|kamu|dia|mereka|kita|ini|itu|dan|yang|dengan|untuk|dari|ke|di|adalah|tidak|sudah|belum|akan|bisa|mau|harus|jangan|sangat|lebih|juga|atau|tapi|karena|jika|kalau|bagaimana|mengapa|kapan|dimana|siapa|halo|selamat|terima kasih|maaf|tolong|baik|buruk|besar|kecil|baru|lama|cepat|lambat|siap|oke|ya|tidak)\b/i;
  if (indonesianKeywords.test(text)) {
    return "id";
  }

  return "en";
}

export function createFishAudioSession(apiKey: string): FishAudioSession {
  if (!apiKey) {
    console.error("[Fish TTS] FISH_API_KEY not set — TTS disabled");
    return {
      synthesize: async () => Buffer.alloc(0),
      close: () => {},
    };
  }

  async function synthesize(
    text: string,
    language: "en" | "id" | "jp" = "en"
  ): Promise<Buffer> {
    const startTime = Date.now();
    
    const requestBody = {
      text,
      format: "mp3",
      mp3_bitrate: 128,
      normalize: true,
      latency: "low", // Changed from "normal" to "low" for faster response
      reference_id: VOICE_ID, // Single voice for all languages
    };

    console.log(`[Fish TTS] Requesting: "${text.substring(0, 50)}..." (${text.length} chars)`);

    const response = await fetch(FISH_API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "model": FISH_MODEL,
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[Fish TTS] HTTP ${response.status}:`, errorText.slice(0, 300));
      throw new Error(`Fish TTS failed: ${response.status}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    const elapsed = Date.now() - startTime;
    console.log(`[Fish TTS] Generated ${arrayBuffer.byteLength} bytes in ${elapsed}ms`);
    
    return Buffer.from(arrayBuffer);
  }

  function close() {
    // No persistent connection to close
  }

  return { synthesize, close };
}
