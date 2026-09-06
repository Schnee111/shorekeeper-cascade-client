<script lang="ts">
  import { marked } from 'marked';

  let { text = '' }: { text: string } = $props();

  // Configure marked for clean inline/block markdown
  marked.setOptions({
    gfm: true,
    breaks: true
  });

  const parsedHtml = $derived(text ? (marked.parse(text) as string) : '');
</script>

<div class="markdown-content text-xs text-zinc-200 leading-relaxed">
  {@html parsedHtml}
</div>

<style>
  :global(.markdown-content p) {
    margin: 0 0 0.35rem 0;
  }
  :global(.markdown-content p:last-child) {
    margin-bottom: 0;
  }
  :global(.markdown-content ul) {
    list-style-type: disc;
    padding-left: 1.25rem;
    margin: 0.35rem 0;
  }
  :global(.markdown-content ol) {
    list-style-type: decimal;
    padding-left: 1.25rem;
    margin: 0.35rem 0;
  }
  :global(.markdown-content li) {
    margin: 0.2rem 0;
    display: list-item;
  }
  :global(.markdown-content li::marker) {
    color: #22d3ee;
  }
  :global(.markdown-content strong) {
    color: #ffffff;
    font-weight: 600;
  }
  :global(.markdown-content code) {
    font-family: monospace;
    background: rgba(255, 255, 255, 0.08);
    padding: 0.1rem 0.3rem;
    border-radius: 0.25rem;
    color: #67e8f9;
  }
</style>