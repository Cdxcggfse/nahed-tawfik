import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    watch: {
      // Ignore large binary / archive files so Vite watcher doesn't crash
      ignored: ['**/*.rar', '**/*.zip', '**/*.7z', '**/*.mp4'],
    },
  },
});
