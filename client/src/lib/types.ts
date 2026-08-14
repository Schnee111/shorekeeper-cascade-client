/**
 * types.ts — shared domain types for the JARVIS client.
 *
 * Every store and component imports from here so future features
 * (settings, multi-session, persistence) share one vocabulary.
 */

/** High-level session mode (plan §2 state machine). */
export type Mode = 'off' | 'standby' | 'active';

/** Perceptual pipeline status — drives orb color, status pill, captions. */
export type Status =
  | 'idle'
  | 'connecting'
  | 'listening'
  | 'processing'
  | 'speaking'
  | 'error';

/** LiveKit room connection state (mirrors livekit-voice.ts LkState). */
export type LkConnState = 'connecting' | 'connected' | 'reconnecting' | 'disconnected';

export interface LogEntry {
  type: 'info' | 'warn' | 'error' | 'success';
  text: string;
  time: string;
}

export interface VoiceOption {
  id: string;
  label: string;
  desc?: string;
  default: boolean;
}

/** One live streaming bubble of the in-progress agent reply. */
export interface LiveBubble {
  key: string;
  text: string;
  final: boolean;
  time?: string;
}

/** Interim transcription segment tracked in the segment map. */
export interface LiveSegment {
  text: string;
  language: string;
  final: boolean;
  fromAgent: boolean;
}

/** Tool invocation row — permanent progress log (Gemini/Claude style). */
export interface ToolCallInfo {
  name: string;
  label: string;
  detail?: string;
  time: string;
  done: boolean;
}

/** Sealed conversation message. `group` ties segments of one agent turn;
 *  `tools` carries the permanent tool-progress snapshot for that turn.
 *  `status` drives in-place live streaming vs completed rendering (Vercel AI SDK style). */
export interface Message {
  id: number;
  role: 'user' | 'assistant';
  text: string;
  time: string;
  status?: 'streaming' | 'done';
  language?: string;
  group?: number;
  tools?: ToolCallInfo[];
}
