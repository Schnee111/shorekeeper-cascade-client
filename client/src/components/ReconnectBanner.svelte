<!--
  ReconnectBanner.svelte — High-priority HUD banner shown during WebRTC connection interruption.
  Provides countdown feedback and action triggers (Retry Now / End Session).
-->
<script lang="ts">
  import { session } from '../lib/stores/session.svelte';
  import { slide } from 'svelte/transition';
</script>

{#if session.reconnectGraceActive}
  <div
    transition:slide={{ duration: 300 }}
    class="w-full bg-amber-950/70 border-b border-amber-500/30 backdrop-blur-md px-4 py-2.5 z-50 flex items-center justify-between text-xs sm:text-sm shadow-[0_4px_20px_rgba(245,158,11,0.15)]"
    role="alert"
    aria-live="assertive"
  >
    <div class="flex items-center gap-2.5 text-amber-200">
      <!-- Animated WiFi Warning Icon -->
      <span class="relative flex h-2.5 w-2.5">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
      </span>
      <span class="font-medium">
        Connection lost. Reconnecting in <span class="font-mono font-bold text-amber-300">{session.graceCountdown}s</span>...
      </span>
    </div>

    <div class="flex items-center gap-2">
      <button
        type="button"
        onclick={() => session.retryReconnect()}
        class="px-3 py-1 bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-500/40 rounded-lg font-medium transition-colors cursor-pointer"
      >
        Reconnect Now
      </button>
      <button
        type="button"
        onclick={() => session.cancelGraceAndEnd()}
        class="px-3 py-1 bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-zinc-200 rounded-lg transition-colors cursor-pointer"
      >
        End
      </button>
    </div>
  </div>
{/if}
