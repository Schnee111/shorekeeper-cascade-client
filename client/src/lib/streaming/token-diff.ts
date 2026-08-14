/**
 * token-diff.ts — streaming token diffing for animated text reveal.
 *
 * Purpose:
 *   When text arrives incrementally (LiveKit transcription / LLM stream),
 *   we must NOT re-animate already-rendered tokens on every chunk. We only
 *   want the NEWLY appended tokens to animate. This module answers:
 *   "given the previous full string and the next full string, which slice is
 *   genuinely new?"
 *
 * Why not just `next.slice(prev.length)`?
 *   LiveKit agents sometimes REPLACE a live segment's text (interim -> final
 *   re-transcript, or a corrected word) rather than pure-append. Blind
 *   slicing would drop or mis-stagger content. We detect the longest common
 *   prefix and treat everything after it as "new".
 */

export type TokenText = {
  /** The token content — a word or a run of whitespace. Transformed by
   *  markdown-aware renderers *before* tokenization. */
  text: string;
  /** Stable identity for Svelte {#each} keys — must never collide across
   *  resets. Monotonically increasing inside one component instance. */
  id: number;
};

/** Longest common prefix length of two strings (code-point safe enough here). */
export function commonPrefixLen(a: string, b: string): number {
  const n = Math.min(a.length, b.length);
  let i = 0;
  while (i < n && a.charCodeAt(i) === b.charCodeAt(i)) i++;
  return i;
}

/**
 * Split a string into whitespace-preserving tokens suitable for wrapping
 * each in an inline-block span. Keeps: words, punctuation, and the runs of
 * whitespace BETWEEN them (so line wrapping & spacing stay byte-accurate).
 *
 *   "  Hello, world\n" -> ["  ", "Hello,", " ", "world", "\n"]
 */
export function splitWhitespacePreserving(input: string): string[] {
  // Capturing group keeps the separator. Filter empties.
  // eslint-disable-next-line no-control-regex
  return input.split(/(\s+)/).filter((t) => t.length > 0);
}

/**
 * Compute which part of `next` is new relative to `prev`.
 * Returns the (possibly empty) NEWSLICE of `next` that should animate.
 * Handles both pure-append and mid-string replacement:
 *   - append:           prev="Hello," next="Hello, world" -> " world"
 *   - replace one word: prev="Hi bob"   next="Hi alice"    -> "alice"
 *   - full reset:       prev="abc"      next="xyz"         -> "xyz"
 */
export function diffNewSlice(prev: string, next: string): string {
  if (!next) return '';
  if (next.startsWith(prev)) {
    // Fast path — the overwhelmingly common streaming case.
    return next.slice(prev.length);
  }
  // Slow path — shared prefix replacement. Keep the animated tail.
  const k = commonPrefixLen(prev, next);
  return next.slice(k);
}

/**
 * Turn a raw new-slice into a list of stable token objects (words +
 * whitespace), assigning sequential ids from an externally-owned counter.
 */
export function tokensFromSlice(
  slice: string,
  idCounter: { value: number }
): TokenText[] {
  return splitWhitespacePreserving(slice).map((text) => ({
    text,
    id: idCounter.value++,
  }));
}