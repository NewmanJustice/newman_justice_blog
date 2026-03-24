import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://newmanjustice.github.io',
  base: '/newman_justice_blog',
  vite: {
    plugins: [tailwindcss()],
  },
});
