# JARVIS Hermes Integration Plan

**Date:** 2026-08-11
**Status:** Planning
**Approach:** Opsi B - Full Hermes Brain + Gemini TTS

## Overview

Integrate Hermes as the reasoning brain for JARVIS voice assistant, replacing Gemini Live's reasoning with Hermes while maintaining voice I/O quality.

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│ Browser (Svelte)                                             │
│  - Mic capture → WebSocket                                   │
│  - Display transcripts (user + assistant)                    │
│  - Play TTS audio                                            │
│  - Voice selector (Achernar)                                 │
└─────────────────────────────────────────────────────────────┘
                          ↓ WebSocket (JSON)
┌─────────────────────────────────────────────────────────────┐
│ Elysia Server (Bun + TypeScript)                             │
│                                                              │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐  │
│  │ Gemini Live  │    │   Deepgram   │    │  Hermes API  │  │
│  │   (STT)      │    │   Nova-3     │    │   Bridge     │  │
│  │  final       │    │  realtime    │    │   (reason)   │  │
│  │  transcript  │    │  subtitle    │    │   SOUL.md    │  │
│  └──────┬───────┘    └──────┬───────┘    └──────┬───────┘  │
│         │                   │                   │           │
│         └───────────────────┼───────────────────┘           │
│                             ↓                               │
│                    ┌──────────────┐                         │
│                    │ Sentence     │                         │
│                    │ Detector +   │                         │
│                    │ TTS Queue    │                         │
│                    └──────┬───────┘                         │
│                           ↓                                 │
│                    ┌──────────────┐                         │
│                    │ Gemini TTS   │                         │
│                    │ (Achernar)   │                         │
│                    └──────┬───────┘                         │
└───────────────────────────┼─────────────────────────────────┘
                            ↓ Audio (base64)
                        Browser playback
```

## Flow Detail

1. **User speaks** → Browser captures mic → sends audio chunks via WebSocket
2. **Parallel processing:**
   - **Deepgram Nova-3**: Realtime subtitle (interim + final transcripts)
   - **Gemini Live**: High-accuracy final transcript (for Hermes input)
3. **Turn complete** (Gemini Live turnComplete event):
   - Extract final transcript from Gemini Live
   - Send to Hermes API with SOUL.md context
   - Hermes returns streaming response
4. **Sentence detection:**
   - Parse Hermes streaming response
   - Detect sentence boundaries (period, question mark, exclamation)
   - Queue sentences for TTS
5. **TTS generation:**
   - Gemini TTS API with Achernar voice
   - Generate audio per sentence
   - Stream back to browser as base64
6. **Browser playback:**
   - Play audio chunks in order
   - Display assistant transcript (from Hermes)

## Task Breakdown

### Phase 0: Investigation (10 min)
**Task 0.1: Hermes Gateway API**
- [ ] Check Hermes gateway HTTP endpoints
- [ ] Identify authentication method
- [ ] Verify streaming support
- [ ] Document request/response format
- [ ] Check if SOUL.md is auto-loaded or needs manual injection

**Task 0.2: Gemini TTS API**
- [ ] Verify Gemini TTS API endpoint
- [ ] Confirm Achernar voice availability
- [ ] Test Indonesian language support
- [ ] Document audio format (sample rate, encoding)
- [ ] Check rate limits and pricing

### Phase 1: Hermes Bridge (20 min)
**Task 1.1: Create hermes-bridge.ts**
```typescript
// Location: server/src/hermes-bridge.ts
export interface HermesSession {
  query(text: string): AsyncIterable<string>; // streaming
  close(): void;
}

export async function createHermesBridge(): Promise<HermesSession> {
  // Connect to Hermes gateway
  // Load SOUL.md context
  // Return query interface
}
```

**Task 1.2: Sentence Detector**
```typescript
// Location: server/src/sentence-detector.ts
export function detectSentences(text: string): string[] {
  // Split on sentence boundaries
  // Handle abbreviations, numbers, etc.
  // Return array of complete sentences
}
```

### Phase 2: TTS Integration (15 min)
**Task 2.1: Create gemini-tts.ts**
```typescript
// Location: server/src/gemini-tts.ts
export interface TTSSession {
  synthesize(text: string): Promise<Buffer>; // PCM audio
  close(): void;
}

export async function createTTSSession(voice: string): Promise<TTSSession> {
  // Connect to Gemini TTS API
  // Configure Achernar voice
  // Return synthesis interface
}
```

**Task 2.2: Audio Format Conversion**
- Gemini TTS returns: 24kHz PCM, 16-bit, little-endian
- Browser expects: 24kHz PCM, 16-bit, little-endian
- May need base64 encoding for WebSocket transport

### Phase 3: Server Orchestration (20 min)
**Task 3.1: Update server/src/index.ts**
```typescript
// Replace Gemini Live reasoning with:
// 1. Gemini Live STT (final transcript)
// 2. Hermes query (streaming response)
// 3. Sentence detection
// 4. TTS generation (per sentence)
// 5. Audio streaming to browser
```

**Task 3.2: State Machine**
```
States:
- idle: waiting for wake word or button press
- listening: capturing audio
- processing: Hermes reasoning
- speaking: playing TTS audio
- turn_complete: ready for next input
```

**Task 3.3: WebSocket Protocol**
```typescript
// Client → Server
{ type: 'audio', data: base64 }      // mic chunks
{ type: 'start' }                     // start session
{ type: 'stop' }                      // stop session
{ type: 'voice', name: 'Achernar' }   // change voice

// Server → Client
{ type: 'transcript', role: 'user', text: '...', isFinal: true }
{ type: 'transcript', role: 'assistant', text: '...', isFinal: true }
{ type: 'audio', data: base64 }       // TTS chunks
{ type: 'status', state: 'listening' | 'processing' | 'speaking' }
```

### Phase 4: Client Updates (15 min)
**Task 4.1: Update App.svelte**
- Remove Gemini Live voice I/O
- Keep mic capture (already working)
- Add TTS audio playback
- Update transcript display (user + assistant from different sources)

**Task 4.2: Audio Queue**
```typescript
// client/src/lib/audio-queue.ts
export class AudioQueue {
  play(base64Audio: string): void;  // queue and play in order
  stop(): void;                      // clear queue
}
```

### Phase 5: Testing & Tuning (15 min)
**Task 5.1: End-to-End Test**
- [ ] Wake word detection
- [ ] STT accuracy (Deepgram + Gemini Live)
- [ ] Hermes response quality
- [ ] TTS audio quality
- [ ] Latency measurement

**Task 5.2: Latency Optimization**
- Measure: Mic → STT → Hermes → TTS → Audio playback
- Target: <2s total, <1s to first audio chunk
- Optimize: Streaming, sentence detection, TTS queue

**Task 5.3: Error Handling**
- Network failures (reconnect logic)
- API rate limits
- Audio playback errors
- Hermes timeout

## Dependencies

### Required
- Hermes gateway running (already active)
- Gemini API key (already configured)
- Deepgram API key (already configured)

### Optional
- Custom SOUL.md for JARVIS persona
- Hermes memory/skills integration

## Risks & Mitigations

| Risk | Mitigation |
|------|-----------|
| Hermes latency >2s | Implement sentence streaming, optimize detection |
| Gemini TTS rate limits | Implement queue with backpressure |
| Deepgram + Gemini Live cost | Monitor usage, consider Gemini Live STT only |
| Audio sync issues | Implement proper audio queue with timestamps |
| Memory not updating | Manually trigger Hermes memory update after session |

## Success Criteria

1. ✅ Voice interaction works end-to-end
2. ✅ Hermes reasoning with SOUL.md persona
3. ✅ Realtime subtitle (Deepgram)
4. ✅ TTS audio quality (Gemini Achernar)
5. ✅ Latency <2s total
6. ✅ Memory updates after conversation

## Notes

- Keep Gemini Live for STT (high accuracy) even though Deepgram handles subtitles
- Sentence detection is critical for perceived latency
- Test on mobile first (primary use case)
- Document all API interactions for future debugging

## Future Enhancements

1. **Hermes skills in voice**: "Hey JARVIS, search for..."
2. **Barge-in**: Detect user speaking while assistant is talking
3. **Memory recall**: "Hey JARVIS, what did we discuss yesterday?"
4. **Multi-turn context**: Remember conversation within session
5. **Custom wake word**: Train "Hey Shorekeeper" for openwakeword

## References

- Hermes docs: `/home/ubuntu/.hermes/`
- Gemini API: https://ai.google.dev/docs
- Deepgram API: https://developers.deepgram.com/
- Current code: `/home/ubuntu/projects/shorekeeper-jarvis/`
