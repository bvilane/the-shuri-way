import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import viteReact from '@vitejs/plugin-react';
import tsConfigPaths from 'vite-tsconfig-paths';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';

export default defineConfig({
  server: { port: 3000 },
  plugins: [
    tsConfigPaths(),
    tanstackStart({
      customViteReactPlugin: true,
      target: 'vercel',
      prerender: {
        enabled: true,
        concurrency: 20,
        crawlLinks: false,
        autoSubfolderIndex: true,
      },
      pages: [
        {
          path: '/',
          prerender: { enabled: true, outputPath: '/index.html' },
        },
        {
          path: '/terms',
          prerender: { enabled: true, outputPath: '/terms/index.html' },
        },
        {
          path: '/refund-policy',
          prerender: { enabled: true, outputPath: '/refund-policy/index.html' },
        },
      ],
    }),
    viteReact(),
    tailwindcss(),
  ],
});
