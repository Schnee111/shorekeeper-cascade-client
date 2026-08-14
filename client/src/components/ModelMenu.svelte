<!--
  ModelMenu.svelte — dropdown selector for choosing the LLM model.
-->
<script lang="ts">
  import type { ModelOption } from '../lib/config';

  let {
    options,
    selected,
    currentLabel,
    disabled,
    onPick,
  }: {
    options: ModelOption[];
    selected: string;
    currentLabel: string;
    disabled: boolean;
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
    {disabled}
    onclick={() => (open = !open)}
    aria-haspopup="listbox"
    aria-expanded={open}
  >
    <!-- CPU / Brain Chip Icon for LLM Model -->
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-cyan-300/80 shrink-0" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="2"/>
      <rect x="9" y="9" width="6" height="6"/>
      <path d="M15 2v2M15 20v2M2 15h2M20 15h2M9 2v2M9 20v2M2 9h2M20 9h2"/>
    </svg>
    <span class="text-xs lg:text-sm text-zinc-200 font-medium truncate max-w-[100px] sm:max-w-[160px]">{currentLabel}</span>
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-zinc-500 transition-transform duration-200 {open ? 'rotate-180' : ''}" aria-hidden="true">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  </button>

  {#if open}
    <div 
      class="absolute left-1/2 -translate-x-1/2 top-[calc(100%+8px)] z-50 w-64 max-h-80 overflow-y-auto rounded-2xl bg-zinc-950/95 border border-white/10 p-2 shadow-2xl backdrop-blur-3xl"
      role="listbox"
    >
      <div class="px-3 py-1.5 border-b border-white/5 flex items-center justify-between">
        <span class="text-[10px] uppercase font-mono text-cyan-400/90 font-semibold tracking-wider">Select LLM Model</span>
        <span class="text-[10px] text-zinc-500 font-mono">{options.length}</span>
      </div>
      <div class="py-1 flex flex-col gap-0.5">
        {#each options as opt}
          <button
            type="button"
            role="option"
            aria-selected={selected === opt.id}
            class="voice-option {selected === opt.id ? 'active' : ''} p-2 rounded-xl transition-colors duration-150"
            onclick={() => pick(opt.id)}
          >
            <span class="flex flex-col min-w-0 flex-1 text-left">
              <span class="text-xs text-zinc-100 font-medium">{opt.label}</span>
              {#if opt.desc}
                <span class="text-[10px] text-zinc-400/80 font-mono mt-0.5">{opt.desc}</span>
              {/if}
            </span>
            {#if selected === opt.id}
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
