<!--
  OrbPanel.svelte — left card: status pill, voice orb, hint text, wake-word
  arm button, and the live caption slot.
-->
<script lang="ts">
  import CaptionBar from './CaptionBar.svelte';
  import ParticleOrb from './ParticleOrb.svelte';
  import { session } from '../lib/stores/session.svelte';
  import { logs } from '../lib/stores/logs.svelte';

  const ORB_MODE_KEY = 'jarvis-orb-mode';
  let viewMode: '2d' | '3d' = $state((localStorage.getItem(ORB_MODE_KEY) as '2d' | '3d') || '2d');

  function toggleViewMode() {
    viewMode = viewMode === '2d' ? '3d' : '2d';
    localStorage.setItem(ORB_MODE_KEY, viewMode);
  }

  // Touch Swipe Gesture for Switching 2D / 3D Mode
  let touchStartX = 0;
  let touchStartY = 0;

  function handleTouchStart(e: TouchEvent) {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }

  function handleTouchEnd(e: TouchEvent) {
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    const deltaY = e.changedTouches[0].clientY - touchStartY;

    // Horizonal swipe detection (> 40px threshold and more horizontal than vertical)
    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
      toggleViewMode();
    }
  }

  const HINTS: Record<string, string> = {
    off: 'Tap the orb to begin',
    standby: 'Say "Hey Jarvis" to activate',
    connecting: 'Opening secure channel...',
    listening: 'Speak freely...',
    speaking: 'Shorekeeper responds',
    processing: 'Thinking...',
  };

  const STATUS_INDICATOR: Record<string, { label: string; bar: string; text: string; glow: string }> = {
    connecting: { label: 'CONNECTING', bar: 'bg-amber-400', text: 'text-amber-300', glow: 'drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]' },
    listening: { label: 'LISTENING', bar: 'bg-emerald-400', text: 'text-emerald-300', glow: 'drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]' },
    speaking: { label: 'SPEAKING', bar: 'bg-violet-400', text: 'text-violet-300', glow: 'drop-shadow-[0_0_8px_rgba(167,139,250,0.5)]' },
    processing: { label: 'PROCESSING', bar: 'bg-amber-400', text: 'text-amber-300', glow: 'drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]' },
    standby: { label: 'STANDBY', bar: 'bg-emerald-500/70', text: 'text-emerald-400/80', glow: '' },
    idle: { label: 'READY', bar: 'bg-zinc-600', text: 'text-zinc-500', glow: '' },
  };

  const statusInfo = $derived(STATUS_INDICATOR[session.mode === 'off' ? 'idle' : session.mode === 'standby' ? 'standby' : session.status] ?? STATUS_INDICATOR.idle);
  const hint = $derived(
    session.mode === 'off' ? HINTS.off
    : session.mode === 'standby' ? HINTS.standby
    : (HINTS[session.status] ?? '')
  );
  const orbClass = $derived(
    session.mode === 'off' ? (session.status === 'error' ? 'error' : 'off')
    : session.mode === 'standby' ? 'standby'
    : session.status
  );
</script>

<div class="w-full flex flex-col items-center justify-center p-0 border-0 bg-transparent shadow-none backdrop-blur-none">

  <!-- Status Indicator (Clean Dynamic Wave Bars + HUD Text, Borderless) -->
  <div class="mt-2 sm:mt-3 mb-4 lg:mb-8 flex items-center justify-center w-full px-1 transition-all duration-500 delay-200 {session.hasStarted ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none hidden'}">
    <div class="flex items-center gap-2.5 px-2 py-1">
      <!-- Equalizer / Waveform Bar Indicator -->
      <div class="flex items-end gap-1 h-4 min-h-[16px]">
        <div class="w-1 rounded-full {statusInfo.bar} transition-all duration-300 {session.mode === 'active' ? 'h-4 animate-[bounce_1s_infinite_100ms]' : 'h-2'}"></div>
        <div class="w-1 rounded-full {statusInfo.bar} transition-all duration-300 {session.mode === 'active' ? 'h-4 animate-[bounce_1s_infinite_300ms]' : 'h-3'}"></div>
        <div class="w-1 rounded-full {statusInfo.bar} transition-all duration-300 {session.mode === 'active' ? 'h-4 animate-[bounce_1s_infinite_200ms]' : 'h-2.5'}"></div>
      </div>
      <span class="text-xs font-mono font-medium tracking-widest {statusInfo.text} {statusInfo.glow}">{statusInfo.label}</span>
    </div>
  </div>

  <!-- Orb Container (Swipeable 2D CSS Orb vs 3D Spectro Particle Field) -->
  <div 
    class="relative mb-1 lg:mb-6 flex items-center justify-center min-h-[240px] sm:min-h-[280px] touch-pan-y transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform {session.hasStarted ? 'scale-90 sm:scale-100 lg:scale-115' : 'scale-110 sm:scale-125 lg:scale-135'}"
    ontouchstart={handleTouchStart}
    ontouchend={handleTouchEnd}
  >
    {#if viewMode === '3d'}
      <ParticleOrb />
    {:else}
      <div class="orb-container">
        {#if session.mode !== 'off'}
          <div class="orb-ripple {session.status}"></div>
          <div class="orb-ripple {session.status}"></div>
          <div class="orb-ripple {session.status}"></div>
        {/if}

        {#if session.mode === 'active'}
          <div class="orb-glow-ring active"></div>
        {:else if session.mode === 'standby'}
          <div class="orb-glow-ring"></div>
        {/if}

        <button
          onclick={() => session.toggleSession()}
          class="orb-core {orbClass}"
          aria-label={session.mode === 'off' ? 'Start session' : 'End session'}
        ></button>
      </div>
    {/if}
  </div>

  <!-- Hint Text / Clean Connection Log Subtitle -->
  {#if !session.hasStarted && session.mode === 'active'}
    <p class="text-xs font-mono text-cyan-200/80 text-center animate-pulse tracking-wide mt-3 drop-shadow-[0_0_10px_rgba(103,232,249,0.3)] min-h-[20px]">
      {logs.latest?.text || 'Opening secure channel...'}
    </p>
  {:else}
    <p class="text-xs lg:text-sm text-center transition-all duration-700 {session.hasStarted ? 'text-zinc-500 font-normal mt-0' : 'text-cyan-200/90 font-medium tracking-wide mt-3 drop-shadow-[0_0_12px_rgba(103,232,249,0.5)]'}">{hint}</p>
  {/if}

  <!-- Wake word arm/disarm (secondary path) — smooth height transition -->
  <div class="overflow-hidden transition-all duration-300 ease-out flex items-center justify-center {session.mode === 'off' || session.mode === 'standby' ? 'max-h-9 opacity-100 mt-2 lg:mt-4' : 'max-h-0 opacity-0 mt-0'}">
    {#if session.mode === 'off' || session.mode === 'standby'}
      <button
        onclick={() => session.toggleWake()}
        class="px-4 py-1.5 rounded-full text-xs font-mono transition-colors border
          {session.mode === 'standby'
            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20'
            : 'bg-white/5 border-white/10 text-zinc-500 hover:text-zinc-300 hover:border-white/20'}"
      >
        {session.mode === 'standby' ? 'Voice wake armed' : 'Arm voice wake'}
      </button>
    {/if}
  </div>

  <CaptionBar />
</div>
