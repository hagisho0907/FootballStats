import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tamaguiPlugin } from '@tamagui/vite-plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tamaguiPlugin({
      components: ['@tamagui/core'],
      config: './src/tamagui.config.ts'
    })
  ],
  server: {
    port: 5173,
    host: '127.0.0.1',
    strictPort: false
  },
  define: {
    'process.env.TAMAGUI_TARGET': '"web"',
  },
})
