// app/vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  build: {
    // Output the build files to the top-level `docs/` folder
    outDir: '../docs'
  },

  // If you plan to serve from a sub-path like username.github.io/my-repo,
  // set the base property accordingly, e.g.:
  // base: '/my-repo/',
});
