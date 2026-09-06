import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import pkg from './package.json' with { type: 'json' }

export default defineConfig({
  base: '/',
  plugins: [svelte()],
  define: {
    __APP_VERSION__: JSON.stringify(`v${pkg.version}`),
  },
  server: {
    port: 3000
  }
})
