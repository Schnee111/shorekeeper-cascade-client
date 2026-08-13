<!--
  StatusLog.svelte — bottom-right system log feed (newest first).
-->
<script lang="ts">
  import { STACK_LINE } from '../lib/config';
  import { logs } from '../lib/stores/logs.svelte';

  const color = (type: string): string =>
    type === 'error' ? 'text-rose-400'
    : type === 'warn' ? 'text-amber-400'
    : type === 'success' ? 'text-emerald-400'
    : 'text-zinc-500';
</script>

<div class="glass-card-elevated p-3 lg:p-4 h-[120px] lg:h-[180px] flex flex-col shrink-0">
  <div class="flex items-center justify-between mb-3">
    <h3 class="text-xs font-medium text-zinc-400 flex items-center gap-2">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="text-zinc-600">
        <path d="M4 17l6-6-6-6M12 19h8"/>
      </svg>
      System
    </h3>
    <span class="text-[10px] text-zinc-600 font-mono">{STACK_LINE}</span>
  </div>

  <div class="flex-1 overflow-y-auto custom-scrollbar space-y-1 font-mono text-xs">
    {#each [...logs.entries].reverse() as log}
      <div class="flex items-start gap-2 py-1">
        <span class="text-zinc-700 shrink-0">{log.time}</span>
        <span class="{color(log.type)}">{log.text}</span>
      </div>
    {/each}
  </div>
</div>
