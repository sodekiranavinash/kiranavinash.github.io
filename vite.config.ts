import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, './src/app'),
      '@portfolio': path.resolve(__dirname, './src/portfolio'),
      '@shared': path.resolve(__dirname, './src/shared'),
    },
  },
})
