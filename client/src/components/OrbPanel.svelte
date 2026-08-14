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

<div class="lg:w-[400px] shrink-0 glass-card p-4 lg:p-8 flex flex-col items-center justify-center overflow-hidden transition-all duration-300 ease-out">

  <!-- Status Label & 2D/3D Mode Toggle -->
  <div class="mb-2 lg:mb-8 flex items-center justify-between w-full px-2">
    <div class="flex items-center gap-2 px-3 lg:px-4 py-1.5 lg:py-2 rounded-full bg-white/5 border border-white/10">
      <div class="w-2 h-2 rounded-full {pill.dot} {pill.pulse ? 'animate-pulse' : ''}"></div>
      <span class="text-sm font-medium {pill.text}">{pill.label}</span>
    </div>

    <!-- 2D / 3D Mode Switcher -->
    <button
      onclick={toggleViewMode}
      class="px-2.5 py-1 rounded-full text-[11px] font-mono transition-all border bg-white/5 border-white/10 text-zinc-400 hover:text-cyan-300 hover:border-cyan-500/30 flex items-center gap-1.5"
      title="Toggle between 2D CSS Orb and 3D Spectro Particle Visualizer"
    >
      <span class="w-1.5 h-1.5 rounded-full {viewMode === '3d' ? 'bg-cyan-400 shadow-[0_0_6px_rgba(103,232,249,0.8)]' : 'bg-zinc-500'}"></span>
      <span>{viewMode.toUpperCase()} Mode</span>
    </button>
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
  <p class="text-xs lg:text-sm text-zinc-500 text-center">{hint}</p>

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
