import { test } from 'node:test';
import assert from 'node:assert';
import { Marked } from 'marked';

function createMarkdownRenderer() {
  const m = new Marked({
    gfm: true,
    breaks: true
  });
  m.use({
    renderer: {
      html(token) {
        const raw = typeof token === 'string' ? token : token.text;
        return raw
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;');
      }
    }
  });
  return m;
}

test('parses basic bold and list markdown', () => {
  const marked = createMarkdownRenderer();
  const input = 'Halo **Schnee**, ini 25 partikel:\n- Item 1\n- Item 2';
  const html = marked.parse(input) as string;
  assert.strictEqual(html.includes('<strong>Schnee</strong>'), true);
  assert.strictEqual(html.includes('25 partikel'), true);
  assert.strictEqual(html.includes('<ul>'), true);
});

test('parses inline code blocks', () => {
  const marked = createMarkdownRenderer();
  const input = 'Jalankan `npm test` sekarang';
  const html = marked.parse(input) as string;
  assert.strictEqual(html.includes('<code>npm test</code>'), true);
});

test('parses markdown lists preceded by colons and numbers correctly', () => {
  const marked = createMarkdownRenderer();
  const input = 'Berikut ringkasannya:\n- Poin 1\n- Poin 2\n\n1. Langkah pertama\n2. Langkah kedua';
  const html = marked.parse(input) as string;
  assert.strictEqual(html.includes('<ul>'), true);
  assert.strictEqual(html.includes('<ol>'), true);
  assert.strictEqual(html.includes('<li>Poin 1</li>'), true);
  assert.strictEqual(html.includes('<li>Langkah pertama</li>'), true);
});

test('escapes raw script tags and event handlers to prevent XSS (issue 18)', () => {
  const marked = createMarkdownRenderer();
  const input = 'Check this out: <script>alert("xss")</script> and <img src="x" onerror="alert(1)"> and `<tag>`';
  const html = marked.parse(input) as string;

  assert.strictEqual(html.includes('<script>'), false);
  assert.strictEqual(html.includes('</script>'), false);
  assert.strictEqual(html.includes('<img src='), false);
  assert.strictEqual(html.includes('&lt;script&gt;alert("xss")&lt;/script&gt;'), true);
  assert.strictEqual(html.includes('&lt;img src=&quot;x&quot; onerror=&quot;alert(1)&quot;&gt;'), true);
  assert.strictEqual(html.includes('<code>&lt;tag&gt;</code>'), true);
});

test('preserves markdown links, bold, italic while escaping injected HTML', () => {
  const marked = createMarkdownRenderer();
  const input = '**Bold text** with [link](https://example.com) and *italic* and <a href="javascript:steal()">link</a> & text';
  const html = marked.parse(input) as string;

  assert.strictEqual(html.includes('<strong>Bold text</strong>'), true);
  assert.strictEqual(html.includes('<a href="https://example.com">link</a>'), true);
  assert.strictEqual(html.includes('<em>italic</em>'), true);
  assert.strictEqual(html.includes('&lt;a href=&quot;javascript:steal()&quot;&gt;link&lt;/a&gt;'), true);
  assert.strictEqual(html.includes('&amp; text'), true);
});
