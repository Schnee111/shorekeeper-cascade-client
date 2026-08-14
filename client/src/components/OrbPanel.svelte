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

<div class="w-full flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] {session.hasStarted ? 'glass-card p-4 lg:p-8 overflow-hidden border border-white/10 scale-100' : 'border-0 bg-transparent shadow-none backdrop-blur-none p-0 scale-125 sm:scale-135 lg:scale-150'}">

  <!-- Status Label (Hidden on initial landing screen, fades in smoothly on start) -->
  <div class="mb-2 lg:mb-8 flex items-center justify-between w-full px-1 transition-all duration-500 delay-200 {session.hasStarted ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none hidden'}">
    <!-- Status Badge -->
    <div class="flex items-center gap-2 px-3 lg:px-4 py-1.5 lg:py-2 rounded-full bg-white/5 border border-white/10">
      <div class="w-2 h-2 rounded-full {pill.dot} {pill.pulse ? 'animate-pulse' : ''}"></div>
      <span class="text-sm font-medium {pill.text}">{pill.label}</span>
    </div>

    <!-- Minimalist 2D / 3D Segmented Switch -->
    <div class="flex items-center p-0.5 rounded-full bg-zinc-900/80 border border-white/10 shadow-inner">
      <button
        onclick={() => { viewMode = '2d'; localStorage.setItem(ORB_MODE_KEY, '2d'); }}
        class="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium transition-all duration-200 {viewMode === '2d' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-[0_0_8px_rgba(103,232,249,0.3)]' : 'text-zinc-500 hover:text-zinc-300'}"
      >
        2D
      </button>
      <button
        onclick={() => { viewMode = '3d'; localStorage.setItem(ORB_MODE_KEY, '3d'); }}
        class="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium transition-all duration-200 {viewMode === '3d' ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-[0_0_8px_rgba(103,232,249,0.3)]' : 'text-zinc-500 hover:text-zinc-300'}"
      >
        3D
      </button>
    </div>
  </div>

  <!-- Orb Container (2D CSS Orb vs 3D Spectro Particle Field) -->
  <div class="relative mb-1 lg:mb-8 flex items-center justify-center min-h-[220px]">
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
