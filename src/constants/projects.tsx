import { Project } from "@/types/Project";
import thumbs from "@/assets/images/projects/thumbs";
import screenshots from "@/assets/images/projects/screenshots";

const {
  acdc_01,
  acdc_02,
  acdc_03,
  flappyvania_01,
  flappyvania_02,
  lovelace_01,
  lovelace_02,
  movie_meme_01,
  movie_meme_02,
  portfolio_new_01,
  portfolio_old_01,
  portfolio_old_02,
  remedio_01,
  remedio_02,
  remedio_03,
  savestate_01,
} = screenshots;

export const projects: Project[] = [
  {
    id: 1,
    title: "Lovelace.ai",
    thumbnail: thumbs.lovelace,
    status: "concluído",
    screenshots: [lovelace_01, lovelace_02],
    tags: [
      "JavaScript",
      "LangChain",
      "LangGraph",
      "IA Generativa",
      "Deepseek V3",
    ],
    meta_description:
      "Chat IA tutor de matemática com raciocínio passo a passo.",
    full_description: (
      <div>
        <p>
          Lovelace.ai é um protótipo de tutor virtual de matemática com
          inteligência artificial, criado como solução técnica para uma vaga de
          emprego. Utilizando LangGraph e LangChain, o chatbot guia o usuário
          passo a passo na resolução de problemas matemáticos, oferecendo
          explicações claras e personalizadas.
        </p>{" "}
        <p>
          Este é um projeto fullstack feito com React e NodeJS+Express, e a LLM
          recebe instruções para responder apenas perguntas relacionadas a
          matemática direto na requisição.
        </p>
        "
      </div>
    ),
    demo_link: "https://lovelace-ai-client-reactjs.vercel.app/",
    repository_link:
      "https://github.com/hericmendez/lovelace-ai-client-reactjs",
  },
  {
    id: 2,
    title: "Movie Meme Generator",
    thumbnail: thumbs.movie_meme_generator,
    status: "concluído",
    screenshots: [movie_meme_01, movie_meme_02],
    tags: ["JavaScript", "NextJS", "OMDB API"],
    meta_description:
      "Gere títulos hilários de filmes trocando palavras por memes.",
    full_description: (
      <div>
        <p>
          Movie Meme Generator é uma aplicação divertida que transforma títulos
          de filmes em versões engraçadas substituindo palavras por memes ou
          termos inusitados. Alimentado pela OMDB API, permite ao usuário
          descobrir e explorar novos títulos a cada clique com interface leve e
          intuitiva.
        </p>
      </div>
    ),
    demo_link: "https://next-movie-meme-generator.vercel.app/",
    repository_link: "https://github.com/hericmendez/next-movie-meme-generator",
  },
  {
    id: 3,
    title: "Sistema Remedio",
    thumbnail: thumbs.remedio,
    status: "descontinuado",
    screenshots: [remedio_01, remedio_02, remedio_03],
    tags: ["React", "SpringBoot", "PostgreSQL"],
    meta_description: "Sistema de reembolso médico com foco em otimização.",
    full_description: (
      <div>
        <p>
          Sistema Remedio foi um projeto voltado ao reembolso de despesas
          médicas, com funcionalidades voltadas à automação de envio de
          documentos, análise de elegibilidade e controle de pagamentos, feito
          usando React com a biblioteca Ant Design no Front-end, e
          Java+SpringBoot+PostgreSQL no back-end. Embora promissor, o projeto
          foi descontinuado antes da finalização por motivos estratégicos.
        </p>
      </div>
    ),
    demo_link: "",
    repository_link: "",
  },
  {
    id: 4,
    title: "Save State",
    thumbnail: thumbs.savestate,
    status: "em andamento",
    screenshots: [savestate_01],
    tags: ["React", "NodeJS", "SQL", "IGDB API", "Twitch OAuth"],
    meta_description:
      "Registre, catalogue e acompanhe sua jornada gamer em uma aplicação que transborda nostalgia.",
    full_description: (
      <div>
        <p>
          Save State é uma aplicação pessoal criada para registrar, buscar e
          organizar jogos já zerados ou desejados, com integração à API da IGDB.
          O app permite favoritar, marcar como concluído e explorar novas
          recomendações, tudo com um visual nostálgico inspirado em consoles
          clássicos.
        </p>
      </div>
    ),
    demo_link: "",
    repository_link: "https://github.com/hericmendez/save-state-frontend",
  },
  {
    id: 5,
    title: "Flappyvania",
    thumbnail: thumbs.flappyvania,
    status: "Concluído",
    screenshots: [flappyvania_01, flappyvania_02],
    tags: ["JavaScript", "HTML5 Canvas", "CSS"],
    meta_description: "Clone de Flappy Bird com visual Castlevania.",
    full_description: (
      <div>
        <p>
          Flappyvania é um jogo retrô desenvolvido com HTML5 Canvas, recriando a
          jogabilidade de Flappy Bird com o tema e os sprites de *Castlevania:
          Symphony of the Night*. Com jogabilidade simples e visual nostálgico,
          foi um experimento divertido de física 2D e pixel art. Para alcançar o
          máximo de fidelidade possível, os assets originais do jogo foram
          utilizadas nesse projeto.
        </p>
      </div>
    ),
    demo_link: "https://hericmendez.github.io/Flappyvania-Canvas/",
    repository_link: "https://github.com/hericmendez/Flappyvania-Canvas",
  },
  {
    id: 6,
    title: "ACDCIT Landing Page",
    thumbnail: thumbs.acdcit,
    status: "Concluído",
    screenshots: [acdc_01, acdc_02, acdc_03],
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    meta_description:
      "Landing page responsiva e multilíngue para empresa de TI.",
    full_description: (
      <div>
        <p>
          Landing page desenvolvida como meu primeiro freela, para a empresa
          ACDCIT. O site apresenta os serviços da empresa com visual moderno,
          responsivo e com suporte a múltiplos idiomas. Foi o primeiro projeto
          real entregue para um cliente.
        </p>
      </div>
    ),
    demo_link: "https://acdcit.com/",
    repository_link: "",
  },
  {
    id: 7,
    title: "Portfólio 2023 - Versão Final Fantasy",
    status: "Concluído",
    thumbnail: thumbs.portfolio_old,
    screenshots: [portfolio_old_01, portfolio_old_02],
    tags: ["HTML", "CSS", "JavaScript", "RPGUI css", "Pixel Art"],
    meta_description: "Portfólio original, feito em 2023.",
    full_description: (
      <div>
        <p>
          Minha primeira versão temática do portfólio, baseada em jogos da
          franquia *Final Fantasy*. A interface apresenta:
        </p>
        <p>
          <ul>
            <li>Menus estilo RPG clássico;</li>
            <li>Avatar em pixel art;</li>
            <li>
              Barras de status para saúde, experiência de código e sono,
              característicos de jogos do gênero;
            </li>
            <li>Lista de experiências como 'quests';</li>
            <li>Estilo nostálgico com foco em carisma e identidade visual.</li>
          </ul>
        </p>
        <p>
          Foi a fundação para o conceito de gamificação do meu perfil como dev.
        </p>
      </div>
    ),
    demo_link: "https://rpg-portfolio-react-hericmendez.vercel.app/",
    repository_link: "https://github.com/hericmendez/rpg-portfolio-react",
  },
  {
    id: 8,
    title: "Portfólio 2025 - Versão Chrono Trigger",
    thumbnail: thumbs.portfolio_new,
    status: "Em constante evolução",
    screenshots: [portfolio_new_01],
    tags: ["HTML", "CSS", "JavaScript", "RPGUI css", "Pixel Art"],
    meta_description:
      "Portfólio atual, feito como um remake do orginal de 2023, com várias melhorias.",
    full_description: (
      <div>
        <p>
          Versão atualizada do meu portfólio, inspirada no estilo visual de
          *Chrono Trigger*. <br />
          Esta versão traz uma estética retrô refinada, com foco em:
        </p>
        <p>
          <ul>
            <li>
              Layout mais limpo e moderno, fonte mais legível porém ainda com um
              toque retrô;
            </li>
            <li>Melhor responsividade para diferentes dispositivos;</li>
            <li>Adição de descrição pessoal com storytelling de jornada;</li>
            <li>
              Navegação aprimorada com novas seções (Blog, Projects, About);
            </li>
            <li>
              Utilização de Tailwindcss em conjunto com a biblioteca RPGUI, para
              um código mais organizado;
            </li>
            <li>Interface com pixel art customizada e animações mais suaves</li>
          </ul>
        </p>
        <p>
          Essa versão reflete melhor minha maturidade como dev e minha
          personalidade criativa.
        </p>
      </div>
    ),

    demo_link: "",
    repository_link: "https://github.com/hericmendez/dev-portfolio-v2",
  },
];
