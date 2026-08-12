/**
 * audio-playback.ts — Queue-based audio player for MP3 and PCM.
 *
 * Supports:
 * - MP3 (base64) from Fish Audio TTS
 * - PCM 24kHz (base64) from Gemini Live (legacy/fallback)
 *
 * Uses AudioContext.decodeAudioData() for MP3, direct buffer for PCM.
 */

function base64ToArrayBuffer(base64: string): ArrayBuffer {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
}

function isLikelyMP3(base64: string): boolean {
  // MP3 files typically start with ID3 tag or MPEG frame sync (0xFF 0xFB/0xFA/0xF3/0xF2)
  if (base64.length < 4) return false;
  const binary = atob(base64.slice(0, 4));
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  // Check for ID3 header
  if (bytes[0] === 0x49 && bytes[1] === 0x44 && bytes[2] === 0x33) return true; // "ID3"
  // Check for MPEG frame sync (0xFF followed by 0xE0+)
  if (bytes[0] === 0xFF && (bytes[1] & 0xE0) === 0xE0) return true;
  return false;
}

export function createPlayer() {
  let ctx: AudioContext | null = null;
  let nextTime = 0;
  let playing = false;

  function ensureCtx() {
    if (!ctx || ctx.state === "closed") {
      ctx = new AudioContext();
    }
    // Resume if suspended (autoplay policy)
    if (ctx.state === "suspended") {
      ctx.resume();
    }
    return ctx;
  }

  async function play(base64: string) {
    const audioCtx = ensureCtx();
    
    if (isLikelyMP3(base64)) {
      // Decode MP3 using browser's native decoder
      const arrayBuffer = base64ToArrayBuffer(base64);
      const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
      
      const source = audioCtx.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(audioCtx.destination);

      const now = audioCtx.currentTime;
      if (nextTime < now) nextTime = now;

      source.start(nextTime);
      nextTime += audioBuffer.duration;
      playing = true;
    } else {
      // Legacy PCM 24kHz playback (for Gemini Live fallback)
      const i16 = new Int16Array(base64ToArrayBuffer(base64));
      const f32 = new Float32Array(i16.length);
      for (let i = 0; i < i16.length; i++) {
        f32[i] = i16[i] / 0x8000;
      }

      const buffer = audioCtx.createBuffer(1, f32.length, 24000);
      buffer.copyToChannel(f32 as unknown as Float32Array<ArrayBuffer>, 0);

      const source = audioCtx.createBufferSource();
      source.buffer = buffer;
      source.connect(audioCtx.destination);

      const now = audioCtx.currentTime;
      if (nextTime < now) nextTime = now;

      source.start(nextTime);
      nextTime += buffer.duration;
      playing = true;
    }
  }

  /** Stop playback immediately (barge-in) */
  function stop() {
    nextTime = 0;
    playing = false;
    if (ctx) {
      // Close and recreate to kill all queued sources
      ctx.close().catch(() => {});
      ctx = null;
    }
  }

  function isPlaying() {
    return playing;
  }

  function close() {
    stop();
  }

  return { play, stop, close, isPlaying };
}
