// app/vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  // "base" must match your GitHub repo name
  base: '/Reduced-Order-Modeling-Tutorials/',

  build: {
    // Output the build files to the top-level `docs/` folder
    outDir: '../docs'
  }
});
