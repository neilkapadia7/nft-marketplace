import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // host: '192.168.29.241', // (Jio IP)
    host: '127.0.0.1', // or a specific IP address
    port: 3000,      // choose an available port
  },
})
