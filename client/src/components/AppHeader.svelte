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

<header class="relative z-30 px-4 sm:px-6 py-4 lg:py-6 flex items-center justify-between min-h-[64px]">
  <!-- Left: Brand Title (Always anchored in header, smoothly transforms from screen center) -->
  <div class="relative flex items-center gap-4 min-w-[140px]">
    <div class="transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform origin-top-left {session.hasStarted ? 'translate-x-0 translate-y-0 scale-100' : 'translate-x-[calc(50vw-50%-1rem)] sm:translate-x-[calc(50vw-50%-1.5rem)] translate-y-[8vh] sm:translate-y-[10vh] scale-135 sm:scale-150'}">
      <div class="{session.hasStarted ? 'text-left' : 'text-center'}">
        <h1 class="font-semibold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-violet-200 text-base sm:text-lg lg:text-xl whitespace-nowrap">Shorekeeper</h1>
        <p class="text-zinc-400/90 font-mono tracking-widest text-[10px] sm:text-xs">JARVIS v2.0</p>
      </div>
    </div>
  </div>

  <!-- Center: Model Menu Pill (Fades in on start) -->
  <div class="absolute left-1/2 -translate-x-1/2 flex items-center justify-center transition-all duration-500 delay-150 {session.hasStarted ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-90 pointer-events-none'}">
    <ModelMenu
      options={session.modelOptions}
      selected={session.selectedModel}
      currentLabel={session.currentModelLabel}
      disabled={session.voiceSwitching}
      onPick={(id) => session.pickModel(id)}
    />
  </div>

  <!-- Right: Voice Menu Pill + Status Indicators (Fades in on start) -->
  <div class="flex items-center gap-2 sm:gap-3 min-w-[140px] justify-end transition-all duration-500 delay-150 {session.hasStarted ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-90 pointer-events-none'}">
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
