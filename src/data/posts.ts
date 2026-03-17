// src/data/posts.ts
import { Post } from '@/types/Post'

export const posts: Post[] = [
  {
    slug: 'post_17-03-2026',
    title: 'Projeto Save State - Super Crud Concluído',
    excerpt: 'Aqui explico como desenvolvi o CRUD do Save State, e como implementei relacionamentos e features de scraping para form auto-fill.',
    author: "Héric Mendes",
    date: '03-16-2026',
    url: '/posts/post_17-03-2026'
  },
  {
    slug: 'post_16-03-2026',
    title: 'Projeto Save State - Refatoração e mudanças conceituais',
    excerpt: 'Meu maior projeto pessoal (até agora), neste post explico a mudança de abordagem que tomei no desenvolvimento deste projeto.',
    author: "Héric Mendes",
    date: '03-16-2026',
    url: '/posts/post_16-03-2026'
  },
  {
    slug: 'post_27-01-2026',
    title: 'Criando um mini blog sem CMS',
    excerpt: 'Explorando uma abordagem simples para documentar o progresso dos meus projetos ou simplesmente registrar coisas legais que estou fazendo.',
    author: "Héric Mendes",
    date: '2026-01-27',
    url: '/posts/post_27-01-2026'
  },
  {
    slug: 'post-template',
    title: 'Postagem de teste',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
    author: "Héric Mendes",
    date: '2026-01-26',
    url: '/posts/post-template'
  },

]
