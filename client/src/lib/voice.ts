import { MicVAD } from "@ricky0123/vad-web";

export type VoiceEvents = {
  onSpeechStart: () => void;
  onSegment: (webm: ArrayBuffer) => void; // segmen audio siap dikirim ke server
  onError: (e: unknown) => void;
};

export type VoiceHandle = {
  start: () => void;
  stop: () => void;
};

/**
 * createVoice: capture mic → deteksi ujung ujaran via Silero VAD →
 * rekam segmen WebM/Opus per kalimat → emit ArrayBuffer lewat onSegment.
 * getUserMedia butuh konteks aman (localhost/HTTPS).
 */
export async function createVoice(ev: VoiceEvents): Promise<VoiceHandle> {
  let recorder: MediaRecorder | null = null;
  let chunks: Blob[] = [];

  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

  const vad = await MicVAD.new({
    // Asset Silero VAD + worklet & onnxruntime WASM di-serve dari public/vad/ dan public/
    // (lihat client/README-vad.md untuk langkah copy asset).
    baseAssetPath: "/vad/",
    onnxWASMBasePath: "/vad/",
    onSpeechStart: () => {
      ev.onSpeechStart();
      chunks = [];
      try {
        recorder = new MediaRecorder(stream, { mimeType: "audio/webm;codecs=opus" });
      } catch {
        recorder = new MediaRecorder(stream); // fallback mime default
      }
      recorder.ondataavailable = (e) => {
        if (e.data.size) chunks.push(e.data);
      };
      recorder.onstop = async () => {
        const blob = new Blob(chunks, { type: "audio/webm" });
        try {
          ev.onSegment(await blob.arrayBuffer());
        } catch (e) {
          ev.onError(e);
        }
      };
      recorder.start();
    },
    onSpeechEnd: () => {
      if (recorder && recorder.state === "recording") recorder.stop();
    },
  });

  return {
    start: () => vad.start(),
    stop: () => {
      try {
        vad.pause();
      } catch (e) {
        ev.onError(e);
      }
      stream.getTracks().forEach((t) => t.stop());
    },
  };
}
