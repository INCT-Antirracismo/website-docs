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
          label: 'Tipos de Conteúdo',
          items: [
            // Each item here is one entry in the navigation menu. organizations
            { label: 'Resumo', slug: 'collections/overview' },
            { label: 'Organizações', slug: 'collections/organizations' },
            { label: 'Pessoas', slug: 'collections/persons' },
            {
              label: 'Projetos de Pesquisa',
              slug: 'collections/researchprojects'
            },
            {
              label: 'Publicações',
              slug: 'collections/publications'
            },
            { label: 'Dicionário de Termos', slug: 'collections/definedterms' }
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
