<!--
  VoiceMenu.svelte — glass dropdown for switching the agent's Fish Audio voice.
  Switching mid-session reconnects the room (handled by session.pickVoice).
-->
<script lang="ts">
  import type { VoiceOption } from '../lib/types';

  let {
    options,
    selected,
    currentLabel,
    switching,
    onPick,
  }: {
    options: VoiceOption[];
    selected: string;
    currentLabel: string;
    switching: boolean;
    onPick: (id: string) => void;
  } = $props();

  let open = $state(false);
  let menuEl: HTMLElement | undefined = $state();

  // Close the dropdown on outside click / Escape.
  $effect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (menuEl && !menuEl.contains(e.target as Node)) open = false;
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') open = false;
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  });

  function pick(id: string) {
    open = false;
    onPick(id);
  }
</script>

<div class="relative" bind:this={menuEl}>
  <button
    type="button"
    class="voice-btn {open ? 'open' : ''}"
    disabled={switching}
    onclick={() => (open = !open)}
    aria-haspopup="listbox"
    aria-expanded={open}
  >
    {#if switching}
      <span class="voice-spinner" aria-hidden="true"></span>
      <span class="text-xs lg:text-sm text-amber-300/90">Switching…</span>
    {:else}
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-cyan-300/80 shrink-0" aria-hidden="true">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
        <path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/>
      </svg>
      <span class="text-xs lg:text-sm text-zinc-200 font-medium">{currentLabel}</span>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-500 transition-transform duration-200 {open ? 'rotate-180' : ''}" aria-hidden="true">
        <polyline points="6 9 12 15 18 9"/>
      </svg>
    {/if}
  </button>

  {#if open}
    <div class="voice-menu" role="listbox">
      {#each options as voice}
        <button
          type="button"
          role="option"
          aria-selected={voice.id === selected}
          class="voice-option {voice.id === selected ? 'active' : ''}"
          onclick={() => pick(voice.id)}
        >
          <span class="flex items-center gap-2 min-w-0">
            <span class="text-xs lg:text-sm text-zinc-100 font-medium">{voice.label}</span>
            {#if voice.desc}
              <span class="text-[10px] text-zinc-500 font-mono truncate">{voice.desc}</span>
            {/if}
          </span>
          {#if voice.id === selected}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-cyan-300 shrink-0" aria-hidden="true">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          {/if}
        </button>
      {/each}
    </div>
  {/if}
</div>
