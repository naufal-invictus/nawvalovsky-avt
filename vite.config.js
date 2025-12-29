import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // 1. Pisahkan React Core (Wajib load duluan)
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],

          // 2. Pisahkan Library UI Berat (Framer Motion & Lucide)
          // Browser bisa men-download ini secara paralel (bersamaan) dengan main code
          'vendor-ui': ['framer-motion', 'lucide-react', 'clsx', 'tailwind-merge'],
        },
      },
    },
    // Menghilangkan warning ukuran chunk jika masih di bawah 500kb (default vite limit)
    chunkSizeWarningLimit: 1000,
  },
})
