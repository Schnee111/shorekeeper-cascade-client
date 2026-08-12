<script lang="ts">
  import { onMount } from 'svelte';
  import { Mic, MicOff, Volume2, Sparkles, Activity, Shield, Terminal } from 'lucide-svelte';
  import { startCapture } from './lib/audio-capture';
  import { createPlayer } from './lib/audio-playback';
  import { startWakeWord } from './lib/wakeword';

  // Svelte 5 Runes ($state)
  // mode = hands-free lifecycle: off (armed nothing) | standby (Porcupine listening for wake word)
  //        | active (Gemini capturing your speech)
  let mode = $state<'off' | 'standby' | 'active'>('off');
  let stopWake: (() => Promise<void>) | null = null;
  let silenceTimer: ReturnType<typeof setTimeout> | null = null;
  const SILENCE_MS = 8000;

  let isListening = $state(false);
  let status = $state<'idle' | 'listening' | 'processing' | 'speaking' | 'error'>('idle');
  let transcript = $state('');
  let response = $state('Schnee... welcome back. Shorekeeper JARVIS core is active.');

  // Voice selector — female only (source: Google Gemini TTS API reference)
  const VOICES = [
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
  let selectedVoice = $state('Achernar');
  
  function onVoiceChange(e: Event) {
    const select = e.target as HTMLSelectElement;
    selectedVoice = select.value;
    logs = [...logs, `[Voice] Switching to: ${selectedVoice}`];
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({ type: 'voiceChange', voice: selectedVoice }));
    }
  }
  
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
            // PCM 24kHz base64 from Gemini TTS (cascade mode)
            player.play(data.data);
            status = 'speaking';
            break;
          case 'transcript':
            if (data.role === 'assistant' || data.role === 'model') response = data.text;
            else if (data.role === 'user') transcript = data.text;
            break;
          case 'status':
            if (data.state === 'processing') {
              status = 'processing';
              logs = [...logs, '[Hermes] Processing...'];
            } else if (data.state === 'ready') {
              geminiReady = true;
              if (data.log) logs = [...logs, data.log];
            }
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

  // After a turn, if no further speech within SILENCE_MS, stay active but
  // just keep listening. In tap-to-talk mode we never auto-standby.
  function armSilenceTimer() {
    clearSilenceTimer();
    // No auto-standby in tap-to-talk — keep mic open until user taps off.
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

  // Arm openwakeword listener (owns mic during standby).
  async function armWakeWord() {
    if (stopWake) return; // already armed
    logs = [...logs, '[WakeWord] Initializing microphone...'];
    
    // Request global mic permission directly in UI thread before any deep libraries
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach(track => track.stop());
      logs = [...logs, '[WakeWord] Mic permission granted'];
    } catch (e) {
      logs = [...logs, `[Error] Mic Access Denied: ${e instanceof Error ? e.message : String(e)}`];
      status = 'error';
      return; // Abort
    }

    stopWake = await startWakeWord(
      () => onWake(),
      (message) => {
        logs = [...logs, `[WakeWord] ${message}`];
      }
    );
    logs = [...logs, '[WakeWord] Standby — ucapkan "Hey Jarvis" untuk mulai'];
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

  // Main button: tap-to-talk (direct capture, no wake word).
  // Tap once = start listening (capture audio → Gemini + Deepgram).
  // Tap again = stop and return to off.
  async function toggleStandby() {
    if (mode === 'off') {
      // Skip wake word — go straight to capture
      logs = [...logs, '[Voice] Tap-to-talk: langsung aktif'];
      await startGeminiCapture();
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
      logs = [...logs, '[Voice] Dimatikan'];
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
        <h1 class="font-bold tracking-wider text-base uppercase text-slate-100 flex items-center gap-2">
          Shorekeeper <span class="text-emerald-400 text-[10px] font-mono px-2 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 tracking-widest">DEEPGRAM STT</span>
        </h1>
        <p class="text-[11px] text-slate-500 font-mono tracking-wide mt-0.5">Tethys Voice Core</p>
      </div>
    </div>

    <!-- Mobile: voice selector only -->
    <div class="md:hidden">
      <select 
        bind:value={selectedVoice}
        onchange={onVoiceChange}
        class="bg-slate-900/80 border border-slate-700 rounded-lg px-2 py-1 text-[11px] text-slate-300 focus:outline-none focus:border-cyan-500/50"
      >
        {#each VOICES as voice}
          <option value={voice.name}>{voice.name}</option>
        {/each}
      </select>
    </div>

    <!-- Desktop: voice selector + status indicators -->
    <div class="hidden md:flex items-center gap-3 text-xs font-mono text-slate-400">
      <!-- Voice Selector -->
      <select 
        bind:value={selectedVoice}
        onchange={onVoiceChange}
        class="bg-slate-900/80 border border-slate-700 rounded-lg px-2 py-1 text-xs text-slate-300 focus:outline-none focus:border-cyan-500/50"
      >
        {#each VOICES as voice}
          <option value={voice.name}>{voice.name} — {voice.desc}</option>
        {/each}
      </select>
      <div class="flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800/60 bg-slate-900/40">
        <div class={`w-2 h-2 rounded-full ${wsConnected ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]' : 'bg-amber-400'}`}></div>
        <span class="text-slate-300">Bridge</span>
      </div>
      <div class="flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800/60 bg-slate-900/40">
        <div class={`w-2 h-2 rounded-full ${geminiReady ? 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]' : 'bg-slate-600'}`}></div>
        <span class="text-slate-300">Gemini</span>
      </div>
    </div>
  </header>

  <!-- Main Content Dashboard -->
  <div class="flex-1 max-w-5xl w-full mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 z-10 items-start">
    <!-- Left Visualizer Orb Panel -->
    <div class="lg:col-span-6 flex flex-col items-center justify-center min-h-[400px] border border-slate-800/60 rounded-3xl bg-slate-900/20 backdrop-blur-xl p-8 relative overflow-hidden shadow-2xl">
      
      <!-- Status Pill Top Right -->
      <div class="absolute top-6 right-6 flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-800/60 bg-slate-950/50 backdrop-blur-md">
        {#if mode === 'active' && status === 'listening'}
          <div class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
          <span class="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">Listening</span>
        {:else if mode === 'active' && status === 'speaking'}
          <div class="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
          <span class="text-[11px] font-mono text-blue-400 uppercase tracking-wider">Speaking</span>
        {:else if mode === 'standby'}
          <div class="w-2 h-2 rounded-full bg-emerald-400"></div>
          <span class="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">Standby</span>
        {:else}
          <div class="w-2 h-2 rounded-full bg-slate-600"></div>
          <span class="text-[11px] font-mono text-slate-500 uppercase tracking-wider">Offline</span>
        {/if}
      </div>

      <!-- Glowing Voice Orb -->
      <div class="relative my-8 flex items-center justify-center">
        <!-- Outer Ripples -->
        <div class={`absolute w-64 h-64 rounded-full border border-cyan-500/10 transition-all duration-1000 ${mode === 'active' && status === 'listening' ? 'scale-150 opacity-50' : mode === 'standby' ? 'scale-110 opacity-30 border-emerald-500/20' : 'scale-90 opacity-0'}`}></div>
        <div class={`absolute w-52 h-52 rounded-full border border-blue-500/20 transition-all duration-700 ${mode === 'active' && status === 'speaking' ? 'scale-125 opacity-70 animate-pulse' : 'scale-95 opacity-0'}`}></div>

        <button
          onclick={toggleStandby}
          class={`w-40 h-40 rounded-full flex flex-col items-center justify-center transition-all duration-500 relative z-10 group/btn outline-none ${
            mode === 'active' && status === 'listening'
              ? 'bg-gradient-to-b from-cyan-900 to-slate-900 border border-cyan-500/50 shadow-[0_0_40px_-10px_rgba(34,211,238,0.5)] scale-105'
              : mode === 'active' && status === 'speaking'
              ? 'bg-gradient-to-b from-blue-900 to-slate-900 border border-blue-500/50 shadow-[0_0_50px_-10px_rgba(59,130,246,0.5)]'
              : mode === 'standby'
              ? 'bg-slate-900 border border-emerald-500/40 shadow-[0_0_30px_-10px_rgba(16,185,129,0.3)] hover:scale-105'
              : 'bg-slate-900/80 border border-slate-800 hover:border-slate-700 hover:bg-slate-800'
          }`}
        >
          {#if mode === 'active' && status === 'listening'}
            <div class="relative">
              <Mic class="w-10 h-10 text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,1)]" />
              <div class="absolute inset-0 bg-cyan-400 blur-xl opacity-40 animate-pulse"></div>
            </div>
          {:else if mode === 'active' && status === 'speaking'}
            <div class="relative">
              <Volume2 class="w-10 h-10 text-blue-400 drop-shadow-[0_0_12px_rgba(59,130,246,1)]" />
              <div class="absolute inset-0 bg-blue-400 blur-xl opacity-40 animate-pulse"></div>
            </div>
          {:else if mode === 'standby'}
            <Mic class="w-10 h-10 text-emerald-400/80 group-hover/btn:text-emerald-400 transition-colors" />
          {:else}
            <MicOff class="w-10 h-10 text-slate-600 group-hover/btn:text-slate-400 transition-colors" />
          {/if}
        </button>
      </div>
      
      <!-- Live Transcript Subtitle -->
      <div class="w-full text-center mt-6">
        <div class="min-h-[80px] w-full flex items-center justify-center bg-slate-950/50 rounded-2xl border border-slate-800/80 p-5 shadow-inner">
          <p class={`text-[15px] font-medium leading-relaxed transition-colors duration-300 ${transcript ? 'text-emerald-100' : 'text-slate-600 italic'}`}>
            {transcript || (mode === 'standby' ? 'Menunggu "Hey Jarvis"...' : mode === 'active' ? 'Mendengarkan suara...' : 'Ketuk orb untuk memulai.')}
          </p>
        </div>
      </div>
    </div>

    <!-- Right Logs & Response Panel -->
    <div class="lg:col-span-6 flex flex-col gap-6 w-full">
      <div class="bg-slate-900/30 border border-slate-800/60 rounded-3xl p-6 backdrop-blur-xl flex flex-col flex-1 min-h-[400px] relative">
        <div class="flex items-center justify-between mb-4 border-b border-slate-800/50 pb-4">
          <h3 class="text-xs font-mono text-slate-400 uppercase tracking-widest flex items-center gap-2">
            <Terminal class="w-4 h-4" />
            System Logs
          </h3>
          <div class="flex items-center gap-2">
            <span class="text-[10px] font-mono text-emerald-500/70 border border-emerald-900/50 bg-emerald-950/20 px-2 py-0.5 rounded-md">Deepgram Nova-3</span>
            <span class="text-[10px] font-mono text-slate-500 border border-slate-800 bg-slate-900 px-2 py-0.5 rounded-md">v2.0</span>
          </div>
        </div>
        
        <div class="flex-1 overflow-y-auto space-y-2 font-mono text-xs pr-2 custom-scrollbar flex flex-col-reverse" style="max-height: 400px;">
          {#each [...logs].reverse() as log}
            <div class="py-1.5 border-b border-slate-800/30 break-words">
              <span class="text-slate-600 mr-2">›</span>
              <span class={
                log.includes('[Error]') ? 'text-rose-400' : 
                log.includes('[Wake]') ? 'text-emerald-400' :
                log.includes('Deepgram') ? 'text-emerald-300' : 
                log.includes('[Gemini]') ? 'text-cyan-400' : 
                'text-slate-400'
              }>{log}</span>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</main>