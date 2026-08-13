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

/**
 * Clean one piece of voice-oriented text. Pure, synchronous, idempotent-ish.
 * Preserves line breaks; collapses other whitespace.
 */
export function cleanVoiceText(input: string): string {
  if (!input) return '';
  let s = input;

  // 1. Fix mojibake first (before any stripping touches the sequences).
  for (const [re, rep] of MOJIBAKE_MAP) s = s.replace(re, rep);

  // 2. Code fences → placeholder; inline code keeps its text.
  s = s.replace(CODE_FENCE_RE, ' [potongan kode] ');
  s = s.replace(INLINE_CODE_RE, '$1');

  // 3. Markdown links → text.
  s = s.replace(MD_LINK_RE, '$1');

  // 4. URLs / emails → spoken words.
  s = s.replace(URL_RE, 'link');
  s = s.replace(EMAIL_RE, 'alamat email');

  // 5. Line-level markdown: headings, bullets, quotes, hr, table pipes.
  s = s.replace(HR_RE, '');
  s = s.replace(HEADING_RE, '');
  s = s.replace(BULLET_RE, '');
  s = s.replace(QUOTE_RE, '');
  s = s.replace(TABLE_PIPE_RE, ' ');

  // 6. Emphasis leftovers.
  s = s.replace(EMPHASIS_RE, '');

  // 7. Emoji, zero-width, control chars (keep \n).
  s = s.replace(EMOJI_RE, '');
  s = s.replace(ZERO_WIDTH_RE, '');
  s = s.replace(CONTROL_RE, '');

  // 8. Normalize punctuation.
  s = s.replace(REPEAT_PUNCT_RE, '$1');

  // 9. Whitespace: newlines → space (voice text is read linearly by TTS),
  // collapse runs, trim. Newlines must become SPACES, not vanish, or
  // consecutive sentences run together: "Schnee.Semua sistem".
  s = s.replace(/\n/g, ' ').replace(/[ \t]{2,}/g, ' ').trim();

  return s;
}
