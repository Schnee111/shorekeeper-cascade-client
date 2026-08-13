/**
 * stores/tools.svelte.ts — permanent tool-progress tracking (Gemini/Claude style).
 *
 * Rows never disappear: the live turn shows a spinner, and once the turn
 * seals the snapshot stays attached to its history group. Click a block to
 * expand raw tool names + timestamps.
 *
 * Class-based store: Svelte 5 classes give reactive fields + getters, which
 * plain module exports can't provide for reassigned/derived state.
 */
import { getTime, toolLabel } from '../config';
import type { ToolCallInfo } from '../types';

class ToolsStore {
  readonly calls = $state<ToolCallInfo[]>([]);

  /** Expand state per block key ('live' or the sealed group number). */
  readonly expanded = $state(new Set<number | string>());

  /** True while at least one call is still running. */
  get active(): boolean {
    return this.calls.some((c) => !c.done);
  }

  handle(ev: { state: 'start' | 'complete'; name: string }): void {
    if (ev.state === 'start') {
      this.calls.push({ name: ev.name, label: toolLabel(ev.name), time: getTime(), done: false });
    } else {
      // complete events carry no name — close the oldest unfinished call.
      const idx = this.calls.findIndex((c) => !c.done);
      if (idx >= 0) this.calls[idx].done = true;
    }
  }

  toggleDetail(key: number | string): void {
    if (this.expanded.has(key)) this.expanded.delete(key);
    else this.expanded.add(key);
  }

  /** Mark everything done and return a copy for sealing into history. */
  takeSnapshot(): ToolCallInfo[] {
    return this.calls.map((c) => ({ ...c, done: true }));
  }

  reset(): void {
    this.calls.length = 0;
    this.expanded.clear();
  }
}

export const tools = new ToolsStore();
