import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/web2_20252026_vue1/',
  plugins: [
    vue(),
    tailwindcss()
  ],
})
