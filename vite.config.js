import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// base set for GitHub Pages project site: https://<user>.github.io/portfolio/
export default defineConfig({
  cacheDir: 'node_modules/.vite/portfolio',
  plugins: [react()],
  base: '/portfolio/',
  build: {
    outDir: 'dist',
  },
})
