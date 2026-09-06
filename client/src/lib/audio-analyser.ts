/**
 * audio-analyser.ts — Web Audio API frequency analyser helper.
 * Attaches to audio elements or media streams to provide real-time
 * frequency & amplitude data for 3D visualizers.
 */

export interface AudioFrequencyData {
  amplitude: number; // 0.0 to 1.0 (overall volume)
  bass: number;      // 0.0 to 1.0 (low frequencies)
  mid: number;       // 0.0 to 1.0 (vocal range)
  treble: number;    // 0.0 to 1.0 (high frequencies)
}

class AudioAnalyser {
  private ctx: AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private dataArray: Uint8Array | null = null;
  private sourceMap = new WeakMap<HTMLMediaElement | MediaStream, MediaElementAudioSourceNode | MediaStreamAudioSourceNode>();
  private activeSource: MediaElementAudioSourceNode | MediaStreamAudioSourceNode | null = null;
  private nativeLevel = 0;

  init(): AudioContext | null {
    if (this.ctx) return this.ctx;
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return null;

    this.ctx = new AudioContextClass();
    this.analyser = this.ctx.createAnalyser();
    this.analyser.fftSize = 128;
    this.analyser.smoothingTimeConstant = 0.8;
    this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
    return this.ctx;
  }

  getAudioContext(): AudioContext | null {
    return this.init();
  }

  attachMediaStream(stream: MediaStream): void {
    try {
      this.init();
      if (!this.ctx || !this.analyser) return;

      if (this.ctx.state === 'suspended') {
        void this.ctx.resume();
      }

      if (!this.sourceMap.has(stream)) {
        const source = this.ctx.createMediaStreamSource(stream);
        source.connect(this.analyser);
        this.sourceMap.set(stream, source);
      }
    } catch (err) {
      console.warn('[AudioAnalyser] Failed to attach media stream:', err);
    }
  }

  attachMediaElement(el: HTMLMediaElement): void {
    try {
      this.init();
      if (!this.ctx || !this.analyser) return;

      if (this.ctx.state === 'suspended') {
        void this.ctx.resume();
      }

      if (!this.sourceMap.has(el)) {
        const mediaStream = (el as HTMLAudioElement).srcObject as MediaStream;
        if (mediaStream && mediaStream instanceof MediaStream) {
          const source = this.ctx.createMediaStreamSource(mediaStream);
          source.connect(this.analyser);
          this.sourceMap.set(el, source);
          this.activeSource = source;
        } else {
          const source = this.ctx.createMediaElementSource(el);
          source.connect(this.analyser);
          this.sourceMap.set(el, source);
          this.activeSource = source;
        }
      }
    } catch (err) {
      console.warn('[AudioAnalyser] Failed to attach media element:', err);
    }
  }

  setNativeAudioLevel(level: number): void {
    this.nativeLevel = Math.max(0, Math.min(1, level));
  }

  getFrequencyData(): AudioFrequencyData {
    // If we have native WebRTC RTP audio level (RFC 6464), use it to drive the visualizer
    // directly, avoiding dual-sink contention or WebAudio buffer jitter.
    if (this.nativeLevel > 0.001) {
      const amp = this.nativeLevel;
      return {
        amplitude: amp,
        bass: amp * 1.2,
        mid: amp * 0.9,
        treble: amp * 0.7,
      };
    }

    if (!this.analyser || !this.dataArray) {
      return { amplitude: 0, bass: 0, mid: 0, treble: 0 };
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (this.analyser as any).getByteFrequencyData(this.dataArray);
    const len = this.dataArray.length;
    if (len === 0) return { amplitude: 0, bass: 0, mid: 0, treble: 0 };

    let sum = 0;
    let bassSum = 0;
    let midSum = 0;
    let trebleSum = 0;

    const bassEnd = Math.floor(len * 0.25);
    const midEnd = Math.floor(len * 0.7);

    for (let i = 0; i < len; i++) {
      const val = this.dataArray[i] / 255.0;
      sum += val;
      if (i < bassEnd) bassSum += val;
      else if (i < midEnd) midSum += val;
      else trebleSum += val;
    }

    return {
      amplitude: sum / len,
      bass: bassSum / Math.max(1, bassEnd),
      mid: midSum / Math.max(1, midEnd - bassEnd),
      treble: trebleSum / Math.max(1, len - midEnd),
    };
  }
}

export const audioAnalyser = new AudioAnalyser();
