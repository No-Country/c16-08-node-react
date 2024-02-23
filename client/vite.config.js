import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

const config = defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env,
  },
  envDir: './',
});

export default config;
