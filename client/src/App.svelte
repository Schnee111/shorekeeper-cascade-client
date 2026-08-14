<!--
  App.svelte — layout shell only. All state lives in lib/stores/, all panels
  in components/, all styling in app.css (design system) + styles/orb.css.

  Architecture (see docs/STATUS.md in jarvis-livekit for the full picture):
    Browser ──WebRTC──▶ LiveKit Cloud ──▶ jarvis-agent (Deepgram → Hermes → Fish TTS)
-->
<script lang="ts">
  import { onMount } from 'svelte';
  import AppHeader from './components/AppHeader.svelte';
  import Conversation from './components/Conversation.svelte';
  import OrbPanel from './components/OrbPanel.svelte';
  import StatusLog from './components/StatusLog.svelte';
  import { logs } from './lib/stores/logs.svelte';
  import { session } from './lib/stores/session.svelte';

  onMount(() => {
    logs.add('info', 'UI ready — LiveKit voice pipeline');
    void session.loadVoices();
  });
</script>

<main class="h-screen h-[100dvh] relative overflow-hidden flex flex-col">
  <!-- Background -->
  <div class="bg-mesh"></div>
  <div class="noise-overlay"></div>

  <AppHeader />

  <!-- Main Content: fills the viewport below the header; internal panels
       scroll so nothing needs page-level scrolling on mobile. -->
  <div class="relative z-10 flex-1 min-h-0 flex flex-col lg:flex-row items-stretch gap-3 lg:gap-6 px-4 lg:px-6 pb-4 lg:pb-6">

    <!-- Left: Orb & Controls -->
    <OrbPanel />

    <!-- Right: Conversation & Logs (Fades & slides in smoothly when session starts) -->
    <div class="flex-1 min-h-0 flex flex-col gap-3 lg:gap-6 min-w-0 transition-all duration-700 delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] {session.hasStarted ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-8 pointer-events-none hidden lg:flex'}">
      <Conversation />
      <StatusLog />
    </div>
  </div>
</main>
