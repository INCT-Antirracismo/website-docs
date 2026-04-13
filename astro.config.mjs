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
          href: 'https://github.com/INCT-Antirracismo'
        }
      ],
      sidebar: [
        {
          label: 'Tipos de Conteúdo',
          items: [
            // Each item here is one entry in the navigation menu. organizations
            { label: 'Resumo', slug: 'collections/overview' },
            {
              label: 'Institucional',
              items: [
                { label: 'Organizações', slug: 'collections/organizations' },
                { label: 'Pessoas', slug: 'collections/persons' },
                {
                  label: 'Projetos de Pesquisa',
                  slug: 'collections/researchprojects'
                },
                {
                  label: 'Publicações',
                  slug: 'collections/publications'
                }
              ]
            },
            {
              label: 'Website',
              items: [
                { label: 'Páginas', slug: 'collections/pages' },
                { label: 'Novidades (Posts)', slug: 'collections/posts' },
                { label: 'Eventos', slug: 'collections/events' }
              ]
            },
            {
              label: 'Arquivos e configurações',
              items: [
                {
                  label: 'Mídia',
                  slug: 'collections/media'
                },
                {
                  label: 'Arquivos',
                  slug: 'collections/files'
                },

                {
                  label: 'Dicionário de Termos',
                  slug: 'collections/definedterms'
                }
              ]
            }
          ]
        },
        {
          label: 'Blocos',
          items: [
            { label: 'Resumo', slug: 'blocks/overview' },
            { label: 'Call-To-Action Padrão', slug: 'blocks/default-cta' },
            { label: 'Editor de Texto', slug: 'blocks/rich-text' },
            { label: 'Lista de Conteúdo', slug: 'blocks/content-list' }
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
