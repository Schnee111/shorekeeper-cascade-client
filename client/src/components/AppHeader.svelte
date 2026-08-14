<!--
  AppHeader.svelte — top bar:
  - Left: Brand block (Shorekeeper / JARVIS v2.0)
  - Center: ModelMenu Pill (centered on the screen)
  - Right: VoiceMenu Pill + Status Indicators
-->
<script lang="ts">
  import VoiceMenu from './VoiceMenu.svelte';
  import ModelMenu from './ModelMenu.svelte';
  import { session } from '../lib/stores/session.svelte';
  import { sessionRecorder } from '../lib/recorder';

  let isRecording = $state(false);

  function toggleRecord(): void {
    if (isRecording) {
      sessionRecorder.stop('jarvis-voice');
      isRecording = false;
    } else {
      const ok = sessionRecorder.start();
      if (ok) isRecording = true;
    }
  }

  const lkDot = $derived(
    session.lkState === 'connected' ? 'connected'
    : session.lkState === 'connecting' || session.lkState === 'reconnecting' ? 'pending'
    : 'disconnected'
  );
  const roomDot = $derived(session.mode === 'active' ? 'connected' : session.mode === 'standby' ? 'pending' : 'disconnected');
</script>

<header class="relative z-30 px-4 sm:px-6 py-2 lg:py-4 flex items-center justify-between min-h-[56px] shrink-0">
  <!-- Left: Single Source Title Element (Positioned in header flow, animated natively via FLIP / Web Animations API) -->
  <div class="relative flex items-center gap-4 min-w-[140px]">
    <div
      id="main-brand-title"
      class="text-left origin-center transition-opacity duration-300"
    >
      <h1 class="font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-violet-200 text-base sm:text-lg lg:text-xl whitespace-nowrap drop-shadow-[0_0_20px_rgba(103,232,249,0.4)]">Shorekeeper</h1>
      <p class="text-zinc-400/90 font-mono tracking-widest text-[10px] sm:text-xs">JARVIS v2.0</p>
    </div>
  </div>

  <!-- Center: Model Menu Pill (Fades in on start) -->
  <div class="absolute left-1/2 -translate-x-1/2 flex items-center justify-center transition-all duration-700 delay-300 {session.hasStarted ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-90 pointer-events-none'}">
    <ModelMenu
      options={session.modelOptions}
      selected={session.selectedModel}
      currentLabel={session.currentModelLabel}
      disabled={session.voiceSwitching}
      onPick={(id) => session.pickModel(id)}
    />
  </div>

  <!-- Right: Voice Menu Pill + Status Indicators (Fades in on start) -->
  <div class="flex items-center gap-2 sm:gap-3 min-w-[140px] justify-end">
    <!-- Session Audio Recorder Button (REC): Visible from the start, hides when recording is active -->
    {#if !isRecording}
      <button
        onclick={toggleRecord}
        class="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border text-xs font-mono transition-all duration-300 cursor-pointer bg-white/5 border-white/10 text-zinc-400 hover:text-white hover:bg-white/10"
        title="Start Background Recording"
        aria-label="Record Audio Session"
      >
        <div class="w-2 h-2 rounded-full bg-zinc-500"></div>
        <span class="text-[11px] font-semibold">REC</span>
      </button>
    {/if}

    <div class="transition-all duration-700 delay-300 {session.hasStarted ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-90 pointer-events-none'}">
      <VoiceMenu
        options={session.voiceOptions}
        selected={session.selectedVoice}
        currentLabel={session.currentVoiceLabel}
        switching={session.voiceSwitching}
        onPick={(id) => session.pickVoice(id)}
      />
    </div>

    <!-- Status Indicators -->
    <div class="hidden sm:flex items-center gap-3">
      <div class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
        <div class="status-dot {lkDot}"></div>
        <span class="text-xs text-zinc-400 font-mono">LiveKit</span>
      </div>
      <div class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
        <div class="status-dot {roomDot}"></div>
        <span class="text-xs text-zinc-400 font-mono">Room</span>
      </div>
    </div>
  </div>
</header>
