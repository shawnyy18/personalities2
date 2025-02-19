// filepath: /Users/shawnashlee/Desktop/personalities2/personalities2/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/personalities2/', // Set this to your repository name
  plugins: [react()],
});