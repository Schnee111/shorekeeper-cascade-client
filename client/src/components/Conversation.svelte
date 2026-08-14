<!--
  Conversation.svelte — sealed history + live turn rendering with
  smart scroll (allows manual scroll up, shows quick bottom button, locks to bottom when user is at bottom).
-->
<script lang="ts">
  import { fade } from 'svelte/transition';
  import MarkdownText from './MarkdownText.svelte';
  import SmoothMarkdown from './SmoothMarkdown.svelte';
  import ToolProgress from './ToolProgress.svelte';
  import { conversation } from '../lib/stores/conversation.svelte';
  import { session } from '../lib/stores/session.svelte';
  import { tools } from '../lib/stores/tools.svelte';

  let conversationEl: HTMLDivElement | undefined = $state();
  let userScrolledUp = $state(false);

  function handleScroll() {
    const el = conversationEl;
    if (!el) return;
    // Check if user is scrolled up (more than 40px away from bottom)
    const distanceToBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
    userScrolledUp = distanceToBottom > 40;
  }

  function scrollToBottom() {
    const el = conversationEl;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
    userScrolledUp = false;
  }

  // Auto-scroll ONLY if user hasn't manually scrolled up
  $effect(() => {
    conversation.messages.length; // dependency
    conversation.liveAgentText;   // dependency
    tools.calls.length;           // dependency
    const el = conversationEl;
    if (!el || userScrolledUp) return;
    requestAnimationFrame(() => {
      el.scrollTop = el.scrollHeight;
    });
  });
</script>

<div class="relative flex-1 min-h-0 lg:min-h-[300px] glass-card p-4 lg:p-6 flex flex-col overflow-hidden">
  <div class="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
    <h3 class="text-sm font-medium text-zinc-300 flex items-center gap-2">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="text-zinc-500">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
      Conversation
    </h3>
    <span class="text-xs text-zinc-600 font-mono">{conversation.messages.length} messages</span>
  </div>

  <div 
    bind:this={conversationEl} 
    onscroll={handleScroll}
    class="flex-1 overflow-y-auto custom-scrollbar -mr-2 pr-2 pt-1"
  >
    <!-- Placeholder only when there is truly nothing to show. -->
    {#if conversation.messages.length === 0 && !conversation.liveAgentText && tools.calls.length === 0}
      <div class="h-full flex items-center justify-center">
        <p class="text-zinc-600 text-sm text-center">
          {session.mode === 'off'
            ? 'Start a session to begin conversation'
            : 'Your conversation will appear here...'}
        </p>
      </div>
    {:else}
      {#each conversation.messages as msg, i (msg.id)}
        {@const sameGroup = i > 0 && msg.group !== undefined && conversation.messages[i - 1].group === msg.group}
        {@const isLastInGroup = msg.role === 'assistant' && (i === conversation.messages.length - 1 || conversation.messages[i + 1]?.group !== msg.group)}
        
        {#if msg.role === 'user'}
          <div class="{sameGroup ? 'mt-3' : 'mt-6'} flex justify-end w-full">
            <div class="max-w-[80%] message-user rounded-2xl px-3 py-2 lg:px-4 lg:py-3">
              <MarkdownText text={msg.text} />
              {#if msg.time}
                <span class="block text-[10px] text-zinc-400/70 font-mono text-right mt-1.5">{msg.time}</span>
              {/if}
            </div>
          </div>
        {:else}
          <!-- Agent replies: Tool calls ALWAYS stay anchored ABOVE the reply text (ChatGPT/Claude/Gemini) -->
          {@const isStreaming = msg.status === 'streaming'}
          {@const activeTools = isStreaming ? (tools.calls.length ? tools.calls : msg.tools) : msg.tools}
          
          {#if activeTools?.length}
            <div class="{sameGroup ? 'mt-3' : 'mt-6'} flex justify-start w-full">
              <ToolProgress rows={activeTools} groupKey={msg.group ?? (isStreaming ? 'live' : i)} />
            </div>
          {/if}

          <div class="{sameGroup ? 'mt-2' : (activeTools?.length ? 'mt-3' : (i === 0 ? 'mt-1' : 'mt-6'))} flex justify-start w-full">
            <div class="max-w-[85%] w-full">
              <SmoothMarkdown text={msg.text} isStreaming={msg.status === 'streaming'} />
              {#if isLastInGroup && msg.time && msg.status !== 'streaming'}
                <span in:fade={{ duration: 250 }} class="block text-[10px] text-zinc-500 font-mono mt-1">
                  {msg.time}
                </span>
              {/if}
            </div>
          </div>
        {/if}
      {/each}
    {/if}

    <!-- Live tools when user just asked something but assistant msg is not yet created -->
    {#if tools.calls.length > 0 && (!conversation.messages.length || conversation.messages[conversation.messages.length - 1].role !== 'assistant')}
      <div class="{conversation.messages.length > 0 ? 'mt-6' : 'mt-1'} flex justify-start w-full">
        <ToolProgress rows={tools.calls} groupKey="live" />
      </div>
    {/if}

    <!-- Turn progress: Pure Thinking indicator during LLM latency (hidden when a tool card is already visible) -->
    {#if conversation.turnInProgress && !tools.active}
      <div class="mt-2 flex justify-start w-full">
        <div class="max-w-[85%]">
          <div class="flex items-center gap-1.5 text-zinc-500 py-0.5">
            <div class="flex gap-0.5">
              <div class="w-1 h-1 rounded-full bg-cyan-400/80 animate-pulse"></div>
              <div class="w-1 h-1 rounded-full bg-cyan-400/80 animate-pulse" style="animation-delay: 300ms"></div>
              <div class="w-1 h-1 rounded-full bg-cyan-400/80 animate-pulse" style="animation-delay: 600ms"></div>
            </div>
            <span class="text-[10px] font-mono tracking-wide opacity-70">
              thinking
              {#if conversation.turnElapsedSeconds > 2}
                <span class="opacity-50">· {conversation.turnElapsedSeconds}s</span>
              {/if}
            </span>
          </div>
        </div>
      </div>
    {/if}
  </div>

  <!-- Quick scroll to bottom floating button (Ultra-minimalist borderless pill) -->
  {#if userScrolledUp}
    <button
      onclick={scrollToBottom}
      class="absolute bottom-4 right-4 z-30 w-8 h-8 rounded-full bg-zinc-900/90 border border-white/10 text-cyan-400 shadow-lg backdrop-blur-md hover:bg-zinc-800/90 hover:scale-105 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
      title="Scroll to bottom"
      aria-label="Scroll to bottom"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 5v14M19 12l-7 7-7-7"/>
      </svg>
    </button>
  {/if}
</div>
