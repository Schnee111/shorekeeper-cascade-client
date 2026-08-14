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

  Props:
    text   : full accumulated string (caller appends; we diff internally).
    speed  : ms per token animation (~320)
    stagger: ms between consecutive new tokens (~18)
    window : max tokens kept animating before settling (~24)
    anim   : keyframe ('jv-word-in' | 'jv-word-glow' | custom)
    caret  : show ▍ streaming cursor
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
  }: {
    text?: string;
    speed?: number;
    stagger?: number;
    window?: number;
    anim?: 'jv-word-in' | 'jv-word-glow' | string;
    caret?: boolean;
  } = $props();

  type Token = { text: string; id: number };
  let idCounter = { value: 0 };

  // shownChars = count of chars of `text` already captured into tokens
  // (whether settled-static or still-live-animating).
  let shownChars = $state(0);
  // The first `settledChars` shown chars are collapsed into one static span.
  let settledChars = $state(0);
  let liveTokens = $state<Token[]>([]);

  const staticText = $derived(text.slice(0, settledChars));

  $effect(() => {
    // Text shrank or fully replaced (interim re-transcript): reset the whole
    // buffer so we never render stale bytes under the new stream.
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

    // Settle: fold the oldest live tokens into the static run to cap the
    // count of simultaneously-animating spans at `window`.
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
    animation: jv-caret 1.1s infinite step-start;
  }
</style>