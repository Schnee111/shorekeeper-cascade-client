/**
 * stores/session.svelte.ts — session lifecycle: mode state machine, LiveKit
 * connect/disconnect, wake-word arming, and the voice selector.
 *
 * Status is DERIVED from the underlying stores (conversation + tools), so
 * there is no imperative refreshStatus bookkeeping — Svelte reactivity
 * recomputes it whenever a dependency changes.
 */
import { startLivekitVoice, type LivekitHandle, type LkState, DisconnectReason } from '../livekit-voice';
import { startWakeWord } from '../wakeword';
import { FALLBACK_VOICES, MODEL_OPTIONS, VOICES_ENDPOINT, VOICE_STORAGE_KEY, MODEL_STORAGE_KEY, type ModelOption } from '../config';
import type { LkConnState, Mode, Status, VoiceOption } from '../types';
import { conversation } from './conversation.svelte';
import { logs } from './logs.svelte';
import { tools } from './tools.svelte';

class SessionStore {
  mode = $state<Mode>('off');
  lkState = $state<LkConnState>('disconnected');
  voiceSwitching = $state(false);

  // Reconnect Grace Period state
  reconnectGraceActive = $state(false);
  graceCountdown = $state(15);
  private graceInterval: ReturnType<typeof setInterval> | null = null;

  /** Status while mode === 'off' — persists errors (mic denied / connect
   *  failed) until the next attempt. */
  private offState = $state<'idle' | 'error'>('idle');
  /** True between connectLivekit start and the room being up. */
  private connecting = $state(false);

  readonly voiceOptions = $state<VoiceOption[]>([...FALLBACK_VOICES]);
  selectedVoice = $state(
    typeof localStorage !== 'undefined'
      ? localStorage.getItem(VOICE_STORAGE_KEY) || 'gura'
      : 'gura'
  );

  readonly modelOptions: ModelOption[] = MODEL_OPTIONS;
  selectedModel = $state(
    typeof localStorage !== 'undefined'
      ? localStorage.getItem(MODEL_STORAGE_KEY) || ''
      : ''
  );

  get currentVoiceLabel(): string {
    return this.voiceOptions.find((v) => v.id === this.selectedVoice)?.label ?? this.selectedVoice;
  }

  get currentModelLabel(): string {
    return this.modelOptions.find((m) => m.id === this.selectedModel)?.label ?? 'Gemini 3.6 Flash High';
  }

  /** Perceptual pipeline status — orb color, status pill, hint text, caption
   *  visibility. Purely derived; no imperative writes. */
  get status(): Status {
    if (this.mode === 'off') return this.offState;
    if (this.mode === 'standby') return 'idle';
    if (this.connecting) return 'connecting';
    conversation.segmentsVersion; // dependency — tracks the non-reactive segmentsMap
    if (conversation.agentSpeaking || conversation.hasLiveAgentSegment()) return 'speaking';
    // When turn is active, keep orb in steady 'processing' state without rapid flickering
    if (conversation.turnInProgress || conversation.awaitingReply || tools.active) return 'processing';
    return 'listening';
  }

  private lkHandle: LivekitHandle | null = null;
  private stopWake: (() => Promise<void>) | null = null;

  /** Fetch the real registry (falls back to the hard-coded list on error). */
  async loadVoices(): Promise<void> {
    try {
      // no-store: before the nginx /voices proxy existed this URL returned the
      // SPA HTML with 200, which browsers heuristic-cached — stale copies
      // survived even hard refreshes and loadVoices silently fell back.
      const res = await fetch(VOICES_ENDPOINT, { cache: 'no-store' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = (await res.json()) as { voices?: VoiceOption[] };
      if (data.voices?.length) {
        this.voiceOptions.length = 0;
        this.voiceOptions.push(...data.voices);
        if (!this.voiceOptions.some((v) => v.id === this.selectedVoice)) {
          this.selectedVoice = this.voiceOptions.find((v) => v.default)?.id ?? this.voiceOptions[0].id;
        }
      }
    } catch {
      /* keep the static fallback list */
    }
  }

  private handleStateChange(state: LkState, reason?: DisconnectReason): void {
    this.lkState = state;
    if (state === 'reconnecting') {
      logs.add('warn', 'Connection unstable — reconnecting...');
    } else if (state === 'connected') {
      this.clearGraceTimer();
      logs.add('success', 'LiveKit connected');
      // Fallback transition: If agent voice TTS stalls or delays beyond 1.8s after connection,
      // reveal workspace automatically so the user is never stuck on initial screen.
      setTimeout(() => {
        if (this.mode === 'active' && !this.hasStarted) {
          this.markStarted();
        }
      }, 1800);
    } else if (state === 'disconnected') {
      const isClientInitiated = reason === DisconnectReason.CLIENT_INITIATED;
      if (this.mode === 'active' && !isClientInitiated) {
        // Unexpected disconnect during active call -> Enter 15s Grace Period
        this.startReconnectGrace();
      } else {
        // Intentional disconnect or timeout expiration
        this.cleanupLivekit(false);
      }
    }
  }

  /** Starts the 15-second grace countdown banner before tearing down active session. */
  private startReconnectGrace(): void {
    if (this.reconnectGraceActive) return;
    this.reconnectGraceActive = true;
    this.graceCountdown = 15;
    this.lkState = 'reconnect_grace';
    logs.add('warn', 'Connection dropped unexpectedly. Holding session for 15s...');

    // Seal any current in-flight utterance so text is saved to conversation
    conversation.sealAgentBubble();

    if (this.graceInterval) clearInterval(this.graceInterval);
    this.graceInterval = setInterval(() => {
      this.graceCountdown -= 1;
      if (this.graceCountdown <= 0) {
        this.clearGraceTimer();
        logs.add('error', 'Reconnection window expired. Session paused.');
        this.cleanupLivekit(false);
      }
    }, 1000);
  }

  private clearGraceTimer(): void {
    if (this.graceInterval) {
      clearInterval(this.graceInterval);
      this.graceInterval = null;
    }
    this.reconnectGraceActive = false;
  }

  /** Manual or automated retry during grace period. */
  async retryReconnect(): Promise<void> {
    logs.add('info', 'Attempting immediate reconnect...');
    this.clearGraceTimer();
    try {
      await this.connectLivekit();
    } catch (err) {
      logs.add('error', `Reconnect attempt failed: ${err instanceof Error ? err.message : String(err)}`);
      this.startReconnectGrace();
    }
  }

  /** Explicit user cancellation from the reconnect banner. */
  cancelGraceAndEnd(): void {
    this.clearGraceTimer();
    this.cleanupLivekit(false);
    logs.add('info', 'Session ended by user.');
  }

  /**
   * Non-destructive teardown: releases WebRTC and audio handles, but
   * NEVER erases conversation messages unless explicitly instructed.
   */
  private cleanupLivekit(clearHistory = false): void {
    const handle = this.lkHandle;
    this.lkHandle = null;
    if (handle) void handle.stop();

    conversation.sealAgentBubble();
    conversation.resetTurnState();
    tools.reset();

    if (clearHistory) {
      conversation.clearHistory();
    }

    this.mode = 'off';
    this.offState = 'idle';
    this.hasStarted = false;
    this.lkState = 'disconnected';
  }

  private resetAll(): void {
    conversation.resetTurnState();
    tools.reset();
  }

  private async connectLivekit(): Promise<void> {
    if (this.connecting) return; // Prevent double trigger / race condition
    // Must be called inside a user gesture (orb tap) or after sticky
    // activation (the tap that armed the wake word) — room.startAudio()
    // satisfies the autoplay policy.
    if (this.lkHandle) {
      const oldHandle = this.lkHandle;
      this.lkHandle = null;
      try {
        await oldHandle.stop();
      } catch {}
    }
    this.offState = 'idle';
    this.mode = 'active';
    this.connecting = true;
    logs.add('info', 'Connecting to LiveKit...');
    try {
      this.lkHandle = await startLivekitVoice({
        onSegments: (segs, fromAgent) => conversation.handleSegments(segs, fromAgent),
        onSpeakingChanged: (speaking) => conversation.setAgentSpeaking(speaking),
        onStateChange: (s) => this.handleStateChange(s),
        onLog: (m) => logs.add('info', m),
        onToolActivity: (ev) => tools.handle(ev),
        onTurnState: (st) => conversation.setTurnState(st),
        voice: this.selectedVoice,
        model: this.selectedModel,
      });
      logs.add('success', `Session ${this.lkHandle.roomName} — listening`);
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      logs.add('error', `Connect failed: ${msg}`);
      this.mode = 'off';
      this.offState = 'error';
      this.lkHandle = null;
    } finally {
      this.connecting = false;
    }
  }
  hasStarted = $state(false);

  markStarted(): void {
    if (!this.hasStarted) this.hasStarted = true;
  }

  /** Toggle active live session on/off. */
  async toggleSession(): Promise<void> {
    if (this.mode === 'off' || this.mode === 'standby') {
      if (this.stopWake) {
        await this.stopWake();
        this.stopWake = null;
      }
      logs.add('info', 'Tap-to-talk activated');
      await this.connectLivekit();
    } else {
      await this.disconnectLivekit();
    }
  }

  async disconnectLivekit(): Promise<void> {
    this.clearGraceTimer();
    this.cleanupLivekit(false);
    logs.add('info', 'Session ended');
  }

  /** Explicit action to clear chat history (e.g. from UI button). */
  clearConversation(): void {
    conversation.clearHistory();
    logs.add('info', 'Conversation history cleared');
  }

  private async armWakeWord(): Promise<void> {
    if (this.stopWake) return;
    logs.add('info', 'Initializing microphone...');

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach((track) => track.stop());
      logs.add('success', 'Microphone access granted');
    } catch (e) {
      logs.add('error', `Mic denied: ${e instanceof Error ? e.message : String(e)}`);
      this.offState = 'error';
      return;
    }

    this.mode = 'standby';
    this.stopWake = await startWakeWord(
      () => this.onWake(),
      (message) => logs.add('info', message)
    );
    logs.add('success', 'Standby — say "Hey Jarvis"');
  }

  private async onWake(): Promise<void> {
    if (this.mode !== 'standby') return;
    logs.add('success', 'Wake word triggered!');
    // Stop openwakeword TOTAL first — free the mic before LiveKit owns it.
    if (this.stopWake) {
      await this.stopWake();
      this.stopWake = null;
    }
    await this.connectLivekit();
  }

  async toggleWake(): Promise<void> {
    if (!this.hasStarted) this.hasStarted = true;
    if (this.mode === 'standby') {
      if (this.stopWake) {
        await this.stopWake();
        this.stopWake = null;
      }
      this.mode = 'off';
      this.offState = 'idle';
      logs.add('info', 'Voice wake disarmed');
    } else if (this.mode === 'off') {
      await this.armWakeWord();
    }
  }

  async pickModel(id: string): Promise<void> {
    if (id === this.selectedModel || this.voiceSwitching) return;
    this.selectedModel = id;
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(MODEL_STORAGE_KEY, id);
    }
    logs.add('info', `Model switched to: ${this.currentModelLabel}`);

    if (this.mode === 'active') {
      this.voiceSwitching = true;
      logs.add('info', 'Reconnecting session for new model...');
      try {
        await this.disconnectLivekit();
        await this.connectLivekit();
      } catch (err: any) {
        logs.add('error', `Failed to reconnect: ${err.message || err}`);
      } finally {
        this.voiceSwitching = false;
      }
    }
  }

  async pickVoice(id: string): Promise<void> {
    if (id === this.selectedVoice || this.voiceSwitching) return;
    this.selectedVoice = id;
    localStorage.setItem(VOICE_STORAGE_KEY, id);
    const label = this.voiceOptions.find((v) => v.id === id)?.label ?? id;
    logs.add('info', `Voice → ${label}${this.mode === 'active' ? ' (reconnecting…)' : ''}`);

    // Active session: reconnect so the agent restarts with the new voice.
    if (this.mode === 'active' && this.lkHandle) {
      this.voiceSwitching = true;
      try {
        const handle = this.lkHandle;
        this.lkHandle = null;
        await handle.stop();
        conversation.sealAgentBubble();
        conversation.resetTurnState();
        await this.connectLivekit();
        logs.add('success', `Voice switched to ${label}`);
      } catch (err) {
        logs.add('error', `Voice switch failed: ${err instanceof Error ? err.message : err}`);
      } finally {
        this.voiceSwitching = false;
      }
    }
  }
}

export const session = new SessionStore();
