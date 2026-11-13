import { defineConfig } from 'astro/config';

// Site statique servi par GitHub Pages à la racine : https://edouardlacroix.github.io
export default defineConfig({
  site: 'https://edouardlacroix.github.io',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    // La racine est une vraie page (src/pages/index.astro) qui choisit la langue.
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
});
