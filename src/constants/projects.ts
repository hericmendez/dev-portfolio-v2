import project from "@/assets/images/projects/thumbs/portfolio_new.jpg";

export const projects = [
  {
    id: 1,
    title: "Lovelace.ai",
    thumbnail: "https://placehold.co/600x400/1A1A40/FFFFFF?text=Lovelace.ai",
    status: "concluído",
    screenshots: [
      "https://placehold.co/600x400/1A1A40/FFFFFF?text=Screenshot+1",
      "https://placehold.co/600x400/333366/FFFFFF?text=Screenshot+2",
    ],
    tags: ["JavaScript", "LangChain", "LangGraph", "IA Generativa"],
    meta_description:
      "Chat IA tutor de matemática com raciocínio passo a passo.",
    full_description:
      "Lovelace.ai é um protótipo de tutor virtual de matemática com inteligência artificial, criado como solução técnica para uma vaga de emprego. Utilizando LangGraph e LangChain, o chatbot guia o usuário passo a passo na resolução de problemas matemáticos, oferecendo explicações claras e personalizadas.",
    demo_link: "",
    repository_link: "",
  },
  {
    id: 2,
    title: "Movie Meme Generator",
    thumbnail:
      "https://placehold.co/600x400/004466/FFFFFF?text=Movie+Meme+Generator",
    status: "concluído",
    screenshots: [
      "https://placehold.co/600x400/004466/FFFFFF?text=Screenshot+1",
      "https://placehold.co/600x400/006699/FFFFFF?text=Screenshot+2",
    ],
    tags: ["JavaScript", "React", "OMDB API"],
    meta_description:
      "Gere títulos hilários de filmes trocando palavras por memes.",
    full_description:
      "Movie Meme Generator é uma aplicação divertida que transforma títulos de filmes em versões engraçadas substituindo palavras por memes ou termos inusitados. Alimentado pela OMDB API, permite ao usuário explorar novos títulos a cada clique com interface leve e intuitiva.",
    demo_link: "",
    repository_link: "",
  },
  {
    id: 3,
    title: "Sistema Remedio",
    thumbnail:
      "https://placehold.co/600x400/993333/FFFFFF?text=Sistema+Remedio",
    status: "descontinuado",
    screenshots: [
      "https://placehold.co/600x400/993333/FFFFFF?text=Screenshot+1",
    ],
    tags: ["React", "Node.js", "PostgreSQL"],
    meta_description: "Sistema de reembolso médico com foco em otimização.",
    full_description:
      "Sistema Remedio foi um projeto voltado ao reembolso de despesas médicas, com funcionalidades voltadas à automação de envio de documentos, análise de elegibilidade e controle de pagamentos. Embora promissor, o projeto foi descontinuado antes da finalização por motivos estratégicos.",
    demo_link: "",
    repository_link: "",
  },
  {
    id: 4,
    title: "Save State",
    thumbnail: "https://placehold.co/600x400/222222/FFFFFF?text=Save+State",
    status: "em andamento",
    screenshots: [
      "https://placehold.co/600x400/222222/FFFFFF?text=Screenshot+1",
      "https://placehold.co/600x400/444444/FFFFFF?text=Screenshot+2",
    ],
    tags: ["React", "Django", "SQL", "IGDB API", "Twitch OAuth"],
    meta_description: "Registre, catalogue e acompanhe sua jornada gamer.",
    full_description:
      "Save State é uma aplicação pessoal criada para registrar, buscar e organizar jogos já zerados ou desejados, com integração à API da IGDB. O app permite favoritar, marcar como concluído e explorar novas recomendações, tudo com um visual nostálgico inspirado em consoles clássicos.",
    demo_link: "",
    repository_link: "",
  },
  {
    id: 5,
    title: "Flappyvania",
    thumbnail: "https://placehold.co/600x400/000000/FFFFFF?text=Flappyvania",
    status: "concluído",
    screenshots: [
      "https://placehold.co/600x400/000000/FFFFFF?text=Screenshot+1",
      "https://placehold.co/600x400/111111/FFFFFF?text=Screenshot+2",
    ],
    tags: ["JavaScript", "HTML5 Canvas", "CSS"],
    meta_description: "Clone de Flappy Bird com visual Castlevania.",
    full_description:
      "Flappyvania é um jogo retrô desenvolvido com HTML5 Canvas, recriando a jogabilidade de Flappy Bird com o tema e os sprites de *Castlevania: Symphony of the Night*. Com jogabilidade simples e visual nostálgico, foi um experimento divertido de física 2D e pixel art.",
    demo_link: "",
    repository_link: "",
  },
  {
    id: 6,
    title: "Portfólio Dev",
    thumbnail: project,
    status: "concluído",
    screenshots: [
      "https://placehold.co/600x400/000000/FFFFFF?text=Screenshot+1",
      "https://placehold.co/600x400/111111/FFFFFF?text=Screenshot+2",
    ],
    tags: ["JavaScript", "HTML5 Canvas", "CSS"],
    meta_description: "Este portfólio que vc está vendo.",
    full_description: "Este portfólio que vc está vendo.",
    demo_link: "",
    repository_link: "",
  },
  {
    id: 7,
    title: "ACDCIT Landing Page",
    thumbnail:
      "https://placehold.co/600x400/003333/FFFFFF?text=ACDCIT+Landing+Page",
    status: "concluído",
    screenshots: [
      "https://placehold.co/600x400/003333/FFFFFF?text=Screenshot+1",
      "https://placehold.co/600x400/005555/FFFFFF?text=Screenshot+2",
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    meta_description:
      "Landing page responsiva e multilíngue para empresa de TI.",
    full_description:
      "Landing page desenvolvida como meu primeiro freela, para a empresa ACDCIT. O site apresenta os serviços da empresa com visual moderno, responsivo e com suporte a múltiplos idiomas. Foi o primeiro projeto real entregue para um cliente.",
    demo_link: "",
    repository_link: "",
  },
];
