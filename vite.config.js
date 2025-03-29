import { defineConfig } from 'vite';
import { resolve } from 'path';

// Replace 'my-threejs' with your GitHub repo name
const repoName = 'my-threejs';

export default defineConfig({
  base: `/${repoName}/`, // Critical for GitHub Pages
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});