/**
 * deepgram-stt.ts — Deepgram Nova-3 real-time STT session.
 *
 * WebSocket API: wss://api.deepgram.com/v1/listen
 *   - model=nova-3
 *   - encoding=linear16
 *   - sample_rate=16000
 *   - channels=1
 *   - interim_results=true
 *   - endpointing=500
 *
 * Input: base64-encoded PCM 16kHz mono Int16 LE
 * Output: JSON transcript events
 */

// language=id: Indonesian on Nova-3 (verified working via direct WS test)
// Do NOT combine with smart_format=true — that breaks Indonesian transcription
// endpointing=1500: wait 1.5s of silence before finalizing
const DEEPGRAM_WS_URL = `wss://api.deepgram.com/v1/listen?model=nova-3&language=id&encoding=linear16&sample_rate=16000&channels=1&interim_results=true&endpointing=800`;

export interface DeepgramSession {
  sendAudio: (base64pcm: string) => void;
  close: () => void;
  onTranscript: (cb: (text: string, isFinal: boolean) => void) => void;
}

export function createDeepgramSession(apiKey: string): DeepgramSession {
  const ws = new WebSocket(DEEPGRAM_WS_URL, {
    headers: {
      Authorization: `Token ${apiKey}`,
    },
  });

  let transcriptCallback: ((text: string, isFinal: boolean) => void) | null = null;
  let keepaliveInterval: ReturnType<typeof setInterval> | null = null;
  // Track last interim transcript for final-empty fallback
  let lastInterimTranscript = "";
  let lastInterimTime = 0;

  ws.binaryType = "arraybuffer";

  ws.onopen = () => {
    console.log("[Deepgram] WebSocket connected");
    // Keepalive ping every 2s to prevent idle timeout
    keepaliveInterval = setInterval(() => {
      if (ws.readyState === WebSocket.OPEN) {
        // Send silence as keepalive (16000 Hz * 0.1s * 2 bytes = 3200 bytes of zeros)
        const silence = new ArrayBuffer(3200);
        ws.send(silence);
      }
    }, 2000);
  };

  ws.onmessage = (event) => {
    try {
      const msg = JSON.parse(event.data as string);
      
      if (msg.type === 'Results') {
        const transcript = msg.channel?.alternatives?.[0]?.transcript;
        const isFinal = msg.is_final === true;
        const speechFinal = msg.speech_final === true;
        
        console.log(`[Deepgram] Results: final=${isFinal}, speech_final=${speechFinal}, transcript="${transcript}"`);
        
        // Track last non-empty interim transcript
        if (transcript && transcript.trim()) {
          lastInterimTranscript = transcript;
          lastInterimTime = Date.now();
        }
        
        if (transcriptCallback) {
          // Send interim results as-is
          if (!isFinal && transcript) {
            transcriptCallback(transcript, false);
          }
          
          // On final: if transcript empty, fall back to last interim
          // (Nova-3 + language=id bug: final often returns empty while interim has content)
          if (isFinal) {
            const finalText = transcript?.trim() 
              ? transcript 
              : (lastInterimTranscript && (Date.now() - lastInterimTime < 3000) 
                  ? lastInterimTranscript 
                  : "");
            
            if (finalText.trim()) {
              console.log(`[Deepgram] Final (corrected): "${finalText}"${!transcript?.trim() ? " [from interim fallback]" : ""}`);
              transcriptCallback(finalText, true);
              lastInterimTranscript = ""; // reset after final
            }
          }
        }
      } else {
        console.log(`[Deepgram] Message type=${msg.type}`, JSON.stringify(msg).substring(0, 200));
      }
    } catch (e) {
      console.error("[Deepgram] Parse error:", e, "Raw:", event.data);
    }
  };

  ws.onerror = (e) => {
    console.error("[Deepgram] WebSocket error:", e);
  };

  ws.onclose = (e) => {
    console.log(`[Deepgram] WebSocket closed: code=${e.code}`);
    if (keepaliveInterval) {
      clearInterval(keepaliveInterval);
    }
  };

  return {
    sendAudio(base64pcm: string) {
      if (ws.readyState === WebSocket.OPEN) {
        // Decode base64 to binary PCM
        const binary = atob(base64pcm);
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) {
          bytes[i] = binary.charCodeAt(i);
        }
        ws.send(bytes.buffer);
      }
    },

    close() {
      if (keepaliveInterval) {
        clearInterval(keepaliveInterval);
      }
      if (ws.readyState === WebSocket.OPEN) {
        ws.close();
      }
    },

    onTranscript(cb: (text: string, isFinal: boolean) => void) {
      transcriptCallback = cb;
    },
  };
}
