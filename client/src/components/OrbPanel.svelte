<!--
  OrbPanel.svelte — left card: status pill, voice orb, hint text, wake-word
  arm button, and the live caption slot.
-->
<script lang="ts">
  import CaptionBar from './CaptionBar.svelte';
  import ParticleOrb from './ParticleOrb.svelte';
  import { session } from '../lib/stores/session.svelte';

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

  const STATUS_PILL: Record<string, { label: string; dot: string; text: string; pulse: boolean }> = {
    connecting: { label: 'Connecting', dot: 'bg-amber-400', text: 'text-amber-400', pulse: true },
    listening: { label: 'Listening', dot: 'bg-emerald-400', text: 'text-emerald-400', pulse: true },
    speaking: { label: 'Speaking', dot: 'bg-violet-400', text: 'text-violet-400', pulse: true },
    processing: { label: 'Processing', dot: 'bg-amber-400', text: 'text-amber-400', pulse: true },
    standby: { label: 'Standby', dot: 'bg-emerald-500/70', text: 'text-emerald-500/70', pulse: false },
    idle: { label: 'Ready', dot: 'bg-zinc-600', text: 'text-zinc-500', pulse: false },
  };

  const pill = $derived(STATUS_PILL[session.mode === 'off' ? 'idle' : session.mode === 'standby' ? 'standby' : session.status] ?? STATUS_PILL.idle);
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

  <!-- Dynamic Landing Title: Centered above Orb on landing screen (Clean fade-out when session starts) -->
  {#if !session.hasStarted}
    <div
      class="text-center flex flex-col items-center mb-6 sm:mb-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
    >
      <h1 class="font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-violet-200 text-3xl sm:text-4xl lg:text-5xl drop-shadow-[0_0_30px_rgba(103,232,249,0.6)] whitespace-nowrap">Shorekeeper</h1>
      <p class="text-zinc-400/90 font-mono tracking-widest text-sm sm:text-base mt-2">JARVIS v2.0</p>
    </div>
  {/if}

  <!-- Status Label (Centered at Top) -->
  <div class="mb-2 lg:mb-8 flex items-center justify-center w-full px-1 transition-all duration-500 delay-200 {session.hasStarted ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none hidden'}">
    <div class="flex items-center gap-2 px-3.5 lg:px-4 py-1.5 lg:py-2 rounded-full bg-white/5 border border-white/10 shadow-lg backdrop-blur-md">
      <div class="w-2 h-2 rounded-full {pill.dot} {pill.pulse ? 'animate-pulse' : ''}"></div>
      <span class="text-sm font-medium {pill.text}">{pill.label}</span>
    </div>
  </div>

  <!-- Orb Container (Swipeable 2D CSS Orb vs 3D Spectro Particle Field) -->
  <div 
    class="relative mb-1 lg:mb-6 flex items-center justify-center min-h-[240px] sm:min-h-[280px] touch-pan-y transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform {session.hasStarted ? 'scale-75 sm:scale-85 lg:scale-100' : 'scale-110 sm:scale-125 lg:scale-135'}"
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

  <!-- Hint Text -->
  <p class="text-xs lg:text-sm text-center transition-all duration-700 {session.hasStarted ? 'text-zinc-500 font-normal mt-0' : 'text-cyan-200/90 font-medium tracking-wide mt-3 drop-shadow-[0_0_12px_rgba(103,232,249,0.5)]'}">{hint}</p>

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
