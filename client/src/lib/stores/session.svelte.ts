/**
 * stores/session.svelte.ts — session lifecycle: mode state machine, LiveKit
 * connect/disconnect, wake-word arming, and the voice selector.
 *
 * Status is DERIVED from the underlying stores (conversation + tools), so
 * there is no imperative refreshStatus bookkeeping — Svelte reactivity
 * recomputes it whenever a dependency changes.
 */
import { startLivekitVoice, type LivekitHandle, type LkState } from '../livekit-voice';
import { startWakeWord } from '../wakeword';
import { FALLBACK_VOICES, VOICES_ENDPOINT, VOICE_STORAGE_KEY } from '../config';
import type { LkConnState, Mode, Status, VoiceOption } from '../types';
import { conversation } from './conversation.svelte';
import { logs } from './logs.svelte';
import { tools } from './tools.svelte';

class SessionStore {
  mode = $state<Mode>('off');
  lkState = $state<LkConnState>('disconnected');
  voiceSwitching = $state(false);

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

  get currentVoiceLabel(): string {
    return this.voiceOptions.find((v) => v.id === this.selectedVoice)?.label ?? this.selectedVoice;
  }

  /** Perceptual pipeline status — orb color, status pill, hint text, caption
   *  visibility. Purely derived; no imperative writes. */
  get status(): Status {
    if (this.mode === 'off') return this.offState;
    if (this.mode === 'standby') return 'idle';
    if (this.connecting) return 'connecting';
    conversation.segmentsVersion; // dependency — tracks the non-reactive segmentsMap
    if (conversation.agentSpeaking || conversation.hasLiveAgentSegment()) return 'speaking';
    if (conversation.awaitingReply || tools.active) return 'processing';
    return 'listening';
  }

  private lkHandle: LivekitHandle | null = null;
  private stopWake: (() => Promise<void>) | null = null;

  /** Fetch the real registry (falls back to the hard-coded list on error). */
  async loadVoices(): Promise<void> {
    try {
      const res = await fetch(VOICES_ENDPOINT);
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

  private handleStateChange(state: LkState): void {
    this.lkState = state;
    if (state === 'reconnecting') {
      logs.add('warn', 'Connection unstable — reconnecting...');
    } else if (state === 'connected') {
      logs.add('success', 'LiveKit connected');
    } else if (state === 'disconnected' && this.mode === 'active') {
      // Plan §6: ACTIVE ──disconnect──► OFF
      logs.add('warn', 'Disconnected');
      this.resetAll();
      this.mode = 'off';
      this.offState = 'idle';
    }
  }

  private resetAll(): void {
    conversation.reset();
    tools.reset();
  }

  private async connectLivekit(): Promise<void> {
    // Must be called inside a user gesture (orb tap) or after sticky
    // activation (the tap that armed the wake word) — room.startAudio()
    // satisfies the autoplay policy.
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
        voice: this.selectedVoice,
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

  async toggleSession(): Promise<void> {
    if (this.mode === 'off' || this.mode === 'standby') {
      // Tap orb = primary path (plan §2). Stop wake word first if armed.
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
    const handle = this.lkHandle;
    this.lkHandle = null;
    if (handle) await handle.stop();
    // Seal any in-flight agent reply into history before the session ends.
    conversation.sealAgentBubble();
    this.resetAll();
    this.mode = 'off';
    this.offState = 'idle';
    logs.add('info', 'Session ended');
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
        this.resetAll();
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
