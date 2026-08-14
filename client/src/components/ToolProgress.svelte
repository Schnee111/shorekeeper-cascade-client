<!--
  ToolProgress.svelte — permanent tool-progress block (Gemini/Claude style).
  Collapsed by default: compact header with spinner/✓; click to expand the
  full row list with raw tool names + timestamps.

  `groupKey` scopes the expand state per turn ('live' or a sealed group).
-->
<script lang="ts">
  import { tools } from '../lib/stores/tools.svelte';
  import type { ToolCallInfo } from '../lib/types';

  let { rows, groupKey }: { rows: ToolCallInfo[]; groupKey: number | string } = $props();

  const expanded = $derived(tools.isExpanded(groupKey));
  const running = $derived(rows.filter((r) => !r.done));
  const doneCount = $derived(rows.filter((r) => r.done).length);
</script>

<div class="tool-progress max-w-[90%] rounded-xl">
  <button type="button" class="tool-progress-header" onclick={() => tools.toggleDetail(groupKey)}>
    {#if running.length > 0}
      <span class="tool-chip-spinner"></span>
    {:else}
      <span class="tool-done-dot">✓</span>
    {/if}
    <span class="tool-progress-text">
      {#if running.length > 0}
        {@const last = running.at(-1)}
        {last?.label}{#if last?.detail} <span class="text-zinc-500 font-mono text-[10px]">{last.detail}</span>{/if}…
      {:else}
        Used {rows.length} {rows.length > 1 ? 'tools' : 'tool'}
      {/if}
    </span>
    <span class="tool-progress-count">{doneCount}/{rows.length}</span>
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="tool-progress-chevron {expanded ? 'rotate-180' : ''}">
      <path d="M6 9l6 6 6-6"/>
    </svg>
  </button>
  {#if expanded}
    <div class="tool-progress-detail">
      {#each rows as call}
        <div class="tool-progress-row">
          {#if call.done}
            <span class="text-emerald-400">✓</span>
          {:else}
            <span class="tool-chip-spinner"></span>
          {/if}
          <span class="text-zinc-300 font-medium">{call.label}</span>
          {#if call.detail}
            <span class="text-cyan-400/90 font-mono text-[10px] bg-cyan-950/40 px-1.5 py-0.5 rounded border border-cyan-800/40">{call.detail}</span>
          {:else}
            <span class="text-zinc-500 font-mono text-[10px]">({call.name})</span>
          {/if}
          <span class="text-zinc-600 ml-auto font-mono text-[10px]">{call.time}</span>
        </div>
      {/each}
    </div>
  {/if}
</div>
