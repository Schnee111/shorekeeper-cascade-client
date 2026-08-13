<script lang="ts">
  import { onMount } from 'svelte';
  import { startWakeWord } from './lib/wakeword';
  import { cleanVoiceText } from './lib/voice-text';
  import {
    startLivekitVoice,
    type LivekitHandle,
    type LkState,
  } from './lib/livekit-voice';
  import type { TranscriptionSegment } from 'livekit-client';

  // Svelte 5 Runes ($state)
  let mode = $state<'off' | 'standby' | 'active'>('off');
  let stopWake: (() => Promise<void>) | null = null;

  let status = $state<'idle' | 'connecting' | 'listening' | 'processing' | 'speaking' | 'error'>('idle');
  let transcript = $state('');
  let subtitle = $state('');
  let subtitleLanguage = $state<string>('id');

  // Voice selector (cosmetic placeholder — plan §2: only Vestia Zeta for now)
  const VOICES = [
    { name: 'Vestia Zeta', desc: 'Indonesian' },
    { name: 'Aoede', desc: 'Breezy' },
    { name: 'Kore', desc: 'Firm' },
    { name: 'Leda', desc: 'Youthful' },
    { name: 'Zephyr', desc: 'Bright' },
    { name: 'Callirrhoe', desc: 'Easy-going' },
    { name: 'Autonoe', desc: 'Bright' },
    { name: 'Despina', desc: 'Smooth' },
    { name: 'Erinome', desc: 'Clear' },
    { name: 'Laomedeia', desc: 'Upbeat' },
    { name: 'Achernar', desc: 'Soft' },
    { name: 'Gacrux', desc: 'Mature' },
    { name: 'Pulcherrima', desc: 'Forward' },
    { name: 'Vindemiatrix', desc: 'Gentle' },
    { name: 'Sulafat', desc: 'Warm' },
  ];
  let selectedVoice = $state('Vestia Zeta');

  function onVoiceChange(e: Event) {
    const select = e.target as HTMLSelectElement;
    selectedVoice = select.value;
    logs = [...logs, { type: 'info', text: `Voice: ${selectedVoice} (cosmetic — V1 single voice)`, time: getTime() }];
  }

  type LogEntry = { type: 'info' | 'warn' | 'error' | 'success'; text: string; time: string };
  function getTime() {
    return new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }
  function addLog(type: LogEntry['type'], text: string) {
    logs = [...logs, { type, text, time: getTime() }];
  }

  let logs = $state<LogEntry[]>([
    { type: 'success', text: 'System initialized', time: getTime() },
    { type: 'info', text: 'LiveKit endpoint ready', time: getTime() },
  ]);
  let lkState = $state<LkState>('disconnected');

  let lkHandle: LivekitHandle | null = null;

  // Conversation panel container — bound for auto-scroll-to-newest.
  let conversationEl: HTMLDivElement | undefined = $state();

  // Conversation history
  type Message = { role: 'user' | 'assistant'; text: string; time: string; language?: string };
  let messages = $state<Message[]>([]);

  // Live agent reply bubble: grows while the agent speaks, sealed into
  // `messages` right after speech ends (not only on disconnect).
  let liveAgentText = $state('');
  let liveAgentLanguage = $state<string>('id');
  let sealTimer: ReturnType<typeof setTimeout> | null = null;

  // Hold the user subtitle bar for a few seconds after the turn commits so
  // the user can finish reading it (previously it vanished the instant the
  // final transcript landed).
  let transcriptHoldTimer: ReturnType<typeof setTimeout> | null = null;
  const TRANSCRIPT_HOLD_MS = 3500;

  // Segment accumulation (plan §4 Lapis 4): Map key = owner + segmentId;
  // update only when text changes (anti-flicker).
  type LiveSegment = { text: string; language: string; final: boolean; fromAgent: boolean };
  const segmentsMap = new Map<string, LiveSegment>();
  let awaitingReply = false;
  let agentSpeaking = false;

  function rebuildLiveAgentText() {
    // Segments are kept in insertion order; join on a space so consecutive
    // segments never glue into "satu.Dua".
    const parts = [...segmentsMap.values()]
      .filter((s) => s.fromAgent && s.text)
      .map((s) => s.text);
    liveAgentText = parts.join(' ').replace(/[ \t]{2,}/g, ' ').trim();
  }

  function sealAgentBubble() {
    if (sealTimer) {
      clearTimeout(sealTimer);
      sealTimer = null;
    }
    if (!liveAgentText) return;
    messages = [...messages, {
      role: 'assistant',
      text: liveAgentText,
      time: getTime(),
      language: liveAgentLanguage,
    }];
    liveAgentText = '';
    subtitle = '';
    for (const [k, s] of segmentsMap) if (s.fromAgent) segmentsMap.delete(k);
    refreshStatus();
  }

  function armSealWatcher() {
    // Seal ~1.5s after the last activity once the agent stops speaking.
    if (sealTimer) clearTimeout(sealTimer);
    sealTimer = setTimeout(() => {
      const agentSegs = [...segmentsMap.values()].filter((s) => s.fromAgent);
      const allFinal = agentSegs.length > 0 && agentSegs.every((s) => s.final);
      if (allFinal && !agentSpeaking) sealAgentBubble();
    }, 1500);
  }

  // Auto-scroll the Conversation panel to the newest message whenever new
  // content arrives — sealed history OR the live agent bubble growing.
  $effect(() => {
    messages.length; // dependency
    liveAgentText;   // dependency
    const el = conversationEl;
    if (!el) return;
    // Defer to the next frame so the DOM reflects the new content first.
    requestAnimationFrame(() => {
      el.scrollTop = el.scrollHeight;
    });
  });

  function refreshStatus() {
    if (mode !== 'active') return;
    const hasLiveAgentSegment = [...segmentsMap.values()].some((s) => s.fromAgent && !s.final);
    if (agentSpeaking || hasLiveAgentSegment) status = 'speaking';
    else if (awaitingReply) status = 'processing';
    else status = 'listening';
  }

  function handleSegments(segments: TranscriptionSegment[], fromAgent: boolean) {
    for (const seg of segments) {
      const text = cleanVoiceText(seg.text);
      const key = `${fromAgent ? 'agent' : 'user'}:${seg.id}`;

      if (fromAgent) {
        const prev = segmentsMap.get(key);
        if (prev && prev.text === text && prev.final === seg.final) continue; // anti-flicker
        segmentsMap.set(key, { text, language: seg.language, final: seg.final, fromAgent: true });
        awaitingReply = false;
        if (text) {
          rebuildLiveAgentText();
          liveAgentLanguage = seg.language || 'id';
          // Set subtitle on BOTH interim and final segments: fast one-shot
          // replies arrive already-final with no interim update, and the old
          // interim-only assignment left the caption blank for them.
          subtitle = text;
          subtitleLanguage = seg.language || 'id';
        }
        armSealWatcher();
        continue;
      }

      // User segment: the previous agent reply is definitely over — seal it
      // into history right now (before the new user message lands).
      sealAgentBubble();

      if (seg.final) {
        segmentsMap.delete(key);
        if (!text) continue;
        messages = [...messages, { role: 'user', text, time: getTime(), language: seg.language }];
        // Keep the last interim text on the bar so it doesn't blink out the
        // moment the turn commits; a timer clears it after a hold period (and
        // it hides naturally once the agent starts speaking → status flips).
        transcript = text;
        if (transcriptHoldTimer) clearTimeout(transcriptHoldTimer);
        transcriptHoldTimer = setTimeout(() => {
          transcript = '';
          transcriptHoldTimer = null;
        }, TRANSCRIPT_HOLD_MS);
        awaitingReply = true; // final user transcript → wait for agent
      } else {
        const prev = segmentsMap.get(key);
        if (prev && prev.text === seg.text) continue; // anti-flicker
        segmentsMap.set(key, { text: seg.text, language: seg.language, final: false, fromAgent });
        if (!text) continue;
        // New speech is arriving — cancel any pending hold-clear so the bar
        // reflects the fresh interim text instead of an old held string.
        if (transcriptHoldTimer) {
          clearTimeout(transcriptHoldTimer);
          transcriptHoldTimer = null;
        }
        transcript = text;
      }
    }
    refreshStatus();
  }

  function handleSpeakingChanged(speaking: boolean) {
    agentSpeaking = speaking;
    if (!speaking) armSealWatcher();
    refreshStatus();
  }

  function handleStateChange(state: LkState) {
    lkState = state;
    if (state === 'reconnecting') {
      addLog('warn', 'Connection unstable — reconnecting...');
    } else if (state === 'connected') {
      addLog('success', 'LiveKit connected');
    } else if (state === 'disconnected' && mode === 'active') {
      // Plan §6: ACTIVE ──disconnect──► OFF
      addLog('warn', 'Disconnected');
      resetSession();
      mode = 'off';
      status = 'idle';
    }
  }

  function resetSession() {
    if (sealTimer) {
      clearTimeout(sealTimer);
      sealTimer = null;
    }
    if (transcriptHoldTimer) {
      clearTimeout(transcriptHoldTimer);
      transcriptHoldTimer = null;
    }
    segmentsMap.clear();
    liveAgentText = '';
    subtitle = '';
    transcript = '';
    awaitingReply = false;
    agentSpeaking = false;
  }

  async function connectLivekit() {
    // Must be called inside a user gesture (orb tap) or after sticky
    // activation (the tap that armed the wake word) — room.startAudio()
    // satisfies the autoplay policy.
    mode = 'active';
    status = 'connecting';
    addLog('info', 'Connecting to LiveKit...');
    try {
      lkHandle = await startLivekitVoice({
        onSegments: handleSegments,
        onSpeakingChanged: handleSpeakingChanged,
        onStateChange: handleStateChange,
        onLog: (m) => addLog('info', m),
      });
      status = 'listening';
      addLog('success', `Session ${lkHandle.roomName} — listening`);
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      addLog('error', `Connect failed: ${msg}`);
      mode = 'off';
      status = 'error';
      lkHandle = null;
    }
  }

  async function armWakeWord() {
    if (stopWake) return;
    addLog('info', 'Initializing microphone...');

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach(track => track.stop());
      addLog('success', 'Microphone access granted');
    } catch (e) {
      addLog('error', `Mic denied: ${e instanceof Error ? e.message : String(e)}`);
      status = 'error';
      return;
    }

    mode = 'standby';
    status = 'idle';
    stopWake = await startWakeWord(
      () => onWake(),
      (message) => addLog('info', message)
    );
    addLog('success', 'Standby — say "Hey Jarvis"');
  }

  async function onWake() {
    if (mode !== 'standby') return;
    addLog('success', 'Wake word triggered!');
    // Stop openwakeword TOTAL first — free the mic before LiveKit owns it.
    if (stopWake) {
      await stopWake();
      stopWake = null;
    }
    await connectLivekit();
  }

  async function toggleSession() {
    if (mode === 'off' || mode === 'standby') {
      // Tap orb = primary path (plan §2). Stop wake word first if armed.
      if (stopWake) {
        await stopWake();
        stopWake = null;
      }
      addLog('info', 'Tap-to-talk activated');
      await connectLivekit();
    } else {
      await disconnectLivekit();
    }
  }

  async function disconnectLivekit() {
    const handle = lkHandle;
    lkHandle = null;
    if (handle) await handle.stop();
    // Seal any in-flight agent reply into history before the session ends.
    sealAgentBubble();
    resetSession();
    mode = 'off';
    status = 'idle';
    addLog('info', 'Session ended');
  }

  async function toggleWake() {
    if (mode === 'standby') {
      if (stopWake) {
        await stopWake();
        stopWake = null;
      }
      mode = 'off';
      status = 'idle';
      addLog('info', 'Voice wake disarmed');
    } else if (mode === 'off') {
      await armWakeWord();
    }
  }

  onMount(() => {
    addLog('info', 'UI ready — LiveKit voice pipeline');
  });

  // Orb intensity derived from state (used for CSS class binding)
  let orbIntensity = $derived(
    status === 'speaking' ? 'high' : status === 'listening' ? 'medium' : status === 'processing' ? 'low' : 'none'
  );
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-deep: #050508;
      --bg-surface: #0a0b10;
      --bg-elevated: #12131a;
      --border-subtle: rgba(255, 255, 255, 0.06);
      --border-medium: rgba(255, 255, 255, 0.1);
      --text-primary: #fafafa;
      --text-secondary: #a1a1aa;
      --text-muted: #52525b;
      --accent-cyan: #67e8f9;
      --accent-cyan-dim: rgba(103, 232, 249, 0.15);
      --accent-blue: #60a5fa;
      --accent-emerald: #34d399;
      --accent-rose: #fb7185;
      --accent-amber: #fbbf24;
    }

    * {
      font-family: 'Outfit', system-ui, sans-serif;
    }

    code, .font-mono {
      font-family: 'JetBrains Mono', monospace;
    }

    body {
      background: var(--bg-deep);
      color: var(--text-primary);
    }

    /* Orb Animations */
    @keyframes orb-breathe {
      0%, 100% { transform: scale(1); opacity: 0.6; }
      50% { transform: scale(1.02); opacity: 0.8; }
    }

    @keyframes orb-pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }

    @keyframes orb-ripple {
      0% { transform: scale(0.8); opacity: 0.5; }
      100% { transform: scale(1.5); opacity: 0; }
    }

    @keyframes orb-glow-rotate {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    @keyframes float-gentle {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-8px); }
    }

    @keyframes fade-in-up {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }

    .orb-container {
      position: relative;
      width: 200px;
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .orb-core {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background: radial-gradient(circle at 30% 30%, 
        rgba(103, 232, 249, 0.9) 0%, 
        rgba(96, 165, 250, 0.6) 40%, 
        rgba(59, 130, 246, 0.3) 70%, 
        transparent 100%
      );
      box-shadow: 
        0 0 60px rgba(103, 232, 249, 0.4),
        0 0 100px rgba(103, 232, 249, 0.2),
        inset 0 0 40px rgba(255, 255, 255, 0.1);
      transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
      cursor: pointer;
      position: relative;
      z-index: 2;
    }

    .orb-core:hover {
      transform: scale(1.05);
      box-shadow: 
        0 0 80px rgba(103, 232, 249, 0.5),
        0 0 120px rgba(103, 232, 249, 0.3),
        inset 0 0 40px rgba(255, 255, 255, 0.15);
    }

    .orb-core:active {
      transform: scale(0.95);
    }

    /* State variations */
    .orb-core.listening {
      background: radial-gradient(circle at 30% 30%, 
        rgba(103, 232, 249, 1) 0%, 
        rgba(52, 211, 153, 0.7) 40%, 
        rgba(16, 185, 129, 0.4) 70%, 
        transparent 100%
      );
      box-shadow: 
        0 0 80px rgba(52, 211, 153, 0.5),
        0 0 120px rgba(52, 211, 153, 0.3),
        inset 0 0 40px rgba(255, 255, 255, 0.2);
      animation: orb-pulse 1.5s ease-in-out infinite;
    }

    .orb-core.speaking {
      background: radial-gradient(circle at 30% 30%, 
        rgba(96, 165, 250, 1) 0%, 
        rgba(139, 92, 246, 0.7) 40%, 
        rgba(168, 85, 247, 0.4) 70%, 
        transparent 100%
      );
      box-shadow: 
        0 0 80px rgba(139, 92, 246, 0.5),
        0 0 120px rgba(139, 92, 246, 0.3),
        inset 0 0 40px rgba(255, 255, 255, 0.2);
      animation: orb-pulse 0.8s ease-in-out infinite;
    }

    .orb-core.processing, .orb-core.connecting {
      background: radial-gradient(circle at 30% 30%, 
        rgba(251, 191, 36, 0.9) 0%, 
        rgba(245, 158, 11, 0.6) 40%, 
        rgba(217, 119, 6, 0.3) 70%, 
        transparent 100%
      );
      box-shadow: 
        0 0 60px rgba(251, 191, 36, 0.4),
        0 0 100px rgba(251, 191, 36, 0.2),
        inset 0 0 40px rgba(255, 255, 255, 0.1);
      animation: orb-breathe 2s ease-in-out infinite;
    }

    .orb-core.standby {
      background: radial-gradient(circle at 30% 30%, 
        rgba(52, 211, 153, 0.7) 0%, 
        rgba(16, 185, 129, 0.4) 40%, 
        rgba(5, 150, 105, 0.2) 70%, 
        transparent 100%
      );
      box-shadow: 
        0 0 40px rgba(52, 211, 153, 0.3),
        0 0 60px rgba(52, 211, 153, 0.15),
        inset 0 0 30px rgba(255, 255, 255, 0.1);
      animation: orb-breathe 3s ease-in-out infinite;
    }

    .orb-core.off, .orb-core.error {
      background: radial-gradient(circle at 30% 30%, 
        rgba(113, 113, 122, 0.5) 0%, 
        rgba(82, 82, 91, 0.3) 40%, 
        rgba(63, 63, 70, 0.2) 70%, 
        transparent 100%
      );
      box-shadow: 
        0 0 30px rgba(113, 113, 122, 0.2),
        inset 0 0 20px rgba(255, 255, 255, 0.05);
    }

    /* Ripple rings */
    .orb-ripple {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 1px solid rgba(103, 232, 249, 0.3);
      animation: orb-ripple 2s ease-out infinite;
    }

    .orb-ripple:nth-child(2) { animation-delay: 0.5s; }
    .orb-ripple:nth-child(3) { animation-delay: 1s; }

    .orb-ripple.listening { border-color: rgba(52, 211, 153, 0.4); }
    .orb-ripple.speaking { border-color: rgba(139, 92, 246, 0.4); }
    .orb-ripple.processing { border-color: rgba(251, 191, 36, 0.3); }
    .orb-ripple.connecting { border-color: rgba(251, 191, 36, 0.3); }
    .orb-ripple.standby { border-color: rgba(52, 211, 153, 0.2); }

    /* Glow ring */
    .orb-glow-ring {
      position: absolute;
      width: 160px;
      height: 160px;
      border-radius: 50%;
      border: 2px solid transparent;
      background: conic-gradient(
        from 0deg,
        transparent 0%,
        rgba(103, 232, 249, 0.5) 25%,
        transparent 50%,
        rgba(96, 165, 250, 0.5) 75%,
        transparent 100%
      ) border-box;
      -webkit-mask: 
        linear-gradient(#fff 0 0) padding-box, 
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      animation: orb-glow-rotate 4s linear infinite;
      opacity: 0.6;
    }

    .orb-glow-ring.active {
      opacity: 1;
      animation-duration: 2s;
    }

    /* Card styles */
    .glass-card {
      background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.03) 0%,
        rgba(255, 255, 255, 0.01) 100%
      );
      border: 1px solid var(--border-subtle);
      backdrop-filter: blur(20px);
      border-radius: 24px;
    }

    .glass-card-elevated {
      background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.05) 0%,
        rgba(255, 255, 255, 0.02) 100%
      );
      border: 1px solid var(--border-medium);
      backdrop-filter: blur(30px);
      border-radius: 20px;
    }

    /* Status dot */
    .status-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      transition: all 0.3s ease;
    }

    .status-dot.connected {
      background: var(--accent-emerald);
      box-shadow: 0 0 8px var(--accent-emerald);
    }

    .status-dot.pending {
      background: var(--accent-amber);
      animation: orb-breathe 1.5s ease-in-out infinite;
    }

    .status-dot.disconnected {
      background: var(--text-muted);
    }

    /* Message bubbles */
    .message-user {
      background: linear-gradient(135deg, rgba(103, 232, 249, 0.1) 0%, rgba(96, 165, 250, 0.05) 100%);
      border: 1px solid rgba(103, 232, 249, 0.2);
    }

    .message-assistant {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
      border: 1px solid var(--border-subtle);
    }

    .message-text {
      white-space: pre-wrap;       /* V1: preserve line breaks, no markdown */
      overflow-wrap: break-word;   /* long URLs / tokens wrap safely */
    }

    /* Scrollbar */
    .custom-scrollbar::-webkit-scrollbar {
      width: 4px;
    }

    .custom-scrollbar::-webkit-scrollbar-track {
      background: transparent;
    }

    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 2px;
    }

    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: rgba(255, 255, 255, 0.2);
    }

    /* Entry animations */
    .fade-in-up {
      animation: fade-in-up 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }

    .stagger-1 { animation-delay: 0.1s; opacity: 0; }
    .stagger-2 { animation-delay: 0.2s; opacity: 0; }
    .stagger-3 { animation-delay: 0.3s; opacity: 0; }

    /* Background mesh */
    .bg-mesh {
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 0;
      background: 
        radial-gradient(ellipse 80% 50% at 50% -20%, rgba(103, 232, 249, 0.08) 0%, transparent 50%),
        radial-gradient(ellipse 60% 40% at 80% 80%, rgba(96, 165, 250, 0.05) 0%, transparent 50%),
        radial-gradient(ellipse 50% 30% at 20% 60%, rgba(139, 92, 246, 0.03) 0%, transparent 50%);
    }

    /* Select styling */
    select {
      appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23a1a1aa' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 12px center;
      padding-right: 36px;
    }

    /* Noise texture overlay */
    .noise-overlay {
      position: fixed;
      inset: 0;
      pointer-events: none;
      z-index: 100;
      opacity: 0.015;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    }

    /* Reduced motion */
    @media (prefers-reduced-motion: reduce) {
      .orb-core,
      .orb-ripple,
      .orb-glow-ring {
        animation: none !important;
      }
    }
  </style>
</svelte:head>

<main class="min-h-screen relative overflow-hidden">
  <!-- Background -->
  <div class="bg-mesh"></div>
  <div class="noise-overlay"></div>

  <!-- Header -->
  <header class="relative z-10 px-6 py-5 flex items-center justify-between fade-in-up stagger-1">
    <div class="flex items-center gap-4">
      <div>
        <h1 class="text-lg font-semibold tracking-tight text-white">Shorekeeper</h1>
        <p class="text-xs text-zinc-500 font-mono tracking-wide">JARVIS v2.0</p>
      </div>
    </div>

    <div class="flex items-center gap-4">
      <!-- Voice Selector (cosmetic — V1) -->
      <select 
        bind:value={selectedVoice}
        onchange={onVoiceChange}
        class="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-zinc-300 focus:outline-none focus:border-cyan-500/50 transition-colors"
      >
        {#each VOICES as voice}
          <option value={voice.name}>{voice.name}</option>
        {/each}
      </select>

      <!-- Status Indicators -->
      <div class="hidden sm:flex items-center gap-3">
        <div class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
          <div class="status-dot {lkState === 'connected' ? 'connected' : lkState === 'connecting' || lkState === 'reconnecting' ? 'pending' : 'disconnected'}"></div>
          <span class="text-xs text-zinc-400 font-mono">LiveKit</span>
        </div>
        <div class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
          <div class="status-dot {mode === 'active' ? 'connected' : mode === 'standby' ? 'pending' : 'disconnected'}"></div>
          <span class="text-xs text-zinc-400 font-mono">Room</span>
        </div>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <div class="relative z-10 flex flex-col lg:flex-row items-stretch gap-6 px-6 pb-6 min-h-[calc(100vh-88px)]">
    
    <!-- Left: Orb & Controls -->
    <div class="lg:w-[400px] flex flex-col items-center justify-center glass-card p-8 fade-in-up stagger-2">
      
      <!-- Status Label -->
      <div class="mb-8 flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
        {#if mode === 'active' && status === 'connecting'}
          <div class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></div>
          <span class="text-sm font-medium text-amber-400">Connecting</span>
        {:else if mode === 'active' && status === 'listening'}
          <div class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
          <span class="text-sm font-medium text-emerald-400">Listening</span>
        {:else if mode === 'active' && status === 'speaking'}
          <div class="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></div>
          <span class="text-sm font-medium text-violet-400">Speaking</span>
        {:else if status === 'processing'}
          <div class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></div>
          <span class="text-sm font-medium text-amber-400">Processing</span>
        {:else if mode === 'standby'}
          <div class="w-2 h-2 rounded-full bg-emerald-500/70"></div>
          <span class="text-sm font-medium text-emerald-500/70">Standby</span>
        {:else}
          <div class="w-2 h-2 rounded-full bg-zinc-600"></div>
          <span class="text-sm font-medium text-zinc-500">Ready</span>
        {/if}
      </div>

      <!-- Orb -->
      <div class="orb-container mb-8">
        <!-- Ripples -->
        {#if mode !== 'off'}
          <div class="orb-ripple {status}"></div>
          <div class="orb-ripple {status}"></div>
          <div class="orb-ripple {status}"></div>
        {/if}
        
        <!-- Glow Ring -->
        {#if mode === 'active'}
          <div class="orb-glow-ring active"></div>
        {:else if mode === 'standby'}
          <div class="orb-glow-ring"></div>
        {/if}

        <!-- Core Orb -->
        <button 
          onclick={toggleSession}
          class="orb-core {mode === 'off' ? (status === 'error' ? 'error' : 'off') : mode === 'standby' ? 'standby' : status}"
          aria-label={mode === 'off' ? 'Start session' : 'End session'}
        ></button>
      </div>

      <!-- Hint Text -->
      <p class="text-sm text-zinc-500 text-center">
        {#if mode === 'off'}
          Tap the orb to begin
        {:else if mode === 'standby'}
          Say "Hey Jarvis" to activate
        {:else if status === 'connecting'}
          Opening secure channel...
        {:else if status === 'listening'}
          Speak freely...
        {:else if status === 'speaking'}
          Shorekeeper responds
        {:else if status === 'processing'}
          Thinking...
        {/if}
      </p>

      <!-- Wake word arm/disarm (secondary path) -->
      {#if mode === 'off' || mode === 'standby'}
        <button
          onclick={toggleWake}
          class="mt-4 px-4 py-1.5 rounded-full text-xs font-mono transition-colors border
            {mode === 'standby'
              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20'
              : 'bg-white/5 border-white/10 text-zinc-500 hover:text-zinc-300 hover:border-white/20'}"
        >
          {mode === 'standby' ? 'Voice wake armed' : 'Arm voice wake'}
        </button>
      {/if}

      <!-- Live Subtitle (when JARVIS speaking) — also shown while listening
           because a final transcript can arrive after the status flips back. -->
      {#if subtitle && status !== 'idle' && status !== 'error'}
        <div class="mt-6 w-full px-4 py-3 rounded-xl bg-violet-500/10 border border-violet-500/20 fade-in-up">
          <div class="flex items-start gap-2">
            <span class="text-[10px] font-mono text-violet-400 bg-violet-500/20 px-2 py-0.5 rounded shrink-0">
              {subtitleLanguage.toUpperCase()}
            </span>
            <p class="text-sm text-violet-200 flex-1 message-text">{subtitle}</p>
          </div>
        </div>
      {/if}

      <!-- Live User Transcript (interim results while listening) -->
      {#if transcript && (status === 'listening' || status === 'processing')}
        <div class="mt-6 w-full px-4 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 fade-in-up">
          <div class="flex items-start gap-2">
            <span class="text-[10px] font-mono text-cyan-400 bg-cyan-500/20 px-2 py-0.5 rounded shrink-0 flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              YOU
            </span>
            <p class="text-sm text-cyan-100/80 flex-1 italic message-text">{transcript}</p>
          </div>
        </div>
      {/if}
    </div>

    <!-- Right: Conversation & Logs -->
    <div class="flex-1 flex flex-col gap-6 min-w-0 fade-in-up stagger-3">
      
      <!-- Conversation Panel -->
      <div class="flex-1 glass-card p-6 flex flex-col min-h-[300px]">
        <div class="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
          <h3 class="text-sm font-medium text-zinc-300 flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="text-zinc-500">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            Conversation
          </h3>
          <span class="text-xs text-zinc-600 font-mono">{messages.length} messages</span>
        </div>

        <div bind:this={conversationEl} class="flex-1 overflow-y-auto custom-scrollbar space-y-4 pr-2">
          {#if messages.length === 0}
            <div class="h-full flex items-center justify-center">
              <p class="text-zinc-600 text-sm text-center">
                {mode === 'off' 
                  ? 'Start a session to begin conversation' 
                  : 'Your conversation will appear here...'}
              </p>
            </div>
          {:else}
            {#each messages as msg}
              <div class="flex {msg.role === 'user' ? 'justify-end' : 'justify-start'}">
                <div class="max-w-[80%] {msg.role === 'user' ? 'message-user' : 'message-assistant'} rounded-2xl px-4 py-3">
                  <p class="text-sm text-zinc-200 leading-relaxed message-text">{msg.text}</p>
                  <p class="text-[10px] text-zinc-600 font-mono mt-1">{msg.time}{msg.language ? ` · ${msg.language}` : ''}</p>
                </div>
              </div>
            {/each}
          {/if}
          <!-- Live agent reply bubble (sealed into history after speech ends) -->
          {#if liveAgentText}
            <div class="flex justify-start">
              <div class="max-w-[80%] message-assistant rounded-2xl px-4 py-3 border-violet-500/20">
                <p class="text-sm text-zinc-200 leading-relaxed message-text">{liveAgentText}{#if agentSpeaking}<span class="inline-block w-1.5 h-4 bg-violet-400/80 ml-1 animate-pulse align-middle"></span>{/if}</p>
                <p class="text-[10px] text-zinc-600 font-mono mt-1">speaking · {liveAgentLanguage}</p>
              </div>
            </div>
          {/if}
        </div>
      </div>

      <!-- System Logs -->
      <div class="glass-card-elevated p-4 h-[180px] flex flex-col">
        <div class="flex items-center justify-between mb-3">
          <h3 class="text-xs font-medium text-zinc-400 flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="text-zinc-600">
              <path d="M4 17l6-6-6-6M12 19h8"/>
            </svg>
            System
          </h3>
          <span class="text-[10px] text-zinc-600 font-mono">Deepgram Nova-3 · Hermes · Fish Audio</span>
        </div>

        <div class="flex-1 overflow-y-auto custom-scrollbar space-y-1 font-mono text-xs">
          {#each [...logs].reverse() as log}
            <div class="flex items-start gap-2 py-1">
              <span class="text-zinc-700 shrink-0">{log.time}</span>
              <span class="{
                log.type === 'error' ? 'text-rose-400' :
                log.type === 'warn' ? 'text-amber-400' :
                log.type === 'success' ? 'text-emerald-400' :
                'text-zinc-500'
              }">{log.text}</span>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</main>
