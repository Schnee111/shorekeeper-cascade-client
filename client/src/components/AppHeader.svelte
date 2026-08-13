<!--
  AppHeader.svelte — top bar: brand block, voice selector, status pills.
  z-30 so the voice dropdown (opens downward past the header edge) stacks
  above the z-10 main content.
-->
<script lang="ts">
  import VoiceMenu from './VoiceMenu.svelte';
  import { session } from '../lib/stores/session.svelte';

  const lkDot = $derived(
    session.lkState === 'connected' ? 'connected'
    : session.lkState === 'connecting' || session.lkState === 'reconnecting' ? 'pending'
    : 'disconnected'
  );
  const roomDot = $derived(session.mode === 'active' ? 'connected' : session.mode === 'standby' ? 'pending' : 'disconnected');
</script>

<header class="relative z-30 px-6 py-3 lg:py-5 flex items-center justify-between fade-in-up stagger-1">
  <div class="flex items-center gap-4">
    <div>
      <h1 class="text-base lg:text-lg font-semibold tracking-tight text-white">Shorekeeper</h1>
      <p class="text-[10px] lg:text-xs text-zinc-500 font-mono tracking-wide">JARVIS v2.0</p>
    </div>
  </div>

  <div class="flex items-center gap-4">
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
