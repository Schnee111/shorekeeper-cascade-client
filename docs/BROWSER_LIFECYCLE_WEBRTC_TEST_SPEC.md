# Browser Lifecycle, WebGL Context Loss, AudioContext Resume, and WebRTC Reconnect Test Suite Specification

**Target:** `shorekeeper-cascade-client` (Repository: `/home/ubuntu/projects/shorekeeper-jarvis/client`)  
**Components Audited:**
- `src/components/ParticleOrb.svelte` (Three.js WebGL particle sphere, 60fps audio reactivity)
- `src/lib/audio-analyser.ts` (Web Audio API AnalyserNode, AudioContext management)
- `src/lib/livekit-voice.ts` (LiveKit WebRTC voice carrier, audio element attachment, participant tracks)
- `src/lib/stores/session.svelte.ts` (Svelte 5 runes session state machine, connection transitions)
- `src/lib/stores/conversation.svelte.ts` (Conversation transcript, streaming tokens, multi-segment accumulation)

---

## 1. Executive Architectural Audit & Vulnerability Analysis

### 1.1 WebGL & Three.js Canvas Lifecycle

#### A. WebGL Context Loss (`webglcontextlost`)
- **Current Implementation (`ParticleOrb.svelte` lines 36–50, 215–223):**
  - A `THREE.WebGLRenderer` is created and appended to `containerEl`.
  - The component registers NO listener for `webglcontextlost` on `renderer.domElement`.
  - **Vulnerability:** Under the WebGL 1.0/2.0 specification, when the browser's GPU process crashes, Windows TDR (Timeout Detection and Recovery) triggers, or a mobile OS reclaims VRAM for background apps, the browser dispatches `webglcontextlost` to the canvas. Unless JavaScript intercepts this event and explicitly invokes `event.preventDefault()`, the browser marks the context permanently unrecoverable.
  - Furthermore, in `animate()` (lines 125–210), `requestAnimationFrame` continues invoking `renderer.render(scene, camera)`. Calling `.render()` on a lost context floods the console with hundreds of `INVALID_OPERATION` or null pointer exceptions per second, causing JavaScript thread starvation.

#### B. Context Restoration (`webglcontextrestored`)
- **Current Implementation:** No listener registered.
- **Vulnerability:** Even if the GPU recovers, Three.js internal WebGL state (buffers, textures, compiled shader programs) is wiped. Geometry attributes (`posAttr.needsUpdate = true`) point to dead WebGL buffers. The 3D orb remains permanently invisible or blank unless an explicit re-initialization pipeline executes.

#### C. Tab Background Throttling & Page Visibility API
- **Current Implementation:** No listener for `document.addEventListener('visibilitychange', ...)`.
- **Vulnerability:**
  - Modern desktop and mobile browsers throttle `requestAnimationFrame` to 1 FPS or completely halt it when a tab is hidden (`document.visibilityState === 'hidden'`).
  - Upon returning to `'visible'`, the delta time or clock variable jumps, causing particle positions to glitch.
  - Additionally, running GPU buffer updates (`posArray` mutation) during a hidden state wastes CPU cycles and battery on mobile devices.

#### D. GPU Memory Leak on Teardown
- **Current Implementation (`ParticleOrb.svelte` lines 95–120, 215–223):**
  ```ts
  const texture = new THREE.CanvasTexture(canvas);
  ...
  onDestroy(() => {
    if (animId) cancelAnimationFrame(animId);
    if (geometry) geometry.dispose();
    if (material) material.dispose();
    if (renderer) {
      renderer.dispose();
      renderer.domElement.remove();
    }
  });
  ```
- **Vulnerability:**
  1. `texture` is instantiated as a local constant inside `onMount` and never stored or disposed. In WebGL, texture memory lives on the GPU; failing to call `texture.dispose()` leaks texture buffers in VRAM on every component mount/unmount cycle (e.g. 2D/3D toggling or view navigation).
  2. `particlesMesh` is not removed from `scene`.
  3. `renderer.forceContextLoss()` is not called during disposal to promptly release GPU hardware resources before the garbage collector runs.

---

### 1.2 WebRTC & Web Audio Lifecycle

#### A. AudioContext Suspended State Auto-Resume (Browser Autoplay Policies)
- **Current Implementation (`audio-analyser.ts` lines 44–46, 63–65):**
  ```ts
  if (this.ctx.state === 'suspended') {
    void this.ctx.resume();
  }
  ```
- **Vulnerability:**
  - `void this.ctx.resume()` ignores the returned `Promise<void>`.
  - Under Chrome/Safari Autoplay Policy, calling `resume()` on an `AudioContext` without an active user gesture (e.g., when a session connects via wake word, or when background stream changes occur) immediately rejects with `NotAllowedError: The play() request was interrupted by a call to pause()`.
  - When `resume()` rejects silently, `this.ctx.state` remains `'suspended'`.
  - Subsequent calls to `getFrequencyData()` return zeros:
    ```ts
    if (!this.analyser || !this.dataArray) {
      return { amplitude: 0, bass: 0, mid: 0, treble: 0 };
    }
    ```
    This freezes the 3D particle orb in its static idle shape despite active incoming speech.
  - In `livekit-voice.ts`, `room.startAudio()` is called inside `startLivekitVoice`. If audio playback is blocked by policy, no retry mechanism or user prompt is queued.

#### B. Rapid Microphone Mute/Unmute Debounce Races
- **Current Implementation (`session.svelte.ts`, `livekit-voice.ts`):**
  - In `livekit-voice.ts`: `local.setMicrophoneEnabled(true)` and `room.localParticipant.setMicrophoneEnabled(false)`.
  - In `session.svelte.ts`: `toggleSession()` has a `this.connecting` flag, but rapid taps or rapid mute/unmute toggles can invoke `setMicrophoneEnabled` while a prior track publication or SDP renegotiation is in flight.
- **Vulnerability:**
  - LiveKit `LocalParticipant.setMicrophoneEnabled(bool)` performs asynchronous WebRTC SDP offer/answer exchanges and media track acquisitions.
  - When invoked in rapid succession (<100ms apart), promise interleaving occurs:
    1. Call 1 (`enable(true)`) begins requesting mic access.
    2. Call 2 (`enable(false)`) immediately executes.
    3. Call 1 resolves late, leaving the microphone enabled when the user intended it to be muted.
  - This causes orphaned audio tracks, keeping the browser's red recording indicator active indefinitely.

#### C. Speaker Output Device Disconnection (`devicechange` / Sink Loss)
- **Current Implementation (`livekit-voice.ts` lines 134–145):**
  ```ts
  const el = track.attach();
  audioElements.push(el);
  document.body.appendChild(el);
  ```
- **Vulnerability:**
  - Remote audio tracks are attached to native `<audio>` elements.
  - When a user disconnects Bluetooth headphones or unplugs a USB DAC, the browser fires `navigator.mediaDevices.ondevicechange`.
  - In Chromium and WebKit, `<audio>` elements playing to a disconnected sink transition to a stalled or paused state without throwing an exception.
  - `livekit-voice.ts` registers no handler for `devicechange`, sink change, or audio element playback errors. The agent's voice becomes permanently silent, while the connection indicator remains deceptively "connected".

---

### 1.3 Network Resilience & Reconnection Protocol

#### A. Catastrophic Transcript Loss on Disconnect
- **Current Implementation (`session.svelte.ts` lines 100–112):**
  ```ts
  } else if (state === 'disconnected' && this.mode === 'active') {
    logs.add('warn', 'Disconnected');
    this.resetAll(); // <--- CRITICAL BUG
    this.mode = 'off';
    this.offState = 'idle';
  }
  
  private resetAll(): void {
    conversation.reset(); // <--- Wipes conversation.messages!
    tools.reset();
  }
  ```
  In `conversation.svelte.ts` line 301:
  ```ts
  reset(): void {
    ...
    this.messages.length = 0; // Wipes all chat history!
    ...
  }
  ```
- **Vulnerability:**
  - Whenever WebRTC disconnects (e.g. WiFi handoff to cellular, tunnel dropout, or server blip), `session.svelte.ts` executes `this.resetAll()`, wiping the entire `conversation.messages` array!
  - All past user speech, assistant responses, and tool telemetry are instantly deleted from the user's screen.
  - Network disconnect must NEVER erase user conversation history; it should seal the active bubble, preserve `messages`, and await reconnection.

#### B. Missing 15-Second Reconnect Grace Period
- **Current Implementation:**
  - When LiveKit encounters network loss, it emits `RoomEvent.Reconnecting`.
  - If reconnecting fails or times out, LiveKit emits `RoomEvent.Disconnected`.
  - `session.svelte.ts` treats `disconnected` as an immediate terminal transition to `off`.
- **Vulnerability:**
  - The client provides zero recovery grace period.
  - If a cellular/WiFi handover takes 4–6 seconds, the user is abruptly kicked out to the initial landing screen instead of having a resilient 15-second countdown grace window where the connection can transparently re-establish.

#### C. Exponential Backoff with Jitter
- **Current Implementation:**
  - When voice/model switching triggers reconnection (`session.svelte.ts` lines 245–246), or if a reconnection is attempted, `disconnectLivekit()` is immediately followed by `connectLivekit()`.
  - No exponential backoff, retry budget, or randomized jitter is applied.
- **Vulnerability:**
  - If the backend or token server is temporarily restarting or experiencing load spikes, unjittered immediate retries cause thundering herd contention.
  - Standard resilient WebRTC backoff requires Full Jitter:
    $$\text{Delay} = \text{random}(0, \min(M, B \times 2^{\text{attempt}}))$$
    with base $B = 1.0\text{s}$ and maximum $M = 15.0\text{s}$.

#### D. Offline-to-Online Browser Event Recovery
- **Current Implementation:**
  - No listeners for `window.addEventListener('online', ...)` or `window.addEventListener('offline', ...)`.
  - The client relies entirely on WebRTC ICE timeouts (which can take 10–30 seconds to detect complete network interface loss).

---

## 2. Resilient Target Architecture & Concrete Design

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       Shorekeeper Resilient Client                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  [ WebGL / Three.js Lifecycle ]                                             │
│   ├── webglcontextlost   ──▶ preventDefault() + cancelAnimationFrame()      │
│   ├── visibilitychange   ──▶ pause loop on 'hidden', resume on 'visible'    │
│   ├── webglcontextrestored ─▶ recreateBuffers() + reloadTexture() + resume  │
│   └── onDestroy          ──▶ dispose(geometry, material, texture, context) │
│                                                                             │
│  [ AudioContext & Hardware Lifecycle ]                                      │
│   ├── Autoplay Policy    ──▶ queued resume() bound to next User Gesture     │
│   ├── Mic Toggle Mutex   ──▶ serialized FIFO promise queue (anti-race)      │
│   └── Device Change      ──▶ ondevicechange ──▶ re-verify sink + el.play()  │
│                                                                             │
│  [ Network Resilience & Reconnection Engine ]                              │
│   ├── Network Drop       ──▶ start 15s Countdown Grace Period               │
│   ├── Reconnect Loop     ──▶ Exponential Backoff + Full Jitter (1s - 15s)   │
│   ├── Disconnect Event   ──▶ sealAgentBubble() + PRESERVE conversation!     │
│   └── Online Event       ──▶ trigger immediate ICE probe / fast reconnect   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Test Specification Matrix

| Test Suite | Spec File | Target Component | Mock Environment | Verifications |
|---|---|---|---|---|
| **1. WebGL & Three.js Lifecycle** | `webgl-lifecycle.spec.ts` | `ParticleOrb.svelte` | Fake WebGL Context, `WEBGL_lose_context`, RAF timer | • `webglcontextlost` calls `preventDefault()`<br>• RAF loop stops on context loss<br>• `webglcontextrestored` rebuilds buffers & restarts loop<br>• Page hidden pauses RAF, visible resumes<br>• Teardown disposes geometry, material, texture & forces context loss |
| **2. AudioContext & WebRTC Audio** | `audio-lifecycle.spec.ts` | `audio-analyser.ts`, `livekit-voice.ts` | Fake `AudioContext`, `MediaStream`, `MediaDevices` | • Autoplay rejection handled without unhandled promise<br>• User gesture re-triggers pending audio resume<br>• 10 rapid mic toggles serialized via mutex with 0 orphaned tracks<br>• `devicechange` event re-verifies audio output sink |
| **3. WebRTC Network Resilience** | `network-resilience.spec.ts` | `session.svelte.ts`, `livekit-voice.ts` | Mock LiveKit `Room`, Fake Timers | • Disconnect triggers 15-second grace period countdown<br>• Reconnect within grace period restores `'active'` state<br>• Grace period expiration transitions to `'off'`<br>• Exponential backoff + full jitter adheres to range limits |
| **4. Transcript Preservation & Recovery** | `session-transcript-recovery.spec.ts` | `session.svelte.ts`, `conversation.svelte.ts` | Svelte 5 Runes Stores, Mock Room | • Active turn sealed into history on network disconnect<br>• `conversation.messages` NEVER erased during disconnect/reconnect<br>• Offline -> Online triggers reconnect without UI flickers<br>• Multi-segment stream merges cleanly post-reconnect |

---

## 4. Detailed Test Suite Specifications

### Suite 1: WebGL & Three.js Canvas Lifecycle (`webgl-lifecycle.spec.ts`)

#### Test 1.1: WebGL Context Loss Interception & Loop Freeze
- **Setup:** Mount ParticleOrb or instantiate renderer with a mock WebGL context.
- **Action:** Dispatch `webglcontextlost` on `renderer.domElement`.
- **Expected:**
  1. `event.defaultPrevented` must be `true` (proves `event.preventDefault()` was called).
  2. `cancelAnimationFrame` is invoked with the active animation loop ID.
  3. Subsequent animation frames do NOT call `renderer.render()`.
  4. Status/health flag reflects `isContextLost = true`.

#### Test 1.2: WebGL Context Restoration & Buffer Re-upload
- **Setup:** ParticleOrb in lost context state.
- **Action:** Dispatch `webglcontextrestored` on `renderer.domElement`.
- **Expected:**
  1. Geometry buffer attributes (`position`, `color`) are reallocated with `PARTICLE_COUNT * 3` elements.
  2. Particle texture is re-instantiated and assigned to material.
  3. `requestAnimationFrame` is re-initiated.
  4. Orb responds to incoming audio telemetry without throwing exceptions.

#### Test 1.3: Page Visibility Throttling & Clock Sync
- **Setup:** ParticleOrb rendering at 60 FPS in visible tab.
- **Action:**
  1. Simulate backgrounding: `Object.defineProperty(document, 'visibilityState', { value: 'hidden' })` + `document.dispatchEvent(new Event('visibilitychange'))`.
  2. Advance time by 30 seconds with fake timers.
  3. Simulate foregrounding: `Object.defineProperty(document, 'visibilityState', { value: 'visible' })` + `document.dispatchEvent(new Event('visibilitychange'))`.
- **Expected:**
  1. No RAF ticks occur while `document.visibilityState === 'hidden'`.
  2. Clock delta upon resuming does NOT jump by 30 seconds (clamped to $\le 0.1\text{s}$), preventing geometry explosion/distortion.

#### Test 1.4: Complete Resource Disposal & Zero VRAM Leakage
- **Setup:** Mount ParticleOrb, run 5 frames.
- **Action:** Destroy / unmount component (`onDestroy`).
- **Expected:**
  1. `geometry.dispose()` called once.
  2. `material.dispose()` called once.
  3. `texture.dispose()` called once.
  4. `renderer.dispose()` called once.
  5. `renderer.domElement` removed from parent container.
  6. `animId` cancelled; no further RAF callbacks fire.

---

### Suite 2: WebRTC & AudioContext Lifecycle (`audio-lifecycle.spec.ts`)

#### Test 2.1: Autoplay Policy Rejection & Gesture Resumption
- **Setup:** Mock `AudioContext` whose `.resume()` returns a rejected Promise (`NotAllowedError`).
- **Action:**
  1. Call `audioAnalyser.attachMediaStream(stream)`.
  2. Verify no unhandled rejection crashes the application.
  3. Simulate user interaction (`window.dispatchEvent(new MouseEvent('pointerdown'))`).
- **Expected:**
  1. `audioAnalyser` queues the suspended context.
  2. User gesture handler invokes `.resume()`.
  3. Once resolved, `audioAnalyser.getFrequencyData()` outputs valid amplitudes.

#### Test 2.2: Rapid Microphone Mute/Unmute Mutex & Zero Track Leaks
- **Setup:** Mock `LocalParticipant` with simulated 150ms latency on `setMicrophoneEnabled`.
- **Action:**
  - Fire 10 rapid toggle calls within 50ms: `toggle(false), toggle(true), toggle(false), ...` ending on `false`.
- **Expected:**
  1. Calls are strictly serialized (no overlapping executions).
  2. Final state of `localParticipant.isMicrophoneEnabled` is `false`.
  3. All intermediate `MediaStreamTrack` instances created during `true` states are stopped (`track.stop()` called).
  4. Browser mic recording indicator would be released.

#### Test 2.3: Audio Output Sink Disconnection Recovery
- **Setup:** Remote audio track attached to an HTMLAudioElement playing agent voice.
- **Action:**
  1. Trigger `navigator.mediaDevices.dispatchEvent(new Event('devicechange'))`.
  2. Simulate `<audio>` element emitting an `error` or transitioning to `paused`.
- **Expected:**
  1. Handler catches device change.
  2. Verifies availability of default audio output sink.
  3. Calls `audioElement.play()` to resume playback.
  4. Logs info: "Audio output route re-verified".

---

### Suite 3: Network Resilience & 15-Second Reconnect Grace Period (`network-resilience.spec.ts`)

#### Test 3.1: 15-Second Reconnection Grace Period Countdown
- **Setup:** Active session (`session.mode === 'active'`).
- **Action:**
  1. LiveKit emits `RoomEvent.Reconnecting`.
  2. LiveKit emits `RoomEvent.Disconnected`.
- **Expected:**
  1. `session.mode` does NOT immediately flip to `'off'`.
  2. Reconnection coordinator begins 15-second countdown: $15 \to 14 \to 13 \dots$
  3. UI status pill shows `'reconnecting'` with remaining seconds.
  4. If reconnected at $T = 7\text{s}$, timer is cleared, mode remains `'active'`, and status returns to `'listening'`.

#### Test 3.2: Grace Period Expiration Failover
- **Setup:** Active session enters 15-second reconnection grace period.
- **Action:** Advance fake timers by 15.1 seconds with no successful reconnection.
- **Expected:**
  1. Grace period expires.
  2. `session.mode` safely transitions to `'off'`.
  3. In-flight agent turn (if any) is sealed into history (`sealAgentBubble()`).
  4. Log recorded: "Connection timed out after 15s grace period".

#### Test 3.3: Exponential Backoff with Full Jitter Formula
- **Setup:** Reconnection loop generator with Base = 1s, Max = 15s.
- **Action:** Generate 20 backoff delay intervals across attempts 0 through 6.
- **Expected:**
  1. For attempt $i$, delay is bounded by $0 \le \text{delay}_i \le \min(15000, 1000 \times 2^i)$.
  2. Delays across identical attempts exhibit variance (proving jitter is non-zero, avoiding harmonic thundering herd).

---

### Suite 4: Transcript Preservation & State Machine Recovery (`session-transcript-recovery.spec.ts`)

#### Test 4.1: Network Disconnection NEVER Erases Conversation History
- **Setup:**
  - `conversation.messages` contains:
    - Message 1: `{ role: 'user', text: 'Jelaskan cara kerja WebRTC' }`
    - Message 2: `{ role: 'assistant', text: 'WebRTC adalah protokol...', status: 'done' }`
    - Message 3: `{ role: 'assistant', text: 'Streaming lanjutan...', status: 'streaming' }`
- **Action:**
  - Simulate sudden WebRTC disconnection event (`handleStateChange('disconnected')`).
- **Expected:**
  1. `conversation.messages` length remains $\ge 3$.
  2. In-flight streaming message 3 is cleanly sealed: `status: 'done'`.
  3. `conversation.messages` is NOT wiped (`messages.length !== 0`).
  4. History remains intact and rendered in UI.

#### Test 4.2: Fast Browser Offline-to-Online Network Event Recovery
- **Setup:** Active session.
- **Action:**
  1. `window.dispatchEvent(new Event('offline'))`.
  2. Verify UI displays warning: "Network offline".
  3. `window.dispatchEvent(new Event('online'))`.
- **Expected:**
  1. Immediately triggers an active ICE ping / reconnect check without waiting for full WebRTC 30s timeout.
  2. Restores voice session seamlessly.
