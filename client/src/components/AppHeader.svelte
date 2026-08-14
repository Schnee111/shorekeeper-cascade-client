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

  const lkDot = $derived(
    session.lkState === 'connected' ? 'connected'
    : session.lkState === 'connecting' || session.lkState === 'reconnecting' ? 'pending'
    : 'disconnected'
  );
  const roomDot = $derived(session.mode === 'active' ? 'connected' : session.mode === 'standby' ? 'pending' : 'disconnected');
</script>

<header class="relative z-30 px-4 sm:px-6 py-4 lg:py-6 flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
  <!-- Left / Center: Brand Title (Smoothly slides from dead center to top-left) -->
  <div class="transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] {session.hasStarted ? 'translate-x-0 opacity-100' : 'fixed left-1/2 -translate-x-1/2 top-16 sm:top-20 z-40 text-center pointer-events-none'}">
    <div class="{session.hasStarted ? 'text-left' : 'text-center'}">
      <h1 class="font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-violet-200 transition-all duration-700 {session.hasStarted ? 'text-base lg:text-lg' : 'text-3xl sm:text-4xl lg:text-5xl drop-shadow-[0_0_25px_rgba(103,232,249,0.5)]'}">Shorekeeper</h1>
      <p class="text-zinc-400/90 font-mono tracking-widest transition-all duration-700 {session.hasStarted ? 'text-[10px] lg:text-xs mt-0' : 'text-sm sm:text-base mt-2'}">JARVIS v2.0</p>
    </div>
  </div>

  <!-- Center: Model Menu Pill (Fades in on start) -->
  <div class="absolute left-1/2 -translate-x-1/2 flex items-center justify-center transition-all duration-500 delay-150 {session.hasStarted ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}">
    <ModelMenu
      options={session.modelOptions}
      selected={session.selectedModel}
      currentLabel={session.currentModelLabel}
      disabled={session.voiceSwitching}
      onPick={(id) => session.pickModel(id)}
    />
  </div>

  <!-- Right: Voice Menu Pill + Status Indicators (Fades in on start) -->
  <div class="flex items-center gap-2 sm:gap-3 min-w-[140px] justify-end transition-all duration-500 delay-150 {session.hasStarted ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}">
    <VoiceMenu
      options={session.voiceOptions}
      selected={session.selectedVoice}
      currentLabel={session.currentVoiceLabel}
      switching={session.voiceSwitching}
      onPick={(id) => session.pickVoice(id)}
    />

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
