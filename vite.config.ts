import { defineConfig } from 'vite';
import eslintPlugin from '@nabla/vite-plugin-eslint';
import path from 'path';

export default defineConfig({
  plugins: [eslintPlugin()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
