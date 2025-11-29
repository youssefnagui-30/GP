import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/GP/',           // <-- IMPORTANT for Pages under /GP
  plugins: [react()],
})
