/**
 * stores/logs.svelte.ts — system log feed (bottom-right panel).
 */
import { getTime } from '../config';
import type { LogEntry } from '../types';

class LogsStore {
  readonly entries = $state<LogEntry[]>([
    { type: 'success', text: 'System initialized', time: getTime() },
    { type: 'info', text: 'LiveKit endpoint ready', time: getTime() },
  ]);

  add(type: LogEntry['type'], text: string): void {
    this.entries.push({ type, text, time: getTime() });
  }

  get latest(): LogEntry | null {
    return this.entries.length > 0 ? this.entries[this.entries.length - 1] : null;
  }
}

export const logs = new LogsStore();
