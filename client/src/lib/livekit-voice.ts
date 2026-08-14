/**
 * livekit-voice.ts — LiveKit voice client (plan ui-integration.md §5).
 *
 * Replaces the old WebSocket audio pipeline: WebRTC mic capture + playback
 * are handled by livekit-client; the server side is the LiveKit agent
 * (Deepgram STT → Hermes → Fish TTS) auto-dispatched via JWT room_config.
 *
 * Token endpoint (nginx-proxied, RoomAgentDispatch included server-side):
 *   GET /jarvis-livekit/token?room=<room>&identity=<identity>
 *
 * Autoplay: `start()` MUST be called inside a user gesture (orb tap) so
 * `room.startAudio()` satisfies browser autoplay policy.
 */

import {
  ConnectionState,
  LocalParticipant,
  Room,
  RoomEvent,
  Track,
  type Participant,
  type RemoteTrackPublication,
  type TranscriptionSegment,
} from 'livekit-client';
import { IDENTITY, LIVEKIT_URL, TOKEN_ENDPOINT } from './config';
import { audioAnalyser } from './audio-analyser';

export { LIVEKIT_URL, IDENTITY };

export type LkState = 'connecting' | 'connected' | 'reconnecting' | 'disconnected';

export interface LivekitVoiceOptions {
  /** Transcription segments from the agent (user STT + agent TTS transcripts). */
  onSegments: (segments: TranscriptionSegment[], fromAgent: boolean) => void;
  /** Agent entered/left the active-speakers list (drives orb "speaking"). */
  onSpeakingChanged: (speaking: boolean) => void;
  onStateChange: (state: LkState) => void;
  onLog: (message: string) => void;
  /** Tool activity events from the agent bridge (Gemini/Claude-style chip). */
  onToolActivity?: (ev: { state: 'start' | 'complete'; name: string; args?: Record<string, unknown> }) => void;
  /** Turn state events from the bridge ('start' | 'complete'). */
  onTurnState?: (state: 'start' | 'complete') => void;
  /** Fish Audio voice key (token_server registry); default "gura". */
  voice?: string;
  /** Hermes LLM model override (9Router model ID). */
  model?: string;
}

export interface LivekitHandle {
  room: Room;
  roomName: string;
  stop: () => Promise<void>;
}

/** Per-session room: `jarvis-{random8}` (plan §2). */
function makeRoomName(): string {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let suffix = '';
  const rnd = crypto.getRandomValues(new Uint8Array(8));
  for (const b of rnd) suffix += alphabet[b % alphabet.length];
  return `jarvis-${suffix}`;
}

async function fetchToken(roomName: string, voice?: string, model?: string): Promise<string> {
  let url = `${TOKEN_ENDPOINT}?room=${encodeURIComponent(roomName)}&identity=${IDENTITY}`;
  if (voice) url += `&voice=${encodeURIComponent(voice)}`;
  if (model) url += `&model=${encodeURIComponent(model)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Token endpoint ${res.status}`);
  const data = (await res.json()) as { token?: string };
  if (!data.token) throw new Error('Token endpoint returned no token');
  return data.token;
}

/**
 * Connect a voice session. Resolves once audio is up (mic enabled).
 * Rejects on token/connect failure — caller decides the fallback.
 */
export async function startLivekitVoice(opts: LivekitVoiceOptions): Promise<LivekitHandle> {
  const roomName = makeRoomName();
  const token = await fetchToken(roomName, opts.voice, opts.model);

  const room = new Room({
    adaptiveStream: true,
    dynacast: true,
    webAudioMix: true,
  });
  const audioElements: HTMLMediaElement[] = [];

  const isAgent = (participant?: Participant): boolean => {
    // User STT transcripts are attributed to our own identity ("schnee");
    // everything else (TTS transcript / greeting) comes from the agent.
    if (!participant) return true;
    return participant.identity !== IDENTITY;
  };

  room
    .on(RoomEvent.TranscriptionReceived, (segments, participant) => {
      opts.onSegments(segments, isAgent(participant));
    })
    .on(RoomEvent.DataReceived, (payload: Uint8Array) => {
      // Tool activity events from the agent bridge → UI chip.
      if (!opts.onToolActivity) return;
      try {
        const data = JSON.parse(new TextDecoder().decode(payload)) as {
          type?: string;
          state?: string;
          name?: string;
          args?: Record<string, unknown>;
        };
        if (data?.type === 'jarvis.tool' && (data.state === 'start' || data.state === 'complete')) {
          opts.onToolActivity({ state: data.state, name: data.name || '?', args: data.args });
        } else if (data?.type === 'jarvis.turn' && (data.state === 'start' || data.state === 'complete')) {
          opts.onTurnState?.(data.state);
        }
      } catch {
        /* not a JSON event — ignore */
      }
    })
    .on(RoomEvent.ActiveSpeakersChanged, (speakers) => {
      const agentSpeaking = speakers.some((s) => s.identity !== IDENTITY);
      opts.onSpeakingChanged(agentSpeaking);
    })
    .on(
      RoomEvent.TrackSubscribed,
      (track: Track, _pub: RemoteTrackPublication, participant) => {
        if (track.kind === Track.Kind.Audio && participant.identity !== IDENTITY) {
          const el = track.attach();
          el.setAttribute('playsinline', 'true');
          el.setAttribute('webkit-playsinline', 'true');
          audioElements.push(el);
          document.body.appendChild(el);
          opts.onLog('Agent audio track attached');
          // Attach AudioAnalyser for 3D Spectro Particle Visualizer
          audioAnalyser.attachMediaElement(el);
        }
      }
    )
    .on(RoomEvent.Disconnected, () => opts.onStateChange('disconnected'))
    .on(RoomEvent.Reconnecting, () => opts.onStateChange('reconnecting'))
    .on(RoomEvent.Reconnected, () => opts.onStateChange('connected'));

  opts.onStateChange('connecting');
  try {
    await room.connect(LIVEKIT_URL, token);
    opts.onStateChange('connected');
    opts.onLog(`Room connected: ${roomName}`);

    // Autoplay unlock — we are inside the orb-tap gesture.
    await room.startAudio();

    // Mic on: WebRTC capture replaces the old getUserMedia pipeline.
    const local = room.localParticipant as LocalParticipant;
    await local.setMicrophoneEnabled(true);
    opts.onLog('Microphone enabled');

    // Connect user mic MediaStream to AudioAnalyser for 3D Spectro Particle Visualizer
    const micPublication = Array.from(local.audioTrackPublications.values())[0];
    if (micPublication && micPublication.track && micPublication.track.mediaStream) {
      audioAnalyser.attachMediaStream(micPublication.track.mediaStream);
    }
  } catch (err) {
    await room.disconnect();
    throw err;
  }

  const stop = async (): Promise<void> => {
    try {
      await room.localParticipant.setMicrophoneEnabled(false);
    } catch {
      /* mic may already be gone */
    }
    await room.disconnect();
    for (const el of audioElements) el.remove();
    audioElements.length = 0;
    opts.onStateChange('disconnected');
  };

  return { room, roomName, stop };
}

export { ConnectionState };
