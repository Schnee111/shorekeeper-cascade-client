<!--
  VoiceMenu.svelte — dropdown selector for choosing the agent's Fish Audio voice.
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
      <!-- Audio Waveform / Sparkle Icon for Voice Selection -->
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-cyan-300/80 shrink-0" aria-hidden="true">
        <path d="M2 10v4M6 6v12M10 3v18M14 8v8M18 5v14M22 10v4"/>
      </svg>
      <span class="text-xs lg:text-sm text-zinc-200 font-medium truncate max-w-[90px] sm:max-w-[140px]">{currentLabel}</span>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-500 transition-transform duration-200 {open ? 'rotate-180' : ''}" aria-hidden="true">
        <polyline points="6 9 12 15 18 9"/>
      </svg>
    {/if}
  </button>

  {#if open}
    <div 
      class="absolute right-0 top-[calc(100%+8px)] z-50 w-56 max-h-80 overflow-y-auto rounded-2xl bg-zinc-950/95 border border-white/10 p-2 shadow-2xl backdrop-blur-3xl"
      role="listbox"
    >
      <div class="px-3 py-1.5 border-b border-white/5 flex items-center justify-between">
        <span class="text-[10px] uppercase font-mono text-cyan-400/90 font-semibold tracking-wider">Select Voice</span>
        <span class="text-[10px] text-zinc-500 font-mono">{options.length}</span>
      </div>
      <div class="py-1 flex flex-col gap-0.5">
        {#each options as voice}
          <button
            type="button"
            role="option"
            aria-selected={voice.id === selected}
            class="voice-option {voice.id === selected ? 'active' : ''} p-2 rounded-xl transition-colors duration-150"
            onclick={() => pick(voice.id)}
          >
            <span class="flex items-center justify-between min-w-0 flex-1 text-left">
              <span class="text-xs text-zinc-100 font-medium">{voice.label}</span>
              {#if voice.desc}
                <span class="text-[10px] text-zinc-400/80 font-mono truncate ml-2">{voice.desc}</span>
              {/if}
            </span>
            {#if voice.id === selected}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-cyan-400 shrink-0 ml-2" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            {/if}
          </button>
        {/each}
      </div>
    </div>
  {/if}
</div>
