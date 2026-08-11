import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  base: '/jarvis/',
  plugins: [svelte()],
  server: {
    port: 3000
  }
})
