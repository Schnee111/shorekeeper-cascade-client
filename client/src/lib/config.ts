/**
 * config.ts — environment + display constants.
 *
 * Single place to change endpoints, identity, voice registry fallback,
 * and user-facing labels. Future work: fetch LIVEKIT_URL/IDENTITY from
 * the token endpoint so the bundle is environment-agnostic.
 */
import type { VoiceOption } from './types';

/** LiveKit Cloud SFU (WebSocket endpoint of the project). */
export const LIVEKIT_URL = 'wss://shore-eoiag4jd.livekit.cloud';

/** Local participant identity — transcripts attributed to us arrive here. */
export const IDENTITY = 'schnee';

/** nginx-proxied token/voice endpoints served by token_server.py. */
export const TOKEN_ENDPOINT = '/jarvis-livekit/token';
export const VOICES_ENDPOINT = '/jarvis-livekit/voices';

/** localStorage key for the chosen Fish Audio voice. */
export const VOICE_STORAGE_KEY = 'jarvis-voice';

/** Static voice registry — used only if the /voices endpoint fails. */
export const FALLBACK_VOICES: VoiceOption[] = [
  { id: 'gura', label: 'Gura', desc: 'Energetic · EN', default: true },
  { id: 'gura2', label: 'Gura (alt)', desc: 'Alt clone · EN', default: false },
  { id: 'zeta', label: 'Zeta', desc: 'Calm · ID/EN', default: false },
];

/** Human-friendly labels for tool progress rows, keyed by tool name. */
export const TOOL_LABELS: Record<string, string> = {
  web_search: 'Searching the web',
  web_extract: 'Reading a page',
  terminal: 'Running a command',
  read_file: 'Reading a file',
  write_file: 'Writing a file',
  search_files: 'Searching files',
  session_search: 'Searching memory',
  cronjob: 'Scheduling a task',
  memory: 'Updating memory',
  delegate_task: 'Delegating a task',
  clarify: 'Thinking',
};

export const toolLabel = (name: string): string => TOOL_LABELS[name] || 'Working on it';

/** Keep the user transcript on the caption bar this long after it commits. */
export const TRANSCRIPT_HOLD_MS = 3500;

/** Seal the live agent reply into history this long after the last activity. */
export const SEAL_DELAY_MS = 1500;

/** Footer chip — pipeline credit line. */
export const STACK_LINE = 'Deepgram Nova-3 · Hermes · Fish Audio';

/** HH:MM:SS in 24h format. */
export const getTime = (): string =>
  new Date().toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
