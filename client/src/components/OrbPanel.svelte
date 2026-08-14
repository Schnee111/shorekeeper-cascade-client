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

  // Shared Motion Coordinator ($t in [0, 1] spring lerp)
  const initialProgress = (localStorage.getItem(ORB_MODE_KEY) as '2d' | '3d') === '3d' ? 1 : 0;
  let targetProgress = $state(initialProgress);
  let currentProgress = $state(initialProgress);
  let velocity = 0;
  let animId: number | null = null;

  function updateSpring() {
    // Spring physics configuration (stiffness & damping for elastic bouncy feel)
    const stiffness = 0.15;
    const damping = 0.72;

    const force = (targetProgress - currentProgress) * stiffness;
    velocity = (velocity + force) * damping;
    currentProgress += velocity;

    if (Math.abs(targetProgress - currentProgress) > 0.0005 || Math.abs(velocity) > 0.0005) {
      animId = requestAnimationFrame(updateSpring);
    } else {
      currentProgress = targetProgress;
      velocity = 0;
      animId = null;
    }
  }

  function toggleViewMode() {
    viewMode = viewMode === '2d' ? '3d' : '2d';
    localStorage.setItem(ORB_MODE_KEY, viewMode);
    targetProgress = viewMode === '3d' ? 1 : 0;
    if (!animId) {
      animId = requestAnimationFrame(updateSpring);
    }
  }

  // Derived inline CSS transforms based on currentProgress (0 = 2D pure, 1 = 3D pure)
  // 2D Scale: 1.0 (active) <-> 0.70 (inactive shrink)
  // 3D Scale: 0.70 (inactive shrink) <-> 1.0 (active bloom)
  let scale2d = $derived((1 - currentProgress * 0.30).toFixed(4));
  let opacity2d = $derived(Math.max(0, Math.min(1, 1 - currentProgress * 1.6)).toFixed(4));

  let scale3d = $derived((0.70 + currentProgress * 0.30).toFixed(4));
  let opacity3d = $derived(Math.max(0, Math.min(1, currentProgress * 1.6 - 0.3)).toFixed(4));

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
  <div class="mt-6 sm:mt-8 mb-2 lg:mb-6 flex items-center justify-center w-full px-1 transition-all duration-500 delay-200 {session.hasStarted ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none hidden'}">
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
    <div class="relative flex items-center justify-center w-full h-full">
      <!-- 2D Orb Layer -->
      <div 
        class="absolute inset-0 flex items-center justify-center will-change-transform {currentProgress < 0.5 ? 'pointer-events-auto z-10' : 'pointer-events-none z-0'}"
        style="transform: scale({scale2d}); opacity: {opacity2d}; transform-origin: center center;"
      >
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
      </div>

      <!-- 3D Particle Orb Layer -->
      <div 
        class="absolute inset-0 flex items-center justify-center will-change-transform {currentProgress >= 0.5 ? 'pointer-events-auto z-10' : 'pointer-events-none z-0'}"
        style="transform: scale({scale3d}); opacity: {opacity3d}; transform-origin: center center;"
      >
        <ParticleOrb />
      </div>
    </div>
  </div>

  <!-- Minimalist Mode Switcher Dash Indicator (2D vs 3D) -->
  <div class="flex items-center gap-1.5 mt-1 mb-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer" onclick={toggleViewMode} role="button" tabindex="0" onkeydown={(e) => e.key === 'Enter' && toggleViewMode()}>
    <div class="h-1 rounded-full transition-all duration-300 {viewMode === '2d' ? 'w-4 bg-cyan-400 shadow-[0_0_8px_rgba(103,232,249,0.8)]' : 'w-1.5 bg-white/20'}"></div>
    <div class="h-1 rounded-full transition-all duration-300 {viewMode === '3d' ? 'w-4 bg-cyan-400 shadow-[0_0_8px_rgba(103,232,249,0.8)]' : 'w-1.5 bg-white/20'}"></div>
  </div>

  <!-- Hint Text / Clean Connection Log Subtitle -->
  {#if !session.hasStarted && session.mode === 'active'}
    <p class="text-xs font-mono text-cyan-200/80 text-center animate-pulse tracking-wide mt-3 drop-shadow-[0_0_10px_rgba(103,232,249,0.3)] min-h-[20px]">
      {logs.latest?.text || 'Opening secure channel...'}
    </p>
  {:else}
    <p class="text-xs lg:text-sm text-center transition-all duration-700 {session.hasStarted ? 'text-zinc-500 font-normal mt-0' : 'text-cyan-200/90 font-medium tracking-wide mt-3 drop-shadow-[0_0_12px_rgba(103,232,249,0.5)]'}">{hint}</p>
  {/if}

  <CaptionBar />
</div>
