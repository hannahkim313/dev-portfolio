import dotenv from 'dotenv';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: process.env.VITE_API_NODE_ENV === 'development',
  },
  optimizeDeps: {
    include: ['react-helmet-async'],
  },
});
