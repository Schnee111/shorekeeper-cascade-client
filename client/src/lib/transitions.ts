import { crossfade } from 'svelte/transition';
import { cubicOut } from 'svelte/easing';

export const [send, receive] = crossfade({
  duration: 800,
  easing: cubicOut,
  fallback(node) {
    return {
      duration: 400,
      css: (t) => `opacity: ${t}`
    };
  }
});
