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

<div class="markdown-content text-xs text-zinc-200 leading-relaxed space-y-2">
  {@html parsedHtml}
</div>

<style>
  :global(.markdown-content p) {
    margin-bottom: 0.5rem;
  }
  :global(.markdown-content p:last-child) {
    margin-bottom: 0;
  }
  :global(.markdown-content strong) {
    font-weight: 600;
    color: #e4e4e7;
  }
  :global(.markdown-content em) {
    font-style: italic;
    color: #cbd5e1;
  }
  :global(.markdown-content ul) {
    list-style-type: disc;
    padding-left: 1.25rem;
    margin-top: 0.25rem;
    margin-bottom: 0.5rem;
  }
  :global(.markdown-content ol) {
    list-style-type: decimal;
    padding-left: 1.25rem;
    margin-top: 0.25rem;
    margin-bottom: 0.5rem;
  }
  :global(.markdown-content li) {
    margin-bottom: 0.125rem;
  }
  :global(.markdown-content code) {
    font-family: monospace;
    background-color: rgba(255, 255, 255, 0.08);
    padding: 0.125rem 0.375rem;
    border-radius: 0.25rem;
    font-size: 0.85em;
    color: #67e8f9;
  }
  :global(.markdown-content pre) {
    background-color: rgba(24, 24, 27, 0.8);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 0.75rem;
    border-radius: 0.5rem;
    overflow-x: auto;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  :global(.markdown-content pre code) {
    background: transparent;
    padding: 0;
    color: #e4e4e7;
  }
</style>
