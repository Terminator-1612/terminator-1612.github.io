import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  base: "/terminator-1612.github.io/",
  plugins: [react()],
})

// export default { base: './', };
