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
      // Ignore bulky source / temp folders so the dev server never stalls:
      // raw client footage, thumbnails scratch dir, old exports
      ignored: [
        '**/*.rar', '**/*.zip', '**/*.7z',
        '**/*.mp4', '**/*.mov', '**/*.MOV', '**/*.avi', '**/*.mkv',
        '**/drive-download*/**',
        '**/thumb-tmp/**',
        '**/output/**',
      ],
    },
  },
});
