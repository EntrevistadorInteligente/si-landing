import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  base: '/es/pagina-principal',
  vite: {
    define: {
      'process.env.ANGULAR_APP_URL': JSON.stringify(process.env.ANGULAR_APP_URL),
      'process.env.GITHUB_TOKEN': JSON.stringify(process.env.GITHUB_TOKEN)
    },
  },
});