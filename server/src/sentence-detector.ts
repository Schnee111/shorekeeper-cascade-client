/**
 * sentence-detector.ts — Split streaming text into sentence chunks for TTS.
 *
 * Strategy: simple state machine. Accumulate characters until we hit
 * a sentence-ending punctuation (. ! ? …) followed by a space and a capital
 * letter (or end of text). Handles common edge cases:
 * - Abbreviations like "Dr.", "Mr.", "Mrs." (1-3 chars before dot)
 * - Decimal numbers like "3.14"
 * - Ellipsis "..."
 * - Mixed Indonesian/English text
 */

const SENTENCE_END = new Set([".", "!", "?", "…"]);
const ABBREVIATIONS = new Set([
  "dr", "mr", "mrs", "ms", "sr", "jr", "st", "vs", "etc",
  "no", "nos", "vol", "fig", "ref", "op", "inc", "ltd", "corp",
]);

function isUpper(c: string): boolean {
  return c >= "A" && c <= "Z" || c.charCodeAt(0) >= 0xC0 && c.charCodeAt(0) <= 0x24F;
}

function isSentenceStart(c: string): boolean {
  return isUpper(c) || isDigit(c);
}

function isDigit(c: string): boolean {
  return c >= "0" && c <= "9";
}

/**
 * Split complete text into sentences. Used for non-streaming or flush.
 */
export function splitSentences(text: string): string[] {
  if (!text.trim()) return [];

  const results: string[] = [];
  let buf = "";

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    buf += ch;

    if (ch === "." && i + 2 < text.length && text[i + 1] === "." && text[i + 2] === ".") {
      // Ellipsis — skip the next two dots
      buf += "..";
      i += 2;
      continue;
    }

    if (!SENTENCE_END.has(ch)) continue;

    // Don't split on decimal: digit.digit
    if (ch === "." && i > 0 && isDigit(text[i - 1]) && i + 1 < text.length && isDigit(text[i + 1])) {
      continue;
    }

    // Check for abbreviation: word before dot is 1-3 chars and in abbreviation list
    if (ch === ".") {
      const wordEnd = buf.length - 1; // position of dot in buf
      let wordStart = wordEnd - 1;
      while (wordStart >= 0 && buf[wordStart] !== " " && buf[wordStart] !== "\n") wordStart--;
      const word = buf.slice(wordStart + 1, wordEnd).toLowerCase();
      if (word.length <= 3 && ABBREVIATIONS.has(word)) {
        continue; // likely abbreviation, don't split
      }
    }

    // Look ahead: is this followed by space + uppercase? (or end of text)
    const rest = text.slice(i + 1);
    const trimmed = rest.trimStart();
    if (trimmed.length === 0) {
      // End of text — emit
      results.push(buf.trim());
      buf = "";
      continue;
    }
    if (trimmed.length > 0 && isSentenceStart(trimmed[0])) {
      // Next real char is uppercase or digit — split here
      results.push(buf.trim());
      buf = "";
      // Skip leading whitespace in remaining text
      const wsLen = rest.length - trimmed.length;
      i += wsLen; // consume the whitespace
    }
    // else: lowercase follows — not a sentence boundary (e.g., "Dr. schnee")
  }

  if (buf.trim()) results.push(buf.trim());
  return results;
}

/**
 * Accumulator for streaming text → sentence chunks.
 *
 * Feed tokens one at a time. Returns complete sentences as they form.
 * Call flush() at the end to emit remaining buffered text.
 */
export function createSentenceAccumulator() {
  let buffer = "";

  return {
    /** Feed text chunk. Returns complete sentences ready for TTS. */
    feed(text: string): string[] {
      buffer += text;
      const results: string[] = [];

      // Find the last safe split point in the buffer
      // A safe split: sentence-end char + at least one space + uppercase letter after
      let splitAt = -1;
      for (let i = buffer.length - 1; i >= 1; i--) {
        const ch = buffer[i];
        if (ch !== " " && ch !== "\n") continue;

        // Look back for sentence-end punctuation
        const prev = buffer[i - 1];
        if (!SENTENCE_END.has(prev)) continue;

        // Decimal check
        if (prev === "." && i >= 2 && isDigit(buffer[i - 2]) && i + 1 < buffer.length && isDigit(buffer[i + 1])) {
          continue;
        }

        // Abbreviation check
        if (prev === ".") {
          let ws = i - 2;
          while (ws >= 0 && buffer[ws] !== " " && buffer[ws] !== "\n") ws--;
          const word = buffer.slice(ws + 1, i - 1).toLowerCase();
          if (word.length <= 3 && ABBREVIATIONS.has(word)) continue;
        }

        // Look ahead for uppercase
        let j = i;
        while (j < buffer.length && (buffer[j] === " " || buffer[j] === "\n")) j++;
        if (j < buffer.length && isSentenceStart(buffer[j])) {
          splitAt = j;
          break;
        }
      }

      if (splitAt > 0) {
        const ready = buffer.slice(0, splitAt).trim();
        if (ready) results.push(...splitSentences(ready));
        buffer = buffer.slice(splitAt);
      }

      return results;
    },

    /** Flush remaining buffer as final sentence(s). */
    flush(): string[] {
      const remaining = buffer.trim();
      buffer = "";
      if (!remaining) return [];
      return splitSentences(remaining);
    },

    peek(): string {
      return buffer;
    },
  };
}
