/**
 * voice-text.ts — Lapis 4 cleaner (plan ui-integration.md).
 *
 * cleanVoiceText(): subset of the server-side sentence cleaner, applied
 * client-side to subtitles and conversation-panel text as a safety net.
 * Strips markdown, emoji, raw URLs/emails, control chars; normalizes
 * mojibake and repeated punctuation. Preserves line breaks.
 */

/** Fenced code blocks ``` ... ``` → "[potongan kode]". */
const CODE_FENCE_RE = /```[\s\S]*?```/g;
/** Inline code `...` → keep inner text (backticks removed later). */
const INLINE_CODE_RE = /`([^`\n]*)`/g;
/** Markdown links [text](url) → text. */
const MD_LINK_RE = /\[([^\]]*)\]\([^)]*\)/g;
/** Raw URLs → "link". */
const URL_RE = /\b(?:https?:\/\/|www\.)[^\s<>"']+/gi;
/** Emails → "alamat email". */
const EMAIL_RE = /\b[\w.+-]+@[\w-]+\.[\w.-]+\b/g;
/** Heading markers at line start: ### → nothing. */
const HEADING_RE = /^\s{0,3}#{1,6}\s+/gm;
/** Bullet/list prefixes at line start: - , * , + , 1. */
const BULLET_RE = /^\s{0,3}(?:[-*+]|\d{1,3}[.)])\s+/gm;
/** Blockquote markers. */
const QUOTE_RE = /^\s{0,3}>\s?/gm;
/** Table/heading separators: | and runs of -/= used as rules. */
const TABLE_PIPE_RE = /\|/g;
const HR_RE = /^\s{0,3}(?:-{3,}|={3,}|\*{3,}|_{3,})\s*$/gm;
/** Emphasis/backtick/tilde leftovers. */
const EMPHASIS_RE = /[*_~]/g;
/** Mojibake from double-encoded UTF-8. */
const MOJIBAKE_MAP: Array<[RegExp, string]> = [
  [/â€”/g, '-'],
  [/â€“/g, '-'],
  [/â€œ/g, '"'],
  [/â€˜/g, "'"],
  [/â€™/g, "'"],
  [/â€¦/g, '...'],
  [/Ã©/g, 'é'],
  [/Ã¨/g, 'è'],
  [/Ã /g, 'à'],
  [/â€/g, '"'], // bare prefix catch-all — must stay last
];
/** Emojis / pictographs / symbols (all common ranges incl. flags, ZWJ bases). */
const EMOJI_RE =
  /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{2190}-\u{21FF}\u{2300}-\u{23FF}\u{25A0}-\u{25FF}\u{FE00}-\u{FE0F}\u{200D}\u{1F1E6}-\u{1F1FF}\u{2764}\u{270C}\u{270B}]/gu;
/** Zero-width chars + BOM. */
const ZERO_WIDTH_RE = /[\u200B-\u200F\u2060\uFEFF\u00AD]/g;
/** Control chars except \n. */
const CONTROL_RE = /[\u0000-\u0008\u000B-\u001F\u007F]/g;
/** Repeated punctuation: !!! → !, ??? → ?, ... stays (ellipsis is speech-ok). */
const REPEAT_PUNCT_RE = /([!?])\1+/g;
/** Fish Audio bracket prosody cues — e.g. [soft], [warm], [laugh],
 * [long-break]. They shape the TTS delivery but must never appear in
 * subtitles/history. Lowercase letters/spaces/hyphens only and at least
 * two chars, so numeric citations like [1] or [3] survive. */
const BRACKET_CUE_RE = /\[[a-z][a-z -]{1,30}\]/g;
/** Capitalized short delivery cues ([Warm], [Soft smile]) — same contract as
 * the lowercase cues, the LLM sometimes capitalizes them. Must contain at
 * least one lowercase letter so all-caps acronyms like [API] or [USA] survive. */
const BRACKET_CUE_CAP_RE = /\[[A-Z][A-Za-z -]*[a-z][A-Za-z -]*\]/g;
/** Hermes gateway steering scaffolds — internal machinery written into the
 * conversation when a live turn gets redirected/interrupted mid-flight. The
 * server bridge filters them, but a stray one must never paint in the chat
 * (2026-08-14: observed "[This response was interrupted by a user
 * correction.] leaking into the UI). Drop the whole bracketed sentence. */
const SCAFFOLD_RE =
  /\[?(?:This response was interrupted by a user correction|Visible response before the interruption|Context from the interrupted assistant response)[^\]\n]*\]?\.?/gi;

/**
 * Clean one piece of voice-oriented text. Pure, synchronous, idempotent-ish.
 * Preserves line breaks; collapses other whitespace.
 */
export function cleanVoiceText(input: string): string {
  if (!input) return '';
  let s = input;

  // 1. Fix mojibake first (before any stripping touches the sequences).
  for (const [re, rep] of MOJIBAKE_MAP) s = s.replace(re, rep);

  // 1a. Em/en dashes → comma. Fish S2.1 Pro reads them with no pause, so the
  // audio uses a comma; mirror it in the display so text matches speech.
  // Absorb surrounding spaces so "you — what" becomes "you, what".
  s = s.replace(/\s*[\u2014\u2013]\s*/g, ', ');

  // 1b. Strip Fish Audio prosody cues ([soft], [warm]...) and Hermes
  // steering scaffolds BEFORE markdown processing — the greeting uses cues
  // for delivery variety and they must not reach subtitles/history. Runs
  // before the code-fence placeholder so "[potongan kode]" inserted in
  // step 2 survives.
  s = s.replace(SCAFFOLD_RE, '');
  s = s.replace(BRACKET_CUE_RE, '');
  s = s.replace(BRACKET_CUE_CAP_RE, '');

  // 2. Code fences → placeholder; inline code keeps its text.
  s = s.replace(CODE_FENCE_RE, ' [potongan kode] ');
  s = s.replace(INLINE_CODE_RE, '$1');

  // 3. Markdown links → text.
  s = s.replace(MD_LINK_RE, '$1');

  // 4. URLs / emails → spoken words.
  s = s.replace(URL_RE, 'link');
  s = s.replace(EMAIL_RE, 'alamat email');

  // 5. Line-level markdown: headings, bullets, quotes, hr, table pipes.
  // Note: We PRESERVE bullets (- / * / 1.) and newlines so list markdown renders properly in UI!
  s = s.replace(HR_RE, '');
  s = s.replace(HEADING_RE, '');
  s = s.replace(QUOTE_RE, '');

  // 6. Emphasis leftovers (keep * and _ for bold/italic in MarkdownText).
  
  // 7. Emoji, zero-width, control chars (keep \n).
  s = s.replace(EMOJI_RE, '');
  s = s.replace(ZERO_WIDTH_RE, '');
  s = s.replace(CONTROL_RE, '');

  // 8. Normalize punctuation.
  s = s.replace(REPEAT_PUNCT_RE, '$1');

  // 9. Trim excess horizontal whitespace, preserve linebreaks.
  s = s.replace(/[ \t]{2,}/g, ' ').trim();

  return s;
}
