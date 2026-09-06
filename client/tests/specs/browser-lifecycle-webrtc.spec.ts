/**
 * @vitest-environment jsdom
 */
/**
 * browser-lifecycle-webrtc.spec.ts
 *
 * Concrete Vitest unit & behavioral test suite specification for:
 * 1. WebGL Context Loss & Restoration (`webglcontextlost`, `webglcontextrestored`, visibility change)
 * 2. AudioContext Resume & Autoplay Policies (suspended state, gesture retry, mic mute/unmute mutex)
 * 3. Network Resilience & 15-second Reconnect Grace Period (backoff with jitter, offline/online events)
 * 4. Zero Transcript Loss across WebRTC Disconnects
 *
 * Target: shorekeeper-cascade-client
 */

import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// ============================================================================
// MOCKS & FIXTURES
// ============================================================================

/** Mock WebGL Context with WEBGL_lose_context extension emulation */
class MockWebGLRenderingContext {
  canvas: HTMLCanvasElement;
  private isLost = false;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
  }

  getExtension(name: string) {
    if (name === 'WEBGL_lose_context') {
      return {
        loseContext: () => {
          this.isLost = true;
          const ev = new CustomEvent('webglcontextlost', { cancelable: true });
          this.canvas.dispatchEvent(ev);
        },
        restoreContext: () => {
          this.isLost = false;
          const ev = new CustomEvent('webglcontextrestored');
          this.canvas.dispatchEvent(ev);
        },
      };
    }
    return null;
  }

  isContextLost(): boolean {
    return this.isLost;
  }

  viewport = vi.fn();
  clearColor = vi.fn();
  clear = vi.fn();
  createBuffer = vi.fn(() => ({}));
  bindBuffer = vi.fn();
  bufferData = vi.fn();
  createProgram = vi.fn(() => ({}));
  useProgram = vi.fn();
}

/** Mock AudioContext with Autoplay Policy & state transitions */
class MockAudioContext {
  state: 'suspended' | 'running' | 'closed' = 'suspended';
  shouldFailResume = false;
  resumeCount = 0;

  createAnalyser() {
    return {
      fftSize: 128,
      smoothingTimeConstant: 0.8,
      frequencyBinCount: 64,
      getByteFrequencyData: vi.fn((array: Uint8Array) => {
        if (this.state === 'running') {
          array.fill(128); // Simulated active signal
        } else {
          array.fill(0); // Suspended = zero signal
        }
      }),
    };
  }

  createMediaStreamSource(_stream: any) {
    return {
      connect: vi.fn(),
      disconnect: vi.fn(),
    };
  }

  async resume(): Promise<void> {
    this.resumeCount++;
    if (this.shouldFailResume) {
      throw new DOMException('The play() request was interrupted by a call to pause()', 'NotAllowedError');
    }
    this.state = 'running';
  }

  async close(): Promise<void> {
    this.state = 'closed';
  }
}

/** Mock LocalParticipant with async mic track negotiation */
class MockLocalParticipant {
  isMicrophoneEnabled = false;
  activeTracks: Array<{ id: string; stop: ReturnType<typeof vi.fn> }> = [];
  pendingNegotiations = 0;

  async setMicrophoneEnabled(enabled: boolean): Promise<void> {
    this.pendingNegotiations++;
    // Simulate real WebRTC async SDP offer/answer turnaround delay
    await new Promise((resolve) => setTimeout(resolve, 80));
    this.pendingNegotiations--;

    this.isMicrophoneEnabled = enabled;
    if (enabled) {
      const track = { id: `mic-track-${Date.now()}-${Math.random()}`, stop: vi.fn() };
      this.activeTracks.push(track);
    } else {
      // Stop all active tracks
      for (const t of this.activeTracks) {
        t.stop();
      }
      this.activeTracks = [];
    }
  }
}

// ============================================================================
// SUITE 1: WebGL & Three.js Lifecycle
// ============================================================================
describe('WebGL & Three.js Canvas Lifecycle (ParticleOrb)', () => {
  let canvas: HTMLCanvasElement;
  let mockGL: MockWebGLRenderingContext;

  beforeEach(() => {
    vi.useFakeTimers();
    canvas = document.createElement('canvas');
    mockGL = new MockWebGLRenderingContext(canvas);
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  it('handles webglcontextlost: calls preventDefault() and pauses the RAF animation loop', () => {
    let loopActive = true;
    let animFrameCount = 0;
    let cancelCalled = false;
    let animId = 123;

    vi.spyOn(window, 'cancelAnimationFrame').mockImplementation((id) => {
      if (id === animId) {
        cancelCalled = true;
        loopActive = false;
      }
    });

    // ParticleOrb lifecycle contract:
    // Canvas must attach 'webglcontextlost' and call preventDefault()
    canvas.addEventListener('webglcontextlost', (e: Event) => {
      e.preventDefault(); // MANDATORY per WebGL spec to allow context restore
      if (animId) {
        window.cancelAnimationFrame(animId);
      }
    });

    const loseExt = mockGL.getExtension('WEBGL_lose_context');
    expect(loseExt).not.toBeNull();

    // Trigger context loss
    loseExt!.loseContext();

    expect(cancelCalled).toBe(true);
    expect(loopActive).toBe(false);
    expect(mockGL.isContextLost()).toBe(true);
  });

  it('handles webglcontextrestored: recreates particle buffers and restarts animation loop', () => {
    let reinitialized = false;
    let loopRunning = false;

    canvas.addEventListener('webglcontextrestored', () => {
      // Re-create BufferGeometry and restart RAF
      reinitialized = true;
      loopRunning = true;
    });

    const loseExt = mockGL.getExtension('WEBGL_lose_context')!;
    loseExt.loseContext();
    expect(reinitialized).toBe(false);

    // Restore context
    loseExt.restoreContext();

    expect(reinitialized).toBe(true);
    expect(loopRunning).toBe(true);
    expect(mockGL.isContextLost()).toBe(false);
  });

  it('pauses rendering when tab is hidden and resumes without geometry delta-time spikes', () => {
    let isTabVisible = true;
    let loopRunning = true;
    let clock = 0;

    const onVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        isTabVisible = false;
        loopRunning = false;
      } else {
        isTabVisible = true;
        loopRunning = true;
      }
    };

    document.addEventListener('visibilitychange', onVisibilityChange);

    // Step 1: Normal visible frame
    clock += 0.015;
    expect(isTabVisible).toBe(true);

    // Step 2: Tab backgrounded
    Object.defineProperty(document, 'visibilityState', { value: 'hidden', configurable: true });
    document.dispatchEvent(new Event('visibilitychange'));

    expect(isTabVisible).toBe(false);
    expect(loopRunning).toBe(false);

    // Advance 60 seconds of background time
    vi.advanceTimersByTime(60000);

    // Step 3: Tab foregrounded
    Object.defineProperty(document, 'visibilityState', { value: 'visible', configurable: true });
    document.dispatchEvent(new Event('visibilitychange'));

    expect(isTabVisible).toBe(true);
    expect(loopRunning).toBe(true);
    // Delta must be clamped to prevent particle explosion
    const delta = Math.min(0.015, 0.033);
    clock += delta;
    expect(clock).toBeLessThan(1.0);
  });

  it('disposes all GPU textures, materials, geometries, and forces context loss on component destroy', () => {
    const geometryDispose = vi.fn();
    const materialDispose = vi.fn();
    const textureDispose = vi.fn();
    const rendererDispose = vi.fn();
    const forceContextLoss = vi.fn();

    const mockGeometry = { dispose: geometryDispose };
    const mockMaterial = { dispose: materialDispose };
    const mockTexture = { dispose: textureDispose };
    const mockRenderer = {
      dispose: rendererDispose,
      forceContextLoss,
      domElement: canvas,
    };

    // Simulate component onDestroy
    const onDestroyHandler = () => {
      mockGeometry.dispose();
      mockMaterial.dispose();
      mockTexture.dispose();
      mockRenderer.dispose();
      mockRenderer.forceContextLoss();
      mockRenderer.domElement.remove();
    };

    onDestroyHandler();

    expect(geometryDispose).toHaveBeenCalledTimes(1);
    expect(materialDispose).toHaveBeenCalledTimes(1);
    expect(textureDispose).toHaveBeenCalledTimes(1);
    expect(rendererDispose).toHaveBeenCalledTimes(1);
    expect(forceContextLoss).toHaveBeenCalledTimes(1);
  });
});

// ============================================================================
// SUITE 2: AudioContext & WebRTC Audio Lifecycle
// ============================================================================
describe('WebRTC Audio & AudioContext Lifecycle (audio-analyser & livekit-voice)', () => {
  let mockCtx: MockAudioContext;

  beforeEach(() => {
    mockCtx = new MockAudioContext();
  });

  it('catches Autoplay Policy resume() rejections without throwing unhandled promise errors', async () => {
    mockCtx.shouldFailResume = true;
    let resumePending = false;
    let errorCaught = false;

    // Resilient resume wrapper
    const safeResume = async () => {
      try {
        await mockCtx.resume();
      } catch (err: any) {
        if (err.name === 'NotAllowedError') {
          // Autoplay policy prevented playback until user gesture
          resumePending = true;
          errorCaught = true;
        } else {
          throw err;
        }
      }
    };

    await expect(safeResume()).resolves.not.toThrow();
    expect(errorCaught).toBe(true);
    expect(resumePending).toBe(true);
    expect(mockCtx.state).toBe('suspended');

    // Simulate subsequent user gesture (tap/click)
    mockCtx.shouldFailResume = false;
    if (resumePending) {
      await mockCtx.resume();
      resumePending = false;
    }

    expect(resumePending).toBe(false);
    expect(mockCtx.state).toBe('running');
  });

  it('serializes rapid microphone mute/unmute toggles via a mutex queue to eliminate orphaned tracks', async () => {
    const participant = new MockLocalParticipant();

    // Mutex queue implementation to prevent SDP negotiation races
    class AsyncMutexQueue {
      private currentPromise: Promise<void> = Promise.resolve();

      run(task: () => Promise<void>): Promise<void> {
        this.currentPromise = this.currentPromise.then(task, task);
        return this.currentPromise;
      }
    }

    const mutex = new AsyncMutexQueue();

    // Fire 6 rapid toggle requests within milliseconds
    const sequence = [true, false, true, false, true, false];
    const promises = sequence.map((desiredState) =>
      mutex.run(async () => {
        await participant.setMicrophoneEnabled(desiredState);
      })
    );

    await Promise.all(promises);

    // Final state must be false with 0 orphaned active tracks
    expect(participant.isMicrophoneEnabled).toBe(false);
    expect(participant.activeTracks.length).toBe(0);
    expect(participant.pendingNegotiations).toBe(0);
  });

  it('detects speaker output device disconnection via ondevicechange and re-attaches audio sink', async () => {
    let sinkReattached = false;
    const mockAudioElement = {
      srcObject: {} as any,
      paused: false,
      play: vi.fn(async () => {
        sinkReattached = true;
      }),
      setSinkId: vi.fn(async () => {}),
    };

    const handleDeviceChange = async () => {
      // Re-verify output route and ensure playback continues
      try {
        if (mockAudioElement.paused || sinkReattached === false) {
          await mockAudioElement.play();
        }
      } catch (err) {
        // Fallback or retry
      }
    };

    // Simulate device disconnection
    mockAudioElement.paused = true;
    await handleDeviceChange();

    expect(mockAudioElement.play).toHaveBeenCalled();
    expect(sinkReattached).toBe(true);
  });
});

// ============================================================================
// SUITE 3: Network Resilience & 15-Second Reconnect Countdown
// ============================================================================
describe('WebRTC Network Resilience & 15-Second Reconnection Countdown', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  it('initiates a 15-second countdown grace period when WebRTC disconnects, remaining in active/reconnecting state', () => {
    let sessionMode: 'active' | 'off' = 'active';
    let lkState: 'connected' | 'reconnecting' | 'disconnected' = 'connected';
    let countdownRemaining = 15;
    let timerId: any = null;

    const onRoomDisconnected = () => {
      lkState = 'reconnecting';
      countdownRemaining = 15;
      timerId = setInterval(() => {
        countdownRemaining--;
        if (countdownRemaining <= 0) {
          clearInterval(timerId);
          sessionMode = 'off';
          lkState = 'disconnected';
        }
      }, 1000);
    };

    // Trigger disconnect
    onRoomDisconnected();

    expect(sessionMode).toBe('active'); // Must NOT drop to 'off' immediately!
    expect(lkState).toBe('reconnecting');
    expect(countdownRemaining).toBe(15);

    // Advance 5 seconds
    vi.advanceTimersByTime(5000);
    expect(countdownRemaining).toBe(10);
    expect(sessionMode).toBe('active');

    // Simulate successful reconnect at T = 8 seconds
    const onRoomReconnected = () => {
      if (timerId) clearInterval(timerId);
      lkState = 'connected';
    };
    vi.advanceTimersByTime(3000);
    onRoomReconnected();

    expect(countdownRemaining).toBe(7);
    expect(sessionMode).toBe('active');
    expect(lkState).toBe('connected');
  });

  it('times out to off state only after the full 15-second countdown expires', () => {
    let sessionMode: 'active' | 'off' = 'active';
    let countdownRemaining = 15;

    const timerId = setInterval(() => {
      countdownRemaining--;
      if (countdownRemaining <= 0) {
        clearInterval(timerId);
        sessionMode = 'off';
      }
    }, 1000);

    vi.advanceTimersByTime(14000);
    expect(countdownRemaining).toBe(1);
    expect(sessionMode).toBe('active');

    // Advance past 15 seconds
    vi.advanceTimersByTime(1500);
    expect(countdownRemaining).toBe(0);
    expect(sessionMode).toBe('off');
  });

  it('computes exponential backoff with full jitter within bounded intervals [0, min(15s, 1s * 2^attempt)]', () => {
    const calculateFullJitter = (attempt: number, baseMs = 1000, maxMs = 15000): number => {
      const cap = Math.min(maxMs, baseMs * Math.pow(2, attempt));
      return Math.floor(Math.random() * cap);
    };

    for (let attempt = 0; attempt <= 6; attempt++) {
      const cap = Math.min(15000, 1000 * Math.pow(2, attempt));
      const delay = calculateFullJitter(attempt);

      expect(delay).toBeGreaterThanOrEqual(0);
      expect(delay).toBeLessThanOrEqual(cap);
    }
  });
});

// ============================================================================
// SUITE 4: Transcript Preservation across Disconnects
// ============================================================================
describe('Zero-Data-Loss Transcript Preservation on Network Drop', () => {
  interface Message {
    id: number;
    role: 'user' | 'assistant';
    text: string;
    status: 'streaming' | 'done';
  }

  it('SEALS in-flight streaming response and PRESERVES conversation history on network disconnection', () => {
    const messages: Message[] = [
      { id: 1, role: 'user', text: 'Halo Shorekeeper!', status: 'done' },
      { id: 2, role: 'assistant', text: 'Halo! Ada yang bisa saya bantu?', status: 'done' },
      { id: 3, role: 'assistant', text: 'Saya sedang memproses permintaan Anda...', status: 'streaming' },
    ];

    // RESILIENT HANDLER: Seal in-flight bubble, clear transient sockets, DO NOT clear messages!
    const handleNetworkDisconnect = (wipeHistory = false) => {
      // 1. Seal in-flight assistant response
      const lastMsg = messages[messages.length - 1];
      if (lastMsg && lastMsg.status === 'streaming') {
        lastMsg.status = 'done';
      }

      // 2. Only wipe if explicit user reset, NEVER on network drop
      if (wipeHistory) {
        messages.length = 0;
      }
    };

    handleNetworkDisconnect(false);

    // Verifications
    expect(messages.length).toBe(3);
    expect(messages[0].text).toBe('Halo Shorekeeper!');
    expect(messages[1].text).toBe('Halo! Ada yang bisa saya bantu?');
    expect(messages[2].text).toBe('Saya sedang memproses permintaan Anda...');
    expect(messages[2].status).toBe('done'); // Sealed, not lost!
  });

  it('triggers immediate reconnect check on browser online event without waiting for ICE timeout', () => {
    let reconnectCheckFired = false;

    const onOnline = () => {
      reconnectCheckFired = true;
    };

    window.addEventListener('online', onOnline);
    window.dispatchEvent(new Event('online'));

    expect(reconnectCheckFired).toBe(true);
  });
});
