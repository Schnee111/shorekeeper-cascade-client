<!--
  CaptionBar.svelte — ONE fixed-height, borderless caption line shared by
  the agent subtitle and the user transcript (grid-stacked). The box is
  always reserved so captions appearing/disappearing never resize the card.
  When both exist (rare), the user transcript paints on top.
-->
<script lang="ts">
  import { fade } from 'svelte/transition';
  import { conversation } from '../lib/stores/conversation.svelte';
  import { session } from '../lib/stores/session.svelte';
  import StreamingText from '../lib/streaming/StreamingText.svelte';
</script>

<div class="mt-3 lg:mt-6 w-full h-[36px] lg:h-[44px] grid">
  {#if conversation.subtitle && session.status !== 'idle' && session.status !== 'error'}
    <div 
      transition:fade={{ duration: 400 }}
      class="[grid-area:1/1] w-full h-full flex items-center justify-center overflow-hidden"
    >
      <div class="text-xs text-zinc-300 message-text leading-snug caption-clamp text-center">
        <StreamingText text={conversation.subtitle} anim="jv-word-glow" caret={false} speed={250} />
      </div>
    </div>
  {/if}
  {#if conversation.transcript && (session.status === 'listening' || session.status === 'processing')}
    <div 
      transition:fade={{ duration: 300 }}
      class="[grid-area:1/1] w-full h-full flex items-center justify-center overflow-hidden"
    >
      <p class="text-xs text-zinc-400 message-text leading-snug caption-clamp text-center">
        {conversation.transcript}
      </p>
    </div>
  {/if}
</div>
