/**
 * stores/conversation.svelte.ts — conversation + caption state machine.
 *
 * Owns: sealed history, live agent bubbles (one per transcription segment),
 * the caption bar (agent subtitle + user transcript with hold timer), the
 * seal watcher (commits the live reply into history once the agent goes
 * quiet and all segments are final), and the interim segment map.
 *
 * Behavior ported 1:1 from the original App.svelte implementation.
 */
import type { TranscriptionSegment } from 'livekit-client';
import { cleanVoiceText } from '../voice-text';
import { SEAL_DELAY_MS, TRANSCRIPT_HOLD_MS, getTime } from '../config';
import type { LiveBubble, LiveSegment, Message } from '../types';
import { tools } from './tools.svelte';
import { session } from './session.svelte';

class ConversationStore {
  readonly messages = $state<Message[]>([]);

  private messageIdCounter = 0;

  /** Turn still in progress — true from user speech/turn start until final answer completes. */
  get turnInProgress(): boolean {
    const lastMsg = this.messages[this.messages.length - 1];
    const isDone = lastMsg && lastMsg.status === 'done';
    // True if awaiting reply, processing on bridge, tools currently executing,
    // or if the assistant message is still actively in 'streaming' status.
    return this.awaitingReply || this.agentProcessing || tools.active || (this.messages.length > 0 && !isDone && lastMsg?.role === 'assistant');
  }

  setTurnState(state: 'start' | 'complete'): void {
    this.agentProcessing = state === 'start';
    if (state === 'start') {
      this.awaitingReply = true;
    } else if (state === 'complete') {
      this.awaitingReply = false;
      this.armSealWatcher();
    }
  }

  /** Elapsed seconds since the current turn started (for UI timer). */
  get turnElapsedSeconds(): number {
    if (!this.liveAgentStartTime) return 0;
    const start = new Date(`2000-01-01 ${this.liveAgentStartTime}`).getTime();
    const now = new Date(`2000-01-01 ${getTime()}`).getTime();
    return Math.max(0, Math.floor((now - start) / 1000));
  }

  /** Caption bar — agent: current sentence only. */
  subtitle = $state('');
  /** Caption bar — user: interim + held final. */
  transcript = $state('');
  /** Awaiting the agent's reply (set when the user's final transcript lands). */
  awaitingReply = $state(false);
  /** True while the turn is actively processing on the agent bridge. */
  agentProcessing = $state(false);
  /** Agent currently in the active-speakers list. */
  agentSpeaking = $state(false);
  /** Bumped on every processed segment batch — lets deriveds observe the
   *  (otherwise non-reactive) segmentsMap. */
  segmentsVersion = $state(0);

  /** Joined copy — drives placeholder visibility + auto-scroll effects. */
  get liveAgentText(): string {
    const last = this.messages[this.messages.length - 1];
    if (last && last.role === 'assistant' && last.status === 'streaming') {
      return last.text;
    }
    return '';
  }

  private liveAgentLanguage = 'id';
  private liveAgentStartTime = '';
  private turnGroupCounter = 0;
  private sealTimer: ReturnType<typeof setTimeout> | null = null;
  private transcriptHoldTimer: ReturnType<typeof setTimeout> | null = null;

  /** Segment accumulation: Map key = owner + segmentId. */
  private segmentsMap = new Map<string, LiveSegment>();

  /** The caption bar shows only the CURRENT sentence/line of the agent's reply —
   *  clean and stripped of markdown bullets for smooth subtitle reading. */
  lastSentence(text: string): string {
    const trimmed = text.trim();
    if (!trimmed) return '';
    const parts = trimmed.split(/([.!?][\s\n]+|\n+)/);
    for (let i = parts.length - 1; i >= 0; i--) {
      let p = parts[i].trim();
      if (p && !/^[.!?]+$/.test(p)) {
        // Strip markdown list bullets and bolding for clean subtitle display
        p = p.replace(/^[-*+]\s+/, '').replace(/^\d+[.)]\s+/, '').replace(/[*_`]/g, '');
        return p;
      }
    }
    return trimmed.replace(/^[-*+]\s+/, '').replace(/[*_`]/g, '');
  }

  hasLiveAgentSegment(): boolean {
    return [...this.segmentsMap.values()].some((s) => s.fromAgent && !s.final);
  }

  handleSegments(segments: TranscriptionSegment[], fromAgent: boolean): void {
    for (const seg of segments) {
      const cleanDisplay = cleanVoiceText(seg.text);
      const text = fromAgent ? cleanDisplay : seg.text;
      const key = `${fromAgent ? 'agent' : 'user'}:${seg.id}`;

      if (fromAgent) {
        const prev = this.segmentsMap.get(key);
        if (prev && prev.text === text && prev.final === seg.final) continue; // anti-flicker
        this.segmentsMap.set(key, { text, language: seg.language, final: seg.final, fromAgent: true });
        this.awaitingReply = !seg.final;

        if (text) {
          session.markStarted();
          if (!this.liveAgentStartTime) this.liveAgentStartTime = getTime();

          // IN-PLACE MULTI-SEGMENT ACCUMULATION (ChatGPT / LiveKit SOTA Pattern)
          // LiveKit flushes each sentence as a distinct segment (seg.id).
          // We combine all active agent segments of this turn into one cohesive text flow.
          const fullTurnText = [...this.segmentsMap.values()]
            .filter((s) => s.fromAgent && s.text)
            .map((s) => s.text)
            .join(' ')
            .trim();

          const last = this.messages[this.messages.length - 1];
          if (last && last.role === 'assistant' && last.status === 'streaming') {
            last.text = fullTurnText; // Accumulate full turn text without erasing previous sentences!
            last.time = this.liveAgentStartTime;
          } else {
            this.messages.push({
              id: ++this.messageIdCounter,
              role: 'assistant',
              text: fullTurnText,
              time: this.liveAgentStartTime,
              status: 'streaming',
              language: seg.language || 'id',
              group: this.turnGroupCounter,
            });
          }

          this.liveAgentLanguage = seg.language || 'id';
          this.subtitle = this.lastSentence(text);
        }
        this.armSealWatcher();
        continue;
      }

      // User segment: previous turn is over — seal it in-place
      this.sealAgentBubble();

      if (seg.final) {
        this.segmentsMap.delete(key);
        if (!text) continue;

        const prev = this.messages[this.messages.length - 1];
        if (
          prev &&
          prev.role === 'user' &&
          prev.text.length < text.length &&
          text.toLowerCase().startsWith(prev.text.toLowerCase().replace(/[.,!?]+\s*$/, ''))
        ) {
          prev.text = text; // in-place user speech merge
          if (!prev.time) prev.time = getTime();
          prev.language = seg.language;
        } else {
          this.messages.push({
            id: ++this.messageIdCounter,
            role: 'user',
            text,
            time: getTime(),
            status: 'done',
            language: seg.language,
          });
        }

        this.transcript = text;
        if (this.transcriptHoldTimer) clearTimeout(this.transcriptHoldTimer);
        this.transcriptHoldTimer = setTimeout(() => {
          this.transcript = '';
          this.transcriptHoldTimer = null;
        }, TRANSCRIPT_HOLD_MS);
        this.awaitingReply = true;
      } else {
        const prev = this.segmentsMap.get(key);
        if (prev && prev.text === seg.text) continue;
        this.segmentsMap.set(key, { text: seg.text, language: seg.language, final: false, fromAgent });
        if (!text) continue;
        if (this.transcriptHoldTimer) {
          clearTimeout(this.transcriptHoldTimer);
          this.transcriptHoldTimer = null;
        }
        this.transcript = text;
      }
    }
    this.segmentsVersion++;
  }

  setAgentSpeaking(speaking: boolean): void {
    this.agentSpeaking = speaking;
    if (speaking) session.markStarted();
    if (!speaking) this.armSealWatcher();
    this.segmentsVersion++;
  }

  private armSealWatcher(): void {
    if (this.sealTimer) clearTimeout(this.sealTimer);
    this.sealTimer = setTimeout(() => {
      const allFinal = !this.hasLiveAgentSegment();
      if (allFinal && !this.agentSpeaking) this.sealAgentBubble();
    }, SEAL_DELAY_MS);
  }

  /** Commit the live agent reply into sealed history (simply flip status='done'). */
  sealAgentBubble(): void {
    if (this.sealTimer) {
      clearTimeout(this.sealTimer);
      this.sealTimer = null;
    }
    const last = this.messages[this.messages.length - 1];
    if (last && last.role === 'assistant' && last.status === 'streaming') {
      // Seal tool snapshot permanently into the completed message
      if (tools.calls.length > 0) {
        last.tools = tools.takeSnapshot();
      }
      last.status = 'done'; // Flip status in-place! ZERO DOM swap!
      this.turnGroupCounter++;
    }
    this.liveAgentStartTime = '';
    this.subtitle = '';
    this.segmentsMap.clear();
    tools.reset(); // clear live tool calls now that they are sealed into history
    this.segmentsVersion++;
  }

  reset(): void {
    if (this.sealTimer) {
      clearTimeout(this.sealTimer);
      this.sealTimer = null;
    }
    if (this.transcriptHoldTimer) {
      clearTimeout(this.transcriptHoldTimer);
      this.transcriptHoldTimer = null;
    }
    this.segmentsMap.clear();
    this.messages.length = 0;
    this.liveAgentStartTime = '';
    this.subtitle = '';
    this.transcript = '';
    this.awaitingReply = false;
    this.agentSpeaking = false;
    this.segmentsVersion++;
  }
}

export const conversation = new ConversationStore();
