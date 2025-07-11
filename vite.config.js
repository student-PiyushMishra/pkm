import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173, // ya koi aur port
    strictPort: true,
    allowedHosts: 'all' // ← yeh zaroori hai for LAN or tunnel
  }
})
