# Streaming Text Reveal — Architecture (Shorekeeper JARVIS)

SOTA techniques for smooth, GPU-friendly, token-by-token text reveal on
mobile web, wired into the existing LiveKit transcription data flow.

## 1. Techniques surveyed (SOTA, mid-2026)

| Technique | Where it shines | Cost | Verdict for JARVIS |
|---|---|---|---|
| **Token-diff streaming** (FlowToken, Vercel AI `useChat`, `svelte-streamdown`) | Only *new* tokens animate; rendered words stay static. This is the calm ChatGPT/Claude look. | One diff per chunk; a span per *live* token | **Core technique** |
| **Per-token CSS entry keyframes** (`opacity` + `translateY` + short `blur()`) with **staggered `animation-delay`** | Apple Intelligence / ChatGPT "blur-fade-in + rise" feel | GPU-compositor cheap | **Core styling** |
| **Bounded settling window** (prune animated tail into one static `<span>`) | Long replies on mobile — DOM/GPU stay tiny, no thrash | ~20 lines | **Our mobile win** |
| **Markdown-aware streaming** (marked `Lexer` → walk blocks; hide unclosed constructs) | Structured replies (`#`, lists, code) stream without flash of literal `**` | Recursive render, more code | Adopt; but JARVIS agent mostly emits plain text — use plain path when possible |
| **Mask-wipe reveal** (`mask-image` + animating `mask-position/size`) | Elegant whole-line wipe | ⚠ CSS can't interpolate gradients between keyframes; must animate position/size, not the gradient | Optional accent, not the word-reveal |
| **View Transitions API** (`::view-transition`) | Cross-bubble swap, full-repaint morph | Browser-wide snapshotting can be heavy | Not needed for per-token |

Existing code today: `Conversation.svelte` renders each live bubble via
`MarkdownText` (`{@html marked.parse(text)}`) — **re-parses + re-renders the
entire bubble on every LiveKit chunk** and never animates. That is the gap.

## 2. Files added (`client/src/lib/streaming/`)

- `keyframes.css` — compositor-friendly entry keyframes (`jv-word-in`,
  `jv-word-glow`, `jv-caret`) + `prefers-reduced-motion` fallback.
- `token-diff.ts` — `diffNewSlice()` (longest-common-prefix diff so both
  appends and interim replacements work) + whitespace-preserving tokenizer.
- `StreamingText.svelte` — the core: diff-only ++ bounded-window settle ++
  per-token staggered entry animation ++ caret. **Plain-text path.**
- `StreamingMarkdown.svelte` — markdown-aware wrapper (marked `Lexer` →
  block walk → leaf text through `StreamingText`; hides unclosed `**/``).
- `README.md` (this file).

> Prototype status: compiles clean under Svelte `5.56.9` runes. Not yet wired
> into `Conversation.svelte` — see §5 before doing so.

## 3. Architecture

```
LiveKit TranscriptionReceived ──> livekit-voice.ts onSegments(segments, fromAgent)
      │
      ▼
conversation.svelte.ts  handleSegments() ── upsert into liveAgentBubbles[]
      │  (each bubble = one growing transcription segment, keyed by seg.id)
      ▼
Conversation.svelte
   ├─ live bubble (streaming):
   │      {#if idx === liveAgentBubbles.length - 1}
   │        <StreamingMarkdown text={bubble.text} />   <- only LAST bubble animates
   │      {:else}
   │        <MarkdownText text={bubble.text} />         <- sealed bubbles, no anim (cheap)
   │      {/if}
   └─ sealed history -> existing <MarkdownText> (no animation, light)
```

`StreamingText` internals (reactive runes):

```
props: text, speed=320ms, stagger=18ms, window=24, anim, caret
 $state: shownChars (chars of `text` already tokenized)
         settledChars (chars collapsed into static <span>)
         liveTokens  (tokens still animating)
 $derived: staticText = text.slice(0, settledChars)

 $effect (on text):
   if (shownChars > text.length)   reset buffer          // interim re-transcript
   newSlice   = text.slice(shownChars)                    // ONLY new bytes
   push tokens(newSlice) into liveTokens; shownChars += len
   while liveTokens.length > window: fold oldest into settledChars
                                                          // cap concurrent anims
 render:
   <span static>{staticText}</span>                       // tiny DOM, no anim
   {#each liveTokens as t (t.id)} <span class="jv-token"
        style="animation: {anim} {speed}ms ease-out {idx*stagger}ms both"/>
   <span class="jv-caret">▍</span>                         // streaming cursor
```

Why this is fast on mobile:
- **Diff-only** → an append of ~3 words creates exactly 3–6 new `<span>`s and
  animates 3–6 `transform`/`filter` layers, far under the compositor budget.
- **Settle prune** → after `window` live tokens, older ones fold into one
  static span. DOM count for a long reply stays ~O(window), not O(words).
- We animate only `opacity`, `transform: translateY`, and a *short, low-radius*
  `filter: blur()`. `filter: blur` is GPU but not free — keep ≤4px and ≤400ms.
- The `#each` is keyed on a monotonic id → Svelte inserts, never re-syncs.

## 4. Mobile 60/120fps checklist

- [x] Animate only compositor properties (`opacity`/`transform`/short blur) — no `top/left/margin/padding`.
- [x] `transform: translateY` (layout-free) instead of `position` offsets.
- [x] Cap simultaneous animated spans (`window`, default 24).
- [x] `white-space: pre` on token spans → byte-accurate spacing, no reflow surprises.
- [x] `prefers-reduced-motion` → all animation off, text appears instantly.
- [x] Keyed `{#each}` — Svelte reuses nodes instead of node-churn.
- [ ] Avoid `will-change` on thousands of elements (leak on iOS Safari) — we only
      set it on the small live-window; remove on `animationend` if you enlarge `window`.
- [ ] Don't blur huge blocks at once — bounded window covers this.
- [ ] In the scroll container use `content-visibility: auto`/`contain` on
      sealed bubbles so off-screen history isn't painted.

## 5. Integration into Conversation.svelte (recommended diff)

```svelte
<script>
  import StreamingMarkdown from '../lib/streaming/StreamingMarkdown.svelte';
  import MarkdownText from './MarkdownText.svelte';
</script>
...
{#each conversation.liveAgentBubbles as bubble, bi}
  <div>
    {#if bi === conversation.liveAgentBubbles.length - 1}
      <StreamingMarkdown text={bubble.text} />
    {:else}
      <MarkdownText text={bubble.text} />
    {/if}
  </div>
{/each}
```

Notes:
- Import `../lib/streaming/keyframes.css` **once** (e.g. in `main.ts`) so the
  `@keyframes` are global.
- The **subtitle/caption bar** (user's interim STT + agent `lastSentence`)
  is a single short line — use `StreamingText` there too if you want the same
  reveal; keep it non-caret or slow so it doesn't distract the glass orb.
- If a segment is `final` and the bubble is being collapsed back into history,
  just render it with `MarkdownText` (existing) — animation is for live only.
- JARVIS agent output is TTS-read plain text (markdown stripped by
  `cleanVoiceText`/`filterForSpeech`). If you never need live markdown,
  prefer `StreamingText` directly over `StreamingMarkdown` (much lighter).

## 6. Reduced-motion & a11y

- `aria-live="polite"` + `aria-atomic="false"` → screen readers announce words
  incrementally, not as one wall of text.
- Reduced-motion CSS kills the blur/transform but keeps text readable.
- Caret is `aria-hidden="true"` (decorative).

## 7. Future niceties

- **Adaptive stagger**: when a chunk bursts in, clamp total stagger so the
  tail doesn't l-g- a-g-e; cap `idx*stagger` at ~120ms.
- **Mask-wipe accent** on the caret line (animate `mask-position`, not the gradient).
- **View Transition** on bubble seal (history snapshot morph) if wanted later.