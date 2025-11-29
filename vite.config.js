import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/GP/',          // IMPORTANT for GitHub Pages under /GP
  plugins: [react()],
})
