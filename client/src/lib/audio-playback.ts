/**
 * audio-playback.ts — Queue-based PCM 24kHz audio player.
 *
 * Receives base64 PCM chunks from Gemini Live, decodes to Float32,
 * and schedules seamless playback via AudioContext.
 */

function base64ToInt16(base64: string): Int16Array {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return new Int16Array(bytes.buffer);
}

function int16ToFloat32(i16: Int16Array): Float32Array {
  const f32 = new Float32Array(i16.length);
  for (let i = 0; i < i16.length; i++) {
    f32[i] = i16[i] / 0x8000;
  }
  return f32;
}

export function createPlayer() {
  let ctx: AudioContext | null = null;
  let nextTime = 0;
  let playing = false;

  function ensureCtx() {
    if (!ctx || ctx.state === "closed") {
      ctx = new AudioContext({ sampleRate: 24000 });
    }
    // Resume if suspended (autoplay policy)
    if (ctx.state === "suspended") {
      ctx.resume();
    }
    return ctx;
  }

  function play(base64pcm: string) {
    const audioCtx = ensureCtx();
    const i16 = base64ToInt16(base64pcm);
    const f32 = int16ToFloat32(i16);

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
