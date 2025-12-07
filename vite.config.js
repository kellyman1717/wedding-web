import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, 
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('leaflet') || id.includes('react-leaflet')) {
              return 'maps-vendor';
            }
            if (id.includes('firebase')) {
              return 'firebase-vendor';
            }
            if (id.includes('framer-motion')) {
              return 'motion-vendor';
            }
            return 'vendor'; 
          }
        },
      },
    },
  },
})