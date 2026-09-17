import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : '/AWS-Community-Day/',
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
}))
