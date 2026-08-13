<!--
  Conversation.svelte — sealed history + live turn rendering with
  auto-scroll-to-newest. ChatGPT-style: user bubbles right, agent replies
  clean text (no bubble), permanent tool-progress rows per turn.
-->
<script lang="ts">
  import ToolProgress from './ToolProgress.svelte';
  import { conversation } from '../lib/stores/conversation.svelte';
  import { session } from '../lib/stores/session.svelte';
  import { tools } from '../lib/stores/tools.svelte';

  let conversationEl: HTMLDivElement | undefined = $state();

  // Auto-scroll to the newest content: sealed history, the live agent text
  // growing, or tool rows appearing.
  $effect(() => {
    conversation.messages.length; // dependency
    conversation.liveAgentText;   // dependency
    tools.calls.length; // dependency — progress rows scroll into view
    const el = conversationEl;
    if (!el) return;
    // Defer to the next frame so the DOM reflects the new content first.
    requestAnimationFrame(() => {
      el.scrollTop = el.scrollHeight;
    });
  });
</script>

<div class="flex-1 min-h-0 lg:min-h-[300px] glass-card p-4 lg:p-6 flex flex-col">
  <div class="flex items-center justify-between mb-4 pb-4 border-b border-white/5">
    <h3 class="text-sm font-medium text-zinc-300 flex items-center gap-2">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="text-zinc-500">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
      Conversation
    </h3>
    <span class="text-xs text-zinc-600 font-mono">{conversation.messages.length} messages</span>
  </div>

  <div bind:this={conversationEl} class="flex-1 overflow-y-auto custom-scrollbar pr-2 pt-1">
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
      {#each conversation.messages as msg, i}
        {@const sameGroup = i > 0 && msg.group !== undefined && conversation.messages[i - 1].group === msg.group}
        <!-- History tool-progress rows (PERMANENT — Gemini/Claude style).
             Attached to the first assistant segment of the turn. -->
        {#if msg.tools?.length}
          <div class="{sameGroup ? 'mt-1.5' : 'mt-5'} flex justify-start">
            <ToolProgress rows={msg.tools} groupKey={msg.group ?? i} />
          </div>
        {/if}
        {#if msg.role === 'user'}
          <div class="{sameGroup ? 'mt-1.5' : 'mt-5'} flex justify-end">
            <div class="max-w-[80%] message-user rounded-2xl px-3 py-2 lg:px-4 lg:py-3">
              <p class="text-xs lg:text-sm text-zinc-200 leading-relaxed message-text">{msg.text}</p>
            </div>
          </div>
        {:else}
          <!-- Agent replies: CLEAN text, no bubble (ChatGPT style).
               Consecutive segments of the same turn (opening sentence +
               final result) stay separate paragraphs with a small gap. -->
          <div class="{sameGroup ? 'mt-1.5' : (msg.tools?.length ? 'mt-1.5' : 'mt-5')} flex justify-start">
            <p class="max-w-[85%] text-xs lg:text-sm text-zinc-200 leading-relaxed message-text">{msg.text}</p>
          </div>
        {/if}
      {/each}
    {/if}
    <!-- Live turn: PERMANENT tool rows (spinner while running, check when
         done) + clean reply text. -->
    {#if tools.calls.length > 0}
      <div class="{conversation.messages.length > 0 || conversation.liveAgentText ? 'mt-1.5' : 'mt-1'} flex justify-start">
        <ToolProgress rows={tools.calls} groupKey="live" />
      </div>
    {/if}
    {#each conversation.liveAgentBubbles as bubble, bi}
      <div class="{bi === 0 && tools.calls.length === 0 && conversation.messages.length === 0 ? 'mt-1' : 'mt-1.5'} flex justify-start">
        <p class="max-w-[85%] text-xs lg:text-sm text-zinc-200 leading-relaxed message-text">{bubble.text}{#if conversation.agentSpeaking && bi === conversation.liveAgentBubbles.length - 1 && !bubble.final}<span class="inline-block w-1.5 h-4 bg-violet-400/80 ml-1 animate-pulse align-middle"></span>{/if}</p>
      </div>
    {/each}
  </div>
</div>
