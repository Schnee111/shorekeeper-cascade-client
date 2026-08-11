/**
 * audio-capture.ts — Mic capture via AudioWorklet, output PCM 16kHz base64.
 *
 * getUserMedia → AudioContext (16kHz) → AudioWorklet → Float32 → Int16 LE → base64
 */

function float32ToInt16(f32: Float32Array): Int16Array {
  const i16 = new Int16Array(f32.length);
  for (let i = 0; i < f32.length; i++) {
    const s = Math.max(-1, Math.min(1, f32[i]));
    i16[i] = s < 0 ? s * 0x8000 : s * 0x7fff;
  }
  return i16;
}

function int16ToBase64(i16: Int16Array): string {
  const bytes = new Uint8Array(i16.buffer);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

export async function startCapture(
  onChunk: (base64pcm: string) => void
): Promise<() => void> {
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: {
      sampleRate: 16000,
      channelCount: 1,
      echoCancellation: true,
      noiseSuppression: true,
    },
  });

  const ctx = new AudioContext({ sampleRate: 16000 });
  const workletUrl = `${import.meta.env.BASE_URL}pcm-worklet.js`;
  await ctx.audioWorklet.addModule(workletUrl);

  const source = ctx.createMediaStreamSource(stream);
  const worklet = new AudioWorkletNode(ctx, "pcm-processor");

  worklet.port.onmessage = (e: MessageEvent<Float32Array>) => {
    const i16 = float32ToInt16(e.data);
    onChunk(int16ToBase64(i16));
  };

  source.connect(worklet);
  // Don't connect worklet to destination (we don't want to hear our own mic)

  return () => {
    try {
      source.disconnect();
      worklet.disconnect();
      stream.getTracks().forEach((t) => t.stop());
      ctx.close();
    } catch {
      // cleanup errors are fine
    }
  };
}
