/**
 * fish-audio-tts.ts — Fish Audio TTS API wrapper (s2.1-pro-free model)
 * 
 * API: POST https://api.fish.audio/v1/tts
 * Model: s2.1-pro-free (free tier, unlimited)
 * Audio formats: mp3, wav, pcm, opus
 * 
 * Multi-voice support:
 * - English/Japanese: default voice (no reference_id)
 * - Indonesian: use specific reference_id for better quality
 * 
 * Rate limits: 5 concurrent requests (Starter tier)
 */

const FISH_API_URL = "https://api.fish.audio/v1/tts";
const FISH_MODEL = "s2.1-pro-free";

// Indonesian voice reference IDs (tested and verified)
const INDONESIAN_VOICE_ID = "3095f8e1d1fa4b82acaa8aca720a7f83"; // Vestia Zeta

export interface FishAudioSession {
  /** Synthesize text to audio buffer (MP3 format by default) */
  synthesize(text: string, language?: "en" | "id" | "jp"): Promise<Buffer>;
  /** Close/cleanup */
  close(): void;
}

/**
 * Detect language from text
 * Returns: "id" for Indonesian, "jp" for Japanese, "en" for English (default)
 */
export function detectLanguage(text: string): "en" | "id" | "jp" {
  // Check for Japanese characters (hiragana, katakana, kanji)
  const japanesePattern = /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]/;
  if (japanesePattern.test(text)) {
    return "jp";
  }

  // Check for Indonesian keywords/patterns
  const indonesianKeywords = /\b(aku|kamu|dia|mereka|kita|ini|itu|dan|yang|dengan|untuk|dari|ke|di|adalah|tidak|sudah|belum|akan|bisa|mau|harus|jangan|sangat|lebih|juga|atau|tapi|karena|jika|kalau|bagaimana|mengapa|kapan|dimana|siapa|halo|selamat|terima kasih|maaf|tolong|baik|buruk|besar|kecil|baru|lama|cepat|lambat|siap|oke|ya|tidak)\b/i;
  if (indonesianKeywords.test(text)) {
    return "id";
  }

  // Default to English
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
    const requestBody: any = {
      text,
      format: "mp3",
      mp3_bitrate: 128,
      normalize: true,
      latency: "normal",
    };

    // Use Indonesian voice for Indonesian text
    if (language === "id") {
      requestBody.reference_id = INDONESIAN_VOICE_ID;
    }

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
    return Buffer.from(arrayBuffer);
  }

  function close() {
    // No persistent connection to close
  }

  return { synthesize, close };
}
