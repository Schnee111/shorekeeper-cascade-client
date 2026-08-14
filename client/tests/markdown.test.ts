import { test } from 'node:test';
import assert from 'node:assert';
import { marked } from 'marked';

test('parses basic bold and list markdown', () => {
  const input = 'Halo **Schnee**, ini 25 partikel:\n- Item 1\n- Item 2';
  const html = marked.parse(input) as string;
  assert.strictEqual(html.includes('<strong>Schnee</strong>'), true);
  assert.strictEqual(html.includes('25 partikel'), true);
  assert.strictEqual(html.includes('<ul>'), true);
});

test('parses inline code blocks', () => {
  const input = 'Jalankan `npm test` sekarang';
  const html = marked.parse(input) as string;
  assert.strictEqual(html.includes('<code>npm test</code>'), true);
});
