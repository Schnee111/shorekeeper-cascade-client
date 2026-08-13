/**
 * Unit tests for cleanVoiceText (voice-text.ts).
 * Run: npm run test  (bundles via esbuild → node --test)
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import { cleanVoiceText } from '../src/lib/voice-text.ts';

test('strips markdown headings and bullets', () => {
  const input = '## Langkah\n- pertama buka file\n* kedua edit\n1. ketiga simpan';
  const out = cleanVoiceText(input);
  assert.ok(!out.includes('#'));
  assert.ok(!out.includes('- pertama'));
  assert.match(out, /Langkah/);
  assert.match(out, /pertama buka file/);
  assert.match(out, /ketiga simpan/);
});

test('strips markdown table pipes', () => {
  const input = '| Nama | Nilai |\n|------|-------|\n| Budi | 90 |\n';
  const out = cleanVoiceText(input);
  assert.ok(!out.includes('|'));
  assert.match(out, /Budi/);
  assert.match(out, /90/);
});

test('replaces code fences with placeholder, keeps inline code text', () => {
  const input = 'Begini:\n```python\nprint("hi")\n```\nlalu `npm run build` selesai.';
  const out = cleanVoiceText(input);
  assert.ok(!out.includes('```'));
  assert.match(out, /\[potongan kode\]/);
  assert.match(out, /npm run build/);
  assert.ok(!out.includes('print("hi")'));
});

test('removes all emoji incl. ZWJ sequences and flags', () => {
  const input = 'Halo! 👋 Aku JARVIS 🤖 siap membantu 🇮🇩 🧑‍💻 ✅';
  const out = cleanVoiceText(input);
  assert.equal(out, 'Halo! Aku JARVIS siap membantu');
});

test('replaces raw URL with "link"', () => {
  const input = 'Cek https://docs.livekit.io/agents/build/turns ya.';
  const out = cleanVoiceText(input);
  assert.ok(!out.includes('https://'));
  assert.match(out, /link/);
});

test('replaces email with "alamat email"', () => {
  const input = 'Kirim ke schnee@example.com sekarang.';
  const out = cleanVoiceText(input);
  assert.ok(!out.includes('@'));
  assert.match(out, /alamat email/);
});

test('strips zero-width chars and BOM', () => {
  const input = '\uFEFFHalo\u200B dunia\u200D!';
  const out = cleanVoiceText(input);
  assert.equal(out, 'Halo dunia!');
});

test('fixes mojibake', () => {
  const input = 'hasilnya bagus â€” cepat â€œokeâ€';
  const out = cleanVoiceText(input);
  assert.match(out, /bagus - cepat/);
  assert.ok(!out.includes('â€'));
});

test('normalizes repeated punctuation', () => {
  const input = 'Wah!!! Serius?? Baik!!!';
  const out = cleanVoiceText(input);
  assert.match(out, /Wah! Serius\? Baik!/);
});

test('newlines become spaces (voice text reads linearly)', () => {
  const input = 'Baris satu.\n\n\n\nBaris dua.';
  const out = cleanVoiceText(input);
  assert.equal(out, 'Baris satu. Baris dua.');
});

test('strips control chars except newline', () => {
  const input = 'A\u0000B\u0007C\nD';
  const out = cleanVoiceText(input);
  assert.equal(out, 'ABC D');
});

test('plain conversational text passes through unchanged', () => {
  const input = 'Halo, aku JARVIS. Ada yang bisa dibantu?';
  assert.equal(cleanVoiceText(input), input);
});

test('empty and whitespace-only input', () => {
  assert.equal(cleanVoiceText(''), '');
  assert.equal(cleanVoiceText('   \n\t  '), '');
});

test('emphasis markers stripped without losing words', () => {
  const input = 'Ini **penting** dan _catatan_ serta ~~coret~~.';
  const out = cleanVoiceText(input);
  assert.match(out, /Ini penting dan catatan serta coret\./);
  assert.ok(!out.includes('*'));
  assert.ok(!out.includes('~'));
});

test('long URL broken safely, word "link" once', () => {
  const input = 'Referensi: ' + 'https://example.com/' + 'a'.repeat(200);
  const out = cleanVoiceText(input);
  assert.match(out, /^Referensi: link$/);
});

test('strips Fish Audio bracket prosody cues from greeting', () => {
  const input = '[warm][soft] Hey, Schnee. Good to hear you — what are we getting into?';
  const out = cleanVoiceText(input);
  assert.equal(out, 'Hey, Schnee. Good to hear you, what are we getting into?');
  assert.ok(!out.includes('['));
  assert.ok(!out.includes('warm'));
  assert.ok(!out.includes('—'), 'em dash must become a comma for TTS pausing');
});

test('bracket cues with spaces/hyphens stripped, text preserved', () => {
  const input = '[long-break] Hi Schnee. [very happy] Great to see you!';
  const out = cleanVoiceText(input);
  assert.equal(out, 'Hi Schnee. Great to see you!');
});

test('numeric citations in brackets are NOT stripped', () => {
  // Cue regex requires lowercase letters, so [1], [12] survive.
  const input = 'Data tercatat di [1] dan [42].';
  const out = cleanVoiceText(input);
  assert.ok(out.includes('[1]'), `expected [1] preserved, got: ${out}`);
  assert.ok(out.includes('[42]'), `expected [42] preserved, got: ${out}`);
});
