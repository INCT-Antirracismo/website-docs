// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Documentação do site do INCT',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/withastro/starlight'
        }
      ],
      sidebar: [
        {
          label: 'Coleções',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Resumo', slug: 'collections/overview' },
            { label: 'Pessoas', slug: 'collections/persons' }
          ]
        }
      ],
      customCss: ['./src/styles/global.css']
    })
  ],
  vite: {
    // @ts-ignore
    plugins: [tailwindcss()]
  }
});
