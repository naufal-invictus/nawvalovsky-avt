import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    // Optimasi Build
    target: 'esnext',
    minify: 'esbuild',
    cssCodeSplit: true, // Memecah CSS per file JS
    rollupOptions: {
      output: {
        // STRATEGI PENTING: Memisahkan Vendor (Library) dari Kode Aplikasi
        manualChunks: {
          // Core React dipisah agar browser bisa cache
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          // UI Library dipisah (biasanya berat)
          'vendor-ui': ['framer-motion', 'lucide-react', 'clsx', 'tailwind-merge'],
        },
      },
    },
    // Menghindari warning chunk size jika di bawah 1000kb
    chunkSizeWarningLimit: 1000,
  },
})
