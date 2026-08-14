<!--
  StreamingText.svelte — token-by-token reveal for streaming text.

  Design goals (mobile 60/120fps, no layout thrash):
  1. DIFF-ONLY ANIMATION: only the newly-appended tokens animate. Already
     rendered bytes stay perfectly still (the "diff" mode FlowToken
     popularized; what keeps ChatGPT/Claude calm instead of jittery).
  2. BOUNDED WINDOW / SETTLE PRUNE: tokens collapse into a single static
     <span> after animating, so DOM stays tiny on long replies and the GPU
     never animates a long tail at once — the key mobile win over naive
     per-word-span libraries.
  3. COMPOSITOR-ONLY PROPERTIES: opacity + transform + short blur() only.
  4. IS-STREAMING TOGGLE: When isStreaming flips to false, all tokens immediately
     settle to static with ZERO DOM teardown/re-render.
-->
<script lang="ts">
  import { tokensFromSlice } from './token-diff';

  let {
    text = '',
    speed = 320,
    stagger = 18,
    window = 24,
    anim = 'jv-word-glow',
    caret = true,
    isStreaming = true,
  }: {
    text?: string;
    speed?: number;
    stagger?: number;
    window?: number;
    anim?: 'jv-word-in' | 'jv-word-glow' | string;
    caret?: boolean;
    isStreaming?: boolean;
  } = $props();

  type Token = { text: string; id: number };
  let idCounter = { value: 0 };

  let shownChars = $state(0);
  let settledChars = $state(0);
  let liveTokens = $state<Token[]>([]);

  const staticText = $derived(
    !isStreaming ? text : text.slice(0, settledChars)
  );

  $effect(() => {
    if (!isStreaming) {
      liveTokens = [];
      settledChars = text.length;
      shownChars = text.length;
      return;
    }

    // Text shrank or fully replaced (interim re-transcript): reset the whole buffer
    if (shownChars > text.length) {
      shownChars = 0;
      settledChars = 0;
      liveTokens = [];
    }

    const newSlice = text.slice(shownChars);
    if (!newSlice) return;

    const pushed = tokensFromSlice(newSlice, idCounter);
    if (pushed.length === 0) return;

    liveTokens = [...liveTokens, ...pushed];
    shownChars += newSlice.length;

    // Settle: fold oldest live tokens into static run
    while (liveTokens.length > window) {
      settledChars += liveTokens[0].text.length;
      liveTokens = liveTokens.slice(1);
    }
  });
</script>

<span class="jv-wrap" aria-live="polite" aria-atomic="false">
  {#if staticText}
    <span class="jv-static">{staticText}</span>
  {/if}
  {#if isStreaming}
    {#each liveTokens as tk, idx (tk.id)}
      <span
        class="jv-token"
        class:jv-word-in={anim === 'jv-word-in'}
        class:jv-word-glow={anim === 'jv-word-glow'}
        style="animation-name:{anim}; animation-duration:{speed}ms; animation-delay:{idx * stagger}ms; animation-timing-function:ease-out; animation-iteration-count:1; animation-fill-mode:both;"
        >{tk.text}</span
      >
    {/each}
    {#if caret}
      <span class="jv-caret" aria-hidden="true">▍</span>
    {/if}
  {/if}
</span>

<style>
  .jv-wrap {
    display: inline;
    white-space: pre-wrap;
    word-break: break-word;
  }
  .jv-caret {
    display: inline-block;
    margin-left: 1px;
    opacity: 0.8;
    color: currentColor;
    animation: jv-caret 1.1s infinite step-start;
  }
</style>