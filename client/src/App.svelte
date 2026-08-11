<script lang="ts">
  import { onMount } from 'svelte';
  import { Mic, MicOff, Volume2, Sparkles, Activity, Shield, Terminal, Zap, Radio } from 'lucide-svelte';
  import { startCapture } from './lib/audio-capture';
  import { createPlayer } from './lib/audio-playback';
  import { startWakeWord } from './lib/wakeword';

  // Svelte 5 Runes ($state)
  // mode = hands-free lifecycle: off (armed nothing) | standby (Porcupine listening for wake word)
  //        | active (Gemini capturing your speech)
  let isListening = $state(false);
  let status = $state<'idle' | 'listening' | 'speaking' | 'error'>('idle');
  let transcript = $state('');
  let response = $state('Schnee... welcome back. Shorekeeper JARVIS core is active.');

  const SILENCE_MS = 8000;
  let logs = $state<string[]>([
    '[System] Tethys Core Initialized (Bun + Elysia.js + Svelte 5)',
    '[Network] WebSocket Bridge endpoint /jarvis/ws',
    '[Voice] Gemini Live Engine Ready'
  ]);
  let wsConnected = $state(false);
  let geminiReady = $state(false);

  let socket: WebSocket | null = null;
  let reconnectTimer: ReturnType<typeof setTimeout> | null = null;
  let stopCapture: (() => void) | null = null;
  let stopWake: (() => Promise<void>) | null = null;
  let silenceTimer: ReturnType<typeof setTimeout> | null = null;
  const player = createPlayer();

  onMount(() => {
    connectWS();
  });

  function connectWS() {
    try {
      const proto = location.protocol === 'https:' ? 'wss' : 'ws';
      socket = new WebSocket(`${proto}://${location.host}/jarvis/ws`);
      socket.onopen = () => {
        wsConnected = true;
        logs = [...logs, '[WS] Connected to Elysia.js server (/jarvis/ws)'];
      };
      socket.onmessage = (event) => {
        let data: any;
        try {
          data = JSON.parse(event.data);
        } catch {
          return; // Not JSON, ignore
        }
        switch (data.type) {
          case 'audio':
            // PCM 24kHz base64 from Gemini Live
            player.play(data.data);
            status = 'speaking';
            break;
          case 'transcript':
            if (data.role === 'model') response = data.text;
            else if (data.role === 'user') transcript = data.text;
            break;
          case 'turnComplete':
            player.stop();
            // Hands-free: stay armed, return to listening, and re-arm silence timer.
            if (mode === 'active') {
              status = 'listening';
              armSilenceTimer();
            } else {
              status = 'idle';
            }
            break;
          case 'status':
            if (data.state === 'ready') {
              geminiReady = true;
              if (data.log) logs = [...logs, data.log];
            }
            break;
          case 'error':
            logs = [...logs, `[Error] ${data.error}`];
            break;
        }
      };
      socket.onclose = () => {
        wsConnected = false;
        geminiReady = false;
        if (stopCapture) {
          stopCapture();
          stopCapture = null;
        }
        clearSilenceTimer();
        // Drop to a safe idle; standby (Porcupine) may keep running so wake word
        // still works while WS reconnects. If we were active, fall back to standby.
        if (mode === 'active') {
          mode = stopWake ? 'standby' : 'off';
        }
        status = 'idle';
        logs = [...logs, '[WS] Disconnected — reconnecting in 1s...'];
        if (reconnectTimer) clearTimeout(reconnectTimer);
        reconnectTimer = setTimeout(connectWS, 1000);
      };
      socket.onerror = () => {
        logs = [...logs, '[WS] Connection error — retrying...'];
      };
    } catch (e) {
      console.error('WS Error:', e);
    }
  }

  function clearSilenceTimer() {
    if (silenceTimer) {
      clearTimeout(silenceTimer);
      silenceTimer = null;
    }
  }

  // After a turn, if no further speech within SILENCE_MS, drop back to standby.
  function armSilenceTimer() {
    clearSilenceTimer();
    silenceTimer = setTimeout(() => {
      if (mode === 'active') returnToStandby();
    }, SILENCE_MS);
  }

  // Stop Gemini capture, then re-arm Porcupine. Enforces single mic consumer.
  async function returnToStandby() {
    clearSilenceTimer();
    if (stopCapture) {
      stopCapture();
      stopCapture = null;
    }
    mode = 'standby';
    status = 'idle';
    logs = [...logs, '[Voice] Idle — kembali standby, dengar wake word'];
    await armWakeWord();
  }

  // Arm Porcupine wake-word listener (owns mic during standby).
  async function armWakeWord() {
    if (stopWake) return; // already armed
    stopWake = await startWakeWord(
      () => onWake(),
      (message) => {
        logs = [...logs, `[WakeWord] ${message}`];
      }
    );
    logs = [...logs, '[WakeWord] Standby — ucapkan "Jarvis" untuk mulai'];
  }

  // Wake word fired: release Porcupine mic, hand mic to Gemini capture.
  async function onWake() {
    if (mode !== 'standby') return;
    logs = [...logs, '[WakeWord] Terpicu — mengaktifkan sesi suara'];
    if (stopWake) {
      await stopWake();
      stopWake = null;
    }
    await startGeminiCapture();
  }

  async function startGeminiCapture() {
    if (!socket || socket.readyState !== WebSocket.OPEN || !geminiReady) {
      logs = [...logs, '[Voice] Tunggu sampai Gemini Live berstatus Ready'];
      // Fall back to standby so wake word still works.
      mode = 'standby';
      await armWakeWord();
      return;
    }
    try {
      stopCapture = await startCapture(
        (base64pcm) => {
          if (socket && socket.readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify({ type: 'audio', data: base64pcm }));
          }
        },
        (message) => {
          logs = [...logs, `[Diag] ${message}`];
          if (socket && socket.readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify({ type: 'diagnostic', message }));
          }
        }
      );
      mode = 'active';
      status = 'listening';
      armSilenceTimer();
      logs = [...logs, '[Mic] Capture started (PCM 16kHz → Gemini Live)'];
    } catch (e) {
      const message = e instanceof Error ? `${e.name}: ${e.message}` : String(e);
      logs = [...logs, `[Mic] Error: ${message}`];
      if (socket && socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({ type: 'diagnostic', message: `capture:error ${message}` }));
      }
      mode = 'standby';
      await armWakeWord();
    }
  }

  // Main button: toggle the whole hands-free system on/off.
  async function toggleStandby() {
    if (mode === 'off') {
      await armWakeWord();
      mode = 'standby';
    } else {
      // Tear everything down.
      clearSilenceTimer();
      if (stopCapture) {
        stopCapture();
        stopCapture = null;
      }
      if (stopWake) {
        await stopWake();
        stopWake = null;
      }
      mode = 'off';
      status = 'idle';
      logs = [...logs, '[Voice] Hands-free dimatikan'];
    }
  }
</script>

<main class="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-black relative overflow-hidden">
  <!-- Glowing Background -->
  <div class="fixed inset-0 pointer-events-none">
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px]"></div>
    <div class="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]"></div>
  </div>

  <!-- Top Navigation Header -->
  <header class="border-b border-slate-800/80 bg-slate-950/60 backdrop-blur-md px-6 py-4 flex items-center justify-between z-10">
    <div class="flex items-center gap-3">
      <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
        <Sparkles class="w-5 h-5 text-white" />
      </div>
      <div>
        <h1 class="font-bold tracking-wider text-base uppercase bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent flex items-center gap-2">
          SHOREKEEPER <span class="text-cyan-400 text-xs font-mono px-1.5 py-0.5 rounded border border-cyan-500/30 bg-cyan-500/10">SVELTE 5 + BUN</span>
        </h1>
        <p class="text-xs text-slate-400 font-mono">Tethys Realtime Voice Interface</p>
      </div>
    </div>

    <div class="flex items-center gap-4 text-xs font-mono text-slate-400">
      <div class="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-800 bg-slate-900/50">
        <Radio class={`w-3.5 h-3.5 ${wsConnected ? 'text-emerald-400 animate-pulse' : 'text-amber-400'}`} />
        <span>Elysia Bridge: {wsConnected ? 'Online' : 'Connecting...'}</span>
      </div>
      <div class="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-800 bg-slate-900/50">
        <Shield class={`w-3.5 h-3.5 ${geminiReady ? 'text-emerald-400' : 'text-cyan-400'}`} />
        <span>Gemini Live: {geminiReady ? 'Ready' : 'Standby'}</span>
      </div>
    </div>
  </header>

  <!-- Main Content Dashboard -->
  <div class="flex-1 max-w-6xl w-full mx-auto p-6 grid grid-cols-1 md:grid-cols-12 gap-6 z-10">
    <!-- Left Visualizer Orb Panel -->
    <div class="md:col-span-7 flex flex-col items-center justify-center border border-slate-800/80 rounded-2xl bg-slate-900/40 backdrop-blur-md p-8 relative overflow-hidden">
      <div class="absolute top-4 left-4 flex items-center gap-2 text-xs font-mono text-slate-400">
        <Activity class="w-4 h-4 text-cyan-400" />
        <span>STELLAREALM VOICE CORE (SVELTE 5)</span>
      </div>

      <!-- Glowing Voice Orb -->
      <div class="relative my-12 flex items-center justify-center">
        <div class={`absolute w-72 h-72 rounded-full border border-cyan-500/20 transition-all duration-700 ${status === 'listening' ? 'scale-125 border-cyan-400/50 animate-ping' : status === 'speaking' ? 'scale-110 border-blue-400/40 animate-pulse' : 'scale-100'}`}></div>
        <div class={`absolute w-60 h-60 rounded-full border border-blue-500/30 transition-all duration-500 ${status === 'processing' ? 'rotate-180 scale-105 border-dashed' : ''}`}></div>

        <button
          onclick={toggleStandby}
          class={`w-44 h-44 rounded-full flex flex-col items-center justify-center transition-all duration-500 shadow-2xl relative z-10 group/btn ${
            status === 'listening'
              ? 'bg-gradient-to-br from-cyan-500 to-blue-600 shadow-cyan-500/50 scale-105'
              : status === 'processing'
              ? 'bg-gradient-to-br from-indigo-600 to-purple-600 shadow-purple-500/50 animate-pulse'
              : status === 'speaking'
              ? 'bg-gradient-to-br from-cyan-400 via-blue-600 to-indigo-600 shadow-blue-500/50'
              : mode === 'standby'
              ? 'bg-slate-900 border-2 border-cyan-500/50 shadow-cyan-500/20 animate-pulse'
              : 'bg-slate-900 border-2 border-slate-700/80 hover:border-cyan-500/80 hover:shadow-cyan-500/20'
          }`}
        >
          {#if status === 'listening'}
            <Mic class="w-12 h-12 text-white animate-bounce" />
          {:else if status === 'speaking'}
            <Volume2 class="w-12 h-12 text-white animate-pulse" />
          {:else}
            <MicOff class="w-12 h-12 text-slate-400 group-hover/btn:text-cyan-400 transition-colors" />
          {/if}
          <span class="text-xs font-mono mt-2 font-medium tracking-wider text-slate-200">
            {status === 'listening'
              ? 'LISTENING'
              : status === 'speaking'
              ? 'SPEAKING'
              : mode === 'standby'
              ? 'STANDBY — "JARVIS"'
              : 'TAP TO ARM'}
          </span>
        </button>
      </div>

      <!-- Live Transcript Subtitle -->
      <div class="w-full text-center space-y-2 max-w-lg">
        <p class="text-xs font-mono text-slate-400 uppercase tracking-widest">Live Transcript</p>
        <p class="text-sm font-medium text-slate-300 italic min-h-[40px] flex items-center justify-center">
          "{transcript || 'Press the orb or speak to initiate realtime dialogue...'}"
        </p>
      </div>
    </div>

    <!-- Right Logs & Response Panel -->
    <div class="md:col-span-5 flex flex-col gap-6">
      <div class="border border-slate-800/80 rounded-2xl bg-slate-900/40 backdrop-blur-md p-6 flex flex-col gap-3">
        <div class="flex items-center justify-between text-xs font-mono text-slate-400">
          <span class="flex items-center gap-1.5 text-cyan-400">
            <Zap class="w-4 h-4" /> SHOREKEEPER RESPONSE
          </span>
          <span class="text-slate-400">Spectro Mode</span>
        </div>
        <p class="text-sm text-slate-200 leading-relaxed font-sans bg-slate-950/40 p-4 rounded-xl border border-slate-800/60">
          {response}
        </p>
      </div>

      <div class="flex-1 border border-slate-800/80 rounded-2xl bg-slate-950/80 backdrop-blur-md p-5 flex flex-col font-mono text-xs overflow-hidden">
        <div class="flex items-center gap-2 pb-3 border-b border-slate-800 text-slate-400 mb-3">
          <Terminal class="w-4 h-4 text-cyan-400" />
          <span>Realtime Execution Log</span>
        </div>
        <div class="flex-1 overflow-y-auto space-y-2 text-slate-300 pr-2">
          {#each logs as log}
            <div class="flex gap-2">
              <span class="text-slate-400 select-none">&gt;</span>
              <span class={log.includes('Executing') ? 'text-cyan-400' : log.includes('Voice') || log.includes('WS') ? 'text-emerald-400' : 'text-slate-300'}>
                {log}
              </span>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</main>
