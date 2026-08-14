/**
 * recorder.ts — In-app internal session audio & video recorder.
 * Captures mixed agent TTS audio + user mic into downloadable WebM/MP4.
 */

class SessionRecorder {
  private mediaRecorder: MediaRecorder | null = null;
  private recordedChunks: Blob[] = [];
  private audioCtx: AudioContext | null = null;
  private destNode: MediaStreamAudioDestinationNode | null = null;
  private isRecording = false;

  get recording(): boolean {
    return this.isRecording;
  }

  /** Initialize the internal audio mixing bus */
  private ensureBus(): void {
    if (this.audioCtx && this.destNode) return;
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    this.audioCtx = new AudioContextClass();
    this.destNode = this.audioCtx.createMediaStreamDestination();
  }

  /** Mix an incoming MediaStream (e.g. agent audio or user mic) into the recorder bus */
  addStream(stream: MediaStream): void {
    try {
      this.ensureBus();
      if (!this.audioCtx || !this.destNode) return;
      if (this.audioCtx.state === 'suspended') {
        void this.audioCtx.resume();
      }
      const source = this.audioCtx.createMediaStreamSource(stream);
      source.connect(this.destNode);
    } catch (err) {
      console.warn('[Recorder] Failed to add stream to recorder bus:', err);
    }
  }

  /** Start recording the mixed audio stream */
  start(): boolean {
    try {
      this.ensureBus();
      if (!this.destNode) return false;

      this.recordedChunks = [];
      const stream = this.destNode.stream;
      
      // Determine supported MIME type
      let mimeType = 'audio/webm;codecs=opus';
      if (!MediaRecorder.isTypeSupported(mimeType)) {
        mimeType = MediaRecorder.isTypeSupported('audio/mp4') ? 'audio/mp4' : '';
      }

      const options = mimeType ? { mimeType } : undefined;
      this.mediaRecorder = new MediaRecorder(stream, options);

      this.mediaRecorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) {
          this.recordedChunks.push(e.data);
        }
      };

      this.mediaRecorder.start(1000); // 1-second chunks
      this.isRecording = true;
      return true;
    } catch (err) {
      console.error('[Recorder] Failed to start MediaRecorder:', err);
      return false;
    }
  }

  /** Stop recording and trigger immediate browser file download */
  stop(filenamePrefix = 'jarvis-session'): Blob | null {
    if (!this.mediaRecorder || !this.isRecording) return null;

    try {
      this.mediaRecorder.stop();
      this.isRecording = false;

      const mimeType = this.mediaRecorder.mimeType || 'audio/webm';
      const blob = new Blob(this.recordedChunks, { type: mimeType });

      // Auto-trigger download
      const ext = mimeType.includes('mp4') ? 'mp4' : 'webm';
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = `${filenamePrefix}-${timestamp}.${ext}`;
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, 2000);

      return blob;
    } catch (err) {
      console.error('[Recorder] Error stopping MediaRecorder:', err);
      return null;
    }
  }
}

export const sessionRecorder = new SessionRecorder();
