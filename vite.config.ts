import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url';
import html from 'html-loader';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    {
      name: 'html-loader',
      enforce: 'pre',
      config: {
        loader: html,
      },
    },
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      buffer: 'buffer',
    },
  },
  optimizeDeps: {
    include: ['buffer']
  },
  css: {
    preprocessorOptions: {
        scss: {
            additionalData: `@import "@/assets/scss/global.scss";`,
        },
    },
  },
  server: {
    watch: {
      usePolling: true,
    }
  },
})
