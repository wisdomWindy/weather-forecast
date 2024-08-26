import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/weatherApi': {
        target: 'https://devapi.qweather.com/v7',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/weatherApi/, '')
      },
      '/locationApi': {
        target: 'https://geoapi.qweather.com/v2',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/locationApi/, '')
      }
    }
  }
})
