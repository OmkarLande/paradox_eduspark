import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'https://eduspark-0swg.onrender.com' // Adjust the URL to match your server URL
    }
  }
})
