import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

export default defineConfig({
  base: "/search-movie/",
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/assets/components'),
      '@pages': path.resolve(__dirname, './src/assets/pages'),
      '@images': path.resolve(__dirname, './src/assets/images'),
      '@utils': path.resolve(__dirname, './src/utils')
    },
  },
})