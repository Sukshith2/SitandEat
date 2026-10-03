import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/hotels/',
  server: {
    proxy: {
      '/wp-api': {
        target: 'http://hotels.local',
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(/^\/wp-api/, '/wp-json/wp/v2'),
      },
    },
  },
})