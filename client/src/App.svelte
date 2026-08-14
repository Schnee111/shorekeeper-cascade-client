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

  // Pure Web Animations API (FLIP Pattern) for Single-Source Title Transition
  let hasMounted = false;

  $effect(() => {
    const titleEl = document.getElementById('main-brand-title');
    if (!titleEl) return;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const rect = titleEl.getBoundingClientRect();

    // Center coordinates
    const elementCenterX = rect.left + rect.width / 2;
    const elementCenterY = rect.top + rect.height / 2;
    const targetCenterX = viewportWidth / 2;
    const targetCenterY = viewportHeight * 0.16; // 16% from top

    const deltaX = targetCenterX - elementCenterX;
    const deltaY = targetCenterY - elementCenterY;
    const centerTransform = `translate(${deltaX}px, ${deltaY}px) scale(1.65)`;

    titleEl.style.transformOrigin = 'center center';

    if (!session.hasStarted) {
      if (!hasMounted) {
        // Initial Page Load: Set transform directly without animation to avoid initial load flicker
        hasMounted = true;
        titleEl.style.transform = centerTransform;
      } else {
        // Disconnect Session: Smooth Web Animation back to Screen Center (synced easing with orb transition)
        const currentTransform = titleEl.style.transform || 'translate(0px, 0px) scale(1)';
        titleEl.animate([
          { transform: currentTransform },
          { transform: centerTransform }
        ], {
          duration: 1050,
          easing: 'cubic-bezier(0.25, 1, 0.4, 1)',
          fill: 'forwards'
        });
        titleEl.style.transform = centerTransform;
      }
      titleEl.style.textAlign = 'center';
    } else {
      // ACTIVE WORKSPACE STATE: Smooth Web Animation back to Header Left (0, 0)
      hasMounted = true;
      const currentTransform = titleEl.style.transform || centerTransform;
      titleEl.animate([
        { transform: currentTransform },
        { transform: 'translate(0px, 0px) scale(1)' }
      ], {
        duration: 1050,
        easing: 'cubic-bezier(0.25, 1, 0.4, 1)',
        fill: 'forwards'
      });
      titleEl.style.transform = 'translate(0px, 0px) scale(1)';
      titleEl.style.textAlign = 'left';
    }
  });
</script>

<main class="h-screen h-[100dvh] w-full relative overflow-hidden flex flex-col">
  <!-- Background -->
  <div class="bg-mesh"></div>
  <div class="noise-overlay"></div>

  <AppHeader />

  <!-- Main Workspace Layout: Fixed layout frame so flex height NEVER changes -->
  <div class="relative z-10 flex-1 min-h-0 flex flex-col lg:flex-row items-stretch gap-3 lg:gap-6 px-4 lg:px-6 pb-4 lg:pb-6 overflow-hidden">

    <!-- Left Column: Fixed Orb Anchor Frame -->
    <div class="flex flex-col items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] {session.hasStarted ? 'lg:w-[380px] shrink-0' : 'flex-1'}">
      <OrbPanel />
    </div>

    <!-- Right Column: Conversation Chat & System Logs -->
    {#if session.hasStarted}
      <div class="flex-1 min-h-0 flex flex-col gap-3 lg:gap-6 min-w-0 transition-all duration-1000 delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] fade-in-up">
        <Conversation />
        <StatusLog />
      </div>
    {/if}
  </div>
</main>
