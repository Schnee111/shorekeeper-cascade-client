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

class ConversationStore {
  readonly messages = $state<Message[]>([]);

  /** Live agent bubbles — one per transcription segment (the bridge flushes
   *  each sentence as a distinct segment), upserted by key while streaming. */
  readonly liveAgentBubbles = $state<LiveBubble[]>([]);

  /** Caption bar — agent: current sentence only. */
  subtitle = $state('');
  /** Caption bar — user: interim + held final. */
  transcript = $state('');
  /** Awaiting the agent's reply (set when the user's final transcript lands). */
  awaitingReply = $state(false);
  /** Agent currently in the active-speakers list. */
  agentSpeaking = $state(false);
  /** Bumped on every processed segment batch — lets deriveds observe the
   *  (otherwise non-reactive) segmentsMap. */
  segmentsVersion = $state(0);

  /** Joined copy — drives placeholder visibility + auto-scroll effects. */
  get liveAgentText(): string {
    return this.liveAgentBubbles.map((b) => b.text).join(' ').trim();
  }

  private liveAgentLanguage = 'id';
  // Timestamp captured at FIRST TOKEN, not seal time — the sealed bubble's
  // clock reflects when the reply started.
  private liveAgentStartTime = '';
  private turnGroupCounter = 0;
  private sealTimer: ReturnType<typeof setTimeout> | null = null;
  private transcriptHoldTimer: ReturnType<typeof setTimeout> | null = null;

  /** Segment accumulation: Map key = owner + segmentId. Agent segments are
   *  mirrored into liveAgentBubbles; the map dedupes user interim updates. */
  private segmentsMap = new Map<string, LiveSegment>();

  /** The caption bar shows only the CURRENT sentence of the agent's reply —
   *  full replies would overflow the fixed slot. Splits on .!? + whitespace
   *  or newlines; a trailing boundary keeps the just-finished sentence. */
  lastSentence(text: string): string {
    const trimmed = text.trim();
    if (!trimmed) return '';
    const parts = trimmed.split(/([.!?][\s\n]+|\n+)/);
    for (let i = parts.length - 1; i >= 0; i--) {
      const p = parts[i].trim();
      if (p && !/^[.!?]+$/.test(p)) return p;
    }
    return trimmed;
  }

  hasLiveAgentSegment(): boolean {
    return [...this.segmentsMap.values()].some((s) => s.fromAgent && !s.final);
  }

  handleSegments(segments: TranscriptionSegment[], fromAgent: boolean): void {
    for (const seg of segments) {
      const text = cleanVoiceText(seg.text);
      const key = `${fromAgent ? 'agent' : 'user'}:${seg.id}`;

      if (fromAgent) {
        const prev = this.segmentsMap.get(key);
        if (prev && prev.text === text && prev.final === seg.final) continue; // anti-flicker
        this.segmentsMap.set(key, { text, language: seg.language, final: seg.final, fromAgent: true });
        this.awaitingReply = false;
        if (text) {
          // Stamp the reply clock at FIRST TOKEN.
          if (!this.liveAgentStartTime) this.liveAgentStartTime = getTime();
          // Mirror into the bubble list — upsert by key so streaming updates
          // replace in place (no duplicates).
          const existing = this.liveAgentBubbles.find((b) => b.key === key);
          if (existing) {
            existing.text = text;
            existing.final = seg.final;
          } else {
            this.liveAgentBubbles.push({ key, text, final: seg.final });
          }
          this.liveAgentLanguage = seg.language || 'id';
          this.subtitle = this.lastSentence(text);
        }
        this.armSealWatcher();
        continue;
      }

      // User segment: the previous agent reply is definitely over — seal it
      // into history right now (before the new user message lands).
      this.sealAgentBubble();

      if (seg.final) {
        this.segmentsMap.delete(key);
        if (!text) continue;

        // Redirect merge: when the user keeps speaking past a premature
        // end-of-turn commit, the bridge re-submits the FULL accumulated
        // transcript (gateway status 'redirected'). Without this, the chat
        // shows the partial bubble ("Tes.") AND the full bubble ("Tes. Live
        // TTS-nya doang tapi"). If the last message is a user message that is
        // a leading prefix of the new text, fold it into the new one.
        const prev = this.messages[this.messages.length - 1];
        if (
          prev &&
          prev.role === 'user' &&
          prev.text.length < text.length &&
          text.toLowerCase().startsWith(prev.text.toLowerCase().replace(/[.,!?]+\s*$/, ''))
        ) {
          prev.text = text; // in-place — Svelte 5 array item mutation is reactive
          prev.time = getTime();
          prev.language = seg.language;
        } else {
          this.messages.push({ role: 'user', text, time: getTime(), language: seg.language });
        }

        // Keep the last interim text on the bar so it doesn't blink out the
        // moment the turn commits; a timer clears it after a hold period.
        this.transcript = text;
        if (this.transcriptHoldTimer) clearTimeout(this.transcriptHoldTimer);
        this.transcriptHoldTimer = setTimeout(() => {
          this.transcript = '';
          this.transcriptHoldTimer = null;
        }, TRANSCRIPT_HOLD_MS);
        this.awaitingReply = true; // final user transcript → wait for agent
      } else {
        const prev = this.segmentsMap.get(key);
        if (prev && prev.text === seg.text) continue; // anti-flicker
        this.segmentsMap.set(key, { text: seg.text, language: seg.language, final: false, fromAgent });
        if (!text) continue;
        // New speech arriving — cancel any pending hold-clear so the bar
        // reflects the fresh interim text instead of an old held string.
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
    if (!speaking) this.armSealWatcher();
    this.segmentsVersion++; // nudge observers even if nothing else changed
  }

  /** Seal ~1.5s after the last activity once the agent stops speaking. */
  private armSealWatcher(): void {
    if (this.sealTimer) clearTimeout(this.sealTimer);
    this.sealTimer = setTimeout(() => {
      const allFinal = this.liveAgentBubbles.length > 0 && this.liveAgentBubbles.every((b) => b.final);
      if (allFinal && !this.agentSpeaking) this.sealAgentBubble();
    }, SEAL_DELAY_MS);
  }

  /** Commit the live agent reply into sealed history. */
  sealAgentBubble(): void {
    if (this.sealTimer) {
      clearTimeout(this.sealTimer);
      this.sealTimer = null;
    }
    const bubbles = this.liveAgentBubbles.filter((b) => b.text);
    if (bubbles.length === 0) return;
    const group = this.turnGroupCounter;
    this.turnGroupCounter += 1;
    // Snapshot the tool log so it persists in history (Gemini/Claude style).
    const toolsSnapshot = tools.takeSnapshot();
    this.messages.push(
      ...bubbles.map((b, i) => ({
        role: 'assistant' as const,
        text: b.text,
        time: this.liveAgentStartTime || getTime(), // first-token time, not seal time
        language: this.liveAgentLanguage,
        group,
        // attach the tool log to the FIRST sealed segment of the turn only
        tools: i === 0 && toolsSnapshot.length ? toolsSnapshot : undefined,
      }))
    );
    this.liveAgentBubbles.length = 0;
    this.liveAgentStartTime = '';
    this.subtitle = '';
    this.segmentsMap.clear(); // agent segments already rendered — drop the map copy
    tools.reset(); // the snapshot above already lives in history
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
    this.liveAgentBubbles.length = 0;
    this.liveAgentStartTime = '';
    this.subtitle = '';
    this.transcript = '';
    this.awaitingReply = false;
    this.agentSpeaking = false;
    this.segmentsVersion++;
  }
}

export const conversation = new ConversationStore();
