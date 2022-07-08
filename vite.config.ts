import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/<REPO>/",
  server: {
    host: true

  },
  build: {
    chunkSizeWarningLimit: 10000,
  },
})