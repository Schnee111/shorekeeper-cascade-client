/**
 * PCM AudioWorklet Processor
 * Captures raw PCM Float32 samples from mic and posts them to main thread.
 * Runs in AudioWorklet context (separate thread).
 */
class PCMProcessor extends AudioWorkletProcessor {
  process(inputs) {
    const input = inputs[0]?.[0];
    if (input && input.length > 0) {
      // Copy the Float32Array (it's recycled after process() returns)
      this.port.postMessage(new Float32Array(input));
    }
    return true;
  }
}

registerProcessor("pcm-processor", PCMProcessor);
