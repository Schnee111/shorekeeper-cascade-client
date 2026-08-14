<!--
  SmoothMarkdown.svelte — RAF-driven smooth text reveal with full markdown support.
  
  Design highlights:
  1. RAF Interpolator: Smoothly reveals incoming text words at ~45ms per word,
     matching natural speaking cadence without jarring chunk leaps.
  2. Full Markdown Parsing: Output is parsed via marked for perfect bullet lists,
     paragraphs, bolding, and code snippets.
  3. Subtle Spectro Glow: Active streaming text carries a subtle starlight shimmer
     that gently settles once completed.
  4. Ultra-light DOM: Single HTML render tree (60-120fps smooth scrolling).
-->
<script lang="ts">
  import { marked } from 'marked';
  import { onDestroy } from 'svelte';

  let { 
    text = '', 
    isStreaming = false 
  }: { 
    text: string; 
    isStreaming?: boolean 
  } = $props();

  marked.setOptions({
    gfm: true,
    breaks: true,
  });

  let displayedChars = $state(0);
  let animationFrameId: number | null = null;
  let lastFrameTime = 0;

  // Words/chars pacing configuration:
  // Target: ~25-35ms per character progression during streaming
  const CHARS_PER_MS = 0.04; 

  $effect(() => {
    if (!isStreaming) {
      // If turn is finished, instantly display the full settled text
      displayedChars = text.length;
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
      return;
    }

    // Text shrank / reset
    if (displayedChars > text.length) {
      displayedChars = 0;
    }

    const animate = (time: number) => {
      if (!lastFrameTime) lastFrameTime = time;
      const delta = time - lastFrameTime;
      lastFrameTime = time;

      if (displayedChars < text.length) {
        // Step forward characters smoothly
        const step = Math.max(1, Math.floor(delta * CHARS_PER_MS));
        displayedChars = Math.min(text.length, displayedChars + step);
        animationFrameId = requestAnimationFrame(animate);
      } else {
        animationFrameId = null;
        lastFrameTime = 0;
      }
    };

    if (displayedChars < text.length && animationFrameId === null) {
      lastFrameTime = performance.now();
      animationFrameId = requestAnimationFrame(animate);
    }
  });

  onDestroy(() => {
    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId);
    }
  });

  const visibleText = $derived(
    isStreaming ? text.slice(0, displayedChars) : text
  );

  const parsedHtml = $derived(
    visibleText ? (marked.parse(visibleText) as string) : ''
  );
</script>

<div 
  class="markdown-content text-xs text-zinc-200 leading-relaxed {isStreaming ? 'spectro-streaming' : ''}"
>
  {@html parsedHtml}
</div>

<style>
  :global(.markdown-content p) {
    margin: 0 0 0.35rem 0;
  }
  :global(.markdown-content p:last-child) {
    margin-bottom: 0;
  }
  :global(.markdown-content ul), :global(.markdown-content ol) {
    padding-left: 1.1rem;
    margin: 0.25rem 0;
  }
  :global(.markdown-content li) {
    margin: 0.12rem 0;
  }
  :global(.markdown-content strong) {
    color: #f4f4f5;
    font-weight: 600;
  }
  :global(.markdown-content code) {
    font-family: monospace;
    background: rgba(255, 255, 255, 0.08);
    padding: 0.1rem 0.3rem;
    border-radius: 0.25rem;
    color: #67e8f9;
  }

  /* Subtle Spectro starlight shimmer while streaming */
  .spectro-streaming {
    text-shadow: 0 0 12px rgba(103, 232, 249, 0.12);
  }
</style>