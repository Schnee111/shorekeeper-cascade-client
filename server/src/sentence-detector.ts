/**
 * sentence-detector.ts — Sentence-level chunking for natural TTS
 * 
 * Strategy: Split on sentence boundaries (.!?) with smart handling of:
 * - Abbreviations (Dr., Mr., etc.)
 * - Short sentences (merge with previous if <20 chars)
 * - Long sentences (split at natural breaks if >200 chars)
 * 
 * Goal: Natural prosody with complete thoughts per chunk
 */

const MIN_CHUNK_LENGTH = 20;
const MAX_CHUNK_LENGTH = 200;

// Common abbreviations that shouldn't split sentences
const ABBREVIATIONS = new Set([
  'dr', 'mr', 'mrs', 'ms', 'prof', 'sr', 'jr', 'vs', 'etc', 'inc', 'ltd',
  'corp', 'co', 'dept', 'ave', 'blvd', 'st', 'rd', 'jan', 'feb', 'mar',
  'apr', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec', 'fig', 'eq',
  'ref', 'vol', 'no', 'approx', 'appt', 'dept', 'est', 'min', 'max'
]);

/**
 * Check if a period is part of an abbreviation
 */
function isAbbreviation(text: string, index: number): boolean {
  // Find the word before this period
  let start = index - 1;
  while (start >= 0 && /[a-zA-Z]/.test(text[start])) {
    start--;
  }
  start++;
  
  const word = text.slice(start, index).toLowerCase();
  return ABBREVIATIONS.has(word);
}

/**
 * Split text into sentences with smart boundaries
 */
export function splitSentences(text: string): string[] {
  if (!text.trim()) return [];
  
  // Split on sentence boundaries while keeping punctuation
  const rawSentences: string[] = [];
  let current = '';
  
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    current += char;
    
    // Check for sentence ending
    if (char === '.' || char === '!' || char === '?') {
      // Check if this is an abbreviation (for periods)
      if (char === '.' && isAbbreviation(text, i)) {
        continue;
      }
      
      // Check if next char is space or end of string (avoid splitting decimals like 3.14)
      const nextChar = text[i + 1];
      if (nextChar && nextChar !== ' ' && nextChar !== '\n' && nextChar !== '\t') {
        // Might be decimal or abbreviation, check if next char is digit
        if (/\d/.test(nextChar) && char === '.') {
          continue;
        }
      }
      
      // This is a sentence boundary
      const trimmed = current.trim();
      if (trimmed) {
        rawSentences.push(trimmed);
      }
      current = '';
    }
  }
  
  // Don't forget the last part if no sentence ending
  if (current.trim()) {
    rawSentences.push(current.trim());
  }
  
  // Now apply min/max length rules
  const chunks: string[] = [];
  
  for (const sentence of rawSentences) {
    // If sentence is too short, merge with previous
    if (sentence.length < MIN_CHUNK_LENGTH && chunks.length > 0) {
      chunks[chunks.length - 1] += ' ' + sentence;
    }
    // If sentence is too long, split at natural breaks
    else if (sentence.length > MAX_CHUNK_LENGTH) {
      const parts = splitLongSentence(sentence);
      chunks.push(...parts);
    }
    // Normal sentence
    else {
      chunks.push(sentence);
    }
  }
  
  return chunks;
}

/**
 * Split a long sentence at natural breaks (commas, conjunctions)
 */
function splitLongSentence(sentence: string): string[] {
  // Try to split at commas first
  const parts = sentence.split(/,\s*/);
  const chunks: string[] = [];
  let current = '';
  
  for (const part of parts) {
    const withComma = current ? current + ', ' + part : part;
    
    if (withComma.length > MAX_CHUNK_LENGTH) {
      // Current is full, start new chunk
      if (current) {
        chunks.push(current + ',');
        current = part;
      } else {
        // Even the first part is too long, split at conjunctions
        const subParts = splitAtConjunctions(part);
        chunks.push(...subParts);
      }
    } else {
      current = withComma;
    }
  }
  
  if (current) {
    chunks.push(current);
  }
  
  return chunks;
}

/**
 * Split at conjunctions (and, or, but, etc.)
 */
function splitAtConjunctions(text: string): string[] {
  const conjunctions = [' and ', ' or ', ' but ', ' so ', ' karena ', ' tapi ', ' dan ', ' atau '];
  const chunks: string[] = [];
  let remaining = text;
  
  for (const conj of conjunctions) {
    const index = remaining.indexOf(conj);
    if (index !== -1 && index > 0) {
      chunks.push(remaining.slice(0, index + conj.length).trim());
      remaining = remaining.slice(index + conj.length);
    }
  }
  
  if (remaining) {
    chunks.push(remaining.trim());
  }
  
  return chunks;
}

/**
 * Streaming sentence detector - buffers text and yields complete sentences
 */
export class SentenceDetector {
  private buffer: string = '';
  private lastProcessedIndex: number = 0;
  
  constructor() {
    this.buffer = '';
    this.lastProcessedIndex = 0;
  }
  
  /**
   * Add text to buffer and return any complete sentences
   */
  addText(text: string): string[] {
    this.buffer += text;
    const sentences = splitSentences(this.buffer);
    
    // If we have complete sentences, return them and update buffer
    if (sentences.length > 0) {
      // Keep incomplete part in buffer
      const completeText = sentences.join(' ');
      this.buffer = this.buffer.slice(completeText.length).trim();
      return sentences;
    }
    
    return [];
  }
  
  /**
   * Flush any remaining text in buffer as final sentence
   */
  flush(): string | null {
    if (this.buffer.trim()) {
      const result = this.buffer.trim();
      this.buffer = '';
      return result;
    }
    return null;
  }
  
  /**
 * Reset the detector
 */
reset(): void {
  this.buffer = '';
  this.lastProcessedIndex = 0;
}
}

/**
 * Detect language from text (simple heuristic)
 */
export function detectLanguage(text: string): 'id' | 'en' {
  // Indonesian keywords
  const idKeywords = ['aku', 'saya', 'kamu', 'anda', 'ini', 'itu', 'yang', 'di', 'ke', 'dari', 'untuk', 'dengan', 'dan', 'atau', 'tapi', 'karena', 'jika', 'kalau', 'bisa', 'sudah', 'belum', 'tidak', 'jangan', 'mau', 'ingin'];
  const words = text.toLowerCase().split(/\s+/);
  const idCount = words.filter(w => idKeywords.includes(w)).length;
  
  return idCount > words.length * 0.1 ? 'id' : 'en';
}
