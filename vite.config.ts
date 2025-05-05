// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Xolve/', // Replace 'Xolve' with your actual project name
  plugins: [react()],
});
