import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Replace 'your-repo-name' with the actual GitHub repo name
export default defineConfig({
  base: '/Portfolio/',  // 👈 Important for GitHub Pages
  plugins: [vue()],
  server: {
    port: 3000
  }
})
