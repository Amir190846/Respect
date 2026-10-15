import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// VITE_BASE_PATH: set to "/<repo-name>/" for GitHub Pages sub-path deployments.
// Leave unset ("/") for Vercel, Netlify, or a custom domain.
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    base: env.VITE_BASE_PATH || '/',
    plugins: [react()],
    build: {
      target: 'es2020',
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom'],
            motion: ['framer-motion'],
          },
        },
      },
    },
  };
});
