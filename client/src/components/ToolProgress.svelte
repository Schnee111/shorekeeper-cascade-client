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

  const expanded = $derived(tools.expanded.has(groupKey));
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
      {running.length > 0
        ? running.at(-1)?.label + '…'
        : 'Used ' + rows.length + (rows.length > 1 ? ' tools' : ' tool')}
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
          <span class="text-zinc-400">{call.label}</span>
          <span class="text-zinc-600">({call.name})</span>
          <span class="text-zinc-700 ml-auto">{call.time}</span>
        </div>
      {/each}
    </div>
  {/if}
</div>
