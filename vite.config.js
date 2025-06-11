import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // The base path should be the name of your GitHub repository.
  base: '/Portfolio/', 
  
  // This tells Vite to build the project into the 'docs' folder.
  build: {
    outDir: 'docs'
  },

  plugins: [vue()],
})
