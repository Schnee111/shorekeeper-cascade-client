<!--
  StreamingMarkdown.svelte — markdown-aware streaming text reveal.

  Problem: a naive `{@html marked.parse(text)}` re-parses & re-renders the
  ENTIRE bubble on every LiveKit chunk — CPU-heavy and it nukes animations.

  Approach (mirrors flowtoken-svelte / svelte-streamdown):
  1. Parse with `marked`'s Lexer into block tokens ONCE per update.
  2. Walk the block tree; emit structural elements (<h1>, <p>, <ul>...) that
     flow naturally as syntax completes.
  3. Leaf inline runs are rendered through <StreamingText>, which diffs and
     only animates the NEW bytes — so already-settled words never re-animate.
  4. Hide a trailing INCOMPLETE markdown construct (e.g. `**Hel`, an open
     backtick, or an unfinished code fence) so it never flashes as literal
     punctuation on screen.

  IMPORTANT mobile note: streaming selection ("**bold**") typically spans
  token boundaries. We BLOCK on a partially-open emphasis (don't render the
  opener until its closer arrives) to avoid the "literal ** flash" artifact.

  Usage:
    <StreamingMarkdown text={liveBubble.text} />
  For SEALED / finished history bubbles prefer the existing <MarkdownText>
  (no animation, lighter) — wire them next to each other in Conversation.
-->
<script lang="ts">
  import { marked, Lexer, type Tokens, type Token } from 'marked';
  import StreamingText from './StreamingText.svelte';

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

  // Trim an unclosed trailing markdown construct so it never shows literally.
  function hidePartial(input: string): string {
    if (!input) return '';
    // Inline emphasis / code opener not yet closed.
    const openers = /\*\*|__|\*|_|`/g;
    let count = 0;
    let last = -1;
    let m: RegExpExecArray | null;
    while ((m = openers.exec(input)) !== null) {
      count++;
      last = m.index;
    }
    // If an odd number of emphasis/code marks, hide from the last opener.
    if (count % 2 === 1 && last !== -1) {
      return input.slice(0, last);
    }
    return input;
  }

  const tokens = $derived.by(() => {
    const safe = hidePartial(text);
    const lexer = new Lexer({ gfm: true, breaks: true } as any);
    return lexer.lex(safe) as Token[];
  });

  function isInlineToken(t: Token): t is Tokens.Text | Tokens.Em | Tokens.Strong | Tokens.Link | Tokens.Codespan {
    return (
      t.type === 'text' ||
      t.type === 'em' ||
      t.type === 'strong' ||
      t.type === 'link' ||
      t.type === 'codespan'
    );
  }
</script>

{#snippet inlineTokens(toks: Token[])}
  {#each toks as t}
    {#if t.type === 'text' && 'tokens' in t && t.tokens && Array.isArray(t.tokens)}
      {@render inlineTokens(t.tokens)}
    {:else if t.type === 'text'}
      <StreamingText text={t.text} {speed} {stagger} {window} {anim} caret={false} />
    {:else if t.type === 'strong'}
      <strong>{#if 'tokens' in t && t.tokens}{@render inlineTokens(t.tokens)}{:else}<StreamingText text={t.text} {anim} caret={false} />{/if}</strong>
    {:else if t.type === 'em'}
      <em>{#if 'tokens' in t && t.tokens}{@render inlineTokens(t.tokens)}{:else}<StreamingText text={t.text} {anim} caret={false} />{/if}</em>
    {:else if t.type === 'codespan'}
      <code><StreamingText text={t.text} {anim} caret={false} /></code>
    {:else if t.type === 'link'}
      <a href={t.href} target="_blank" rel="noopener noreferrer">{#if 'tokens' in t && t.tokens}{@render inlineTokens(t.tokens)}{:else}<StreamingText text={t.text} {anim} caret={false} />{/if}</a>
    {:else if t.type === 'br'}
      <br />
    {:else if t.type === 'text'}
      <StreamingText text={t.text} {anim} caret={false} />
    {/if}
  {/each}
{/snippet}

{#snippet blocks(toks: Token[])}
  {#each toks as t}
    {#if t.type === 'paragraph'}
      <p class="jv-stream-p">{@render inlineTokens(t.tokens ?? [])}</p>
    {:else if t.type === 'heading'}
      <!-- assign heading element by depth -->
      {#if t.depth === 1}<h1>{@render inlineTokens(t.tokens ?? [])}</h1>
      {:else if t.depth === 2}<h2>{@render inlineTokens(t.tokens ?? [])}</h2>
      {:else if t.depth === 3}<h3>{@render inlineTokens(t.tokens ?? [])}</h3>
      {:else}<strong class="jv-h">{@render inlineTokens(t.tokens ?? [])}</strong>{/if}
    {:else if t.type === 'list'}
      {#if t.ordered}
        <ol>{#each t.items as item}<li>{@render blocks(item.tokens ?? [])}</li>{/each}</ol>
      {:else}
        <ul>{#each t.items as item}<li>{@render blocks(item.tokens ?? [])}</li>{/each}</ul>
      {/if}
    {:else if t.type === 'blockquote'}
      <blockquote>{@render blocks(t.tokens ?? [])}</blockquote>
    {:else if t.type === 'code'}
      <pre><code>{t.text}</code></pre>
    {:else if t.type === 'space'}
      <!-- keep -->
    {:else if t.type === 'br'}
      <br />
    {/if}
  {/each}
{/snippet}

<div class="jv-stream-md">
  {@render blocks(tokens)}
  {#if caret}<span class="jv-caret" aria-hidden="true">▍</span>{/if}
</div>

<style>
  .jv-stream-md {
    display: block;
    line-height: 1.6;
  }
  .jv-stream-md > p { margin: 0 0 0.5em; }
  .jv-stream-md ul, .jv-stream-md ol { padding-left: 1.25rem; margin: 0.25rem 0; }
  .jv-stream-md pre { background: rgba(24,24,27,.8); border: 1px solid rgba(255,255,255,.1); padding: .5rem .6rem; border-radius: .5rem; overflow-x: auto; }
  .jv-stream-md code { font-family: monospace; background: rgba(255,255,255,.08); padding: .1rem .3rem; border-radius: .25rem; color: #67e8f9; }
  .jv-stream-md pre code { background: transparent; padding: 0; color: #e4e4e7; }
  .jv-caret {
    display: inline-block;
    margin-left: 2px;
    opacity: 0.8;
    animation: jv-caret 1.1s infinite step-start;
  }
</style>