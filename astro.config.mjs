import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  base: '/home',
  vite: {
    define: {
      'process.env.ANGULAR_APP_URL': JSON.stringify(process.env.ANGULAR_APP_URL),
      'process.env.GITHUB_TOKEN': JSON.stringify(process.env.GITHUB_TOKEN),
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    fallback: { 
      en: "es"
  },
    routing: {
      prefixDefaultLocale: true,
    },
  },
});