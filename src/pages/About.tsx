export default function AboutPage() {
  return (
    <div className="px-4 mx-auto">
      <div className="flex flex-col text-left">
        <h1 className="!text-4xl font-bold !mb-0 !text-left">
          Sobre este projeto
        </h1>

        <hr className="golden mb-4" />
      </div>

      <section className="mb-6">
        <h2 className="text-xl text-orange-300 mb-2">🧙‍♂️ Portfolio RPG</h2>
        <p>
          Este portfólio foi desenvolvido como um projeto pessoal com a missão
          de unir{" "}
          <strong>criatividade, personalidade e habilidades técnicas</strong> em
          um único lugar. Inspirado por <em>interfaces de jogos retrô</em>,
          especialmente RPGs clássicos, o layout e a experiência de navegação
          foram pensados como se o usuário estivesse explorando o perfil de um
          personagem jogável — no caso, eu mesmo!
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl text-orange-300 mb-2">🎨 Inspirações</h2>
        <ul className="list-disc list-inside">
          <li>
            Jogos em pixel art com UIs marcantes (EarthBound, Final Fantasy VI,
            Undertale)
          </li>
          <li>
            Sistemas de menu clássicos com botões de madeira e barras de XP
          </li>
          <li>
            Sites criativos e não-lineares que fogem do padrão “sobre mim +
            projetos + contato”
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl text-orange-300 mb-2">
          🔧 Tecnologias Utilizadas
        </h2>
        <ul className="list-disc list-inside">
          <li>React com TypeScript</li>
          <li>Vite para build mais rápido e leve</li>
          <li>Sass para customizar o tema e aplicar estilo retrô</li>
          <li>Pixel fonts e sprites inspiradas em jogos antigos</li>
          <li>
            Hooks personalizados (ex: detecção de sequência de teclas estilo
            Konami Code)
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl text-orange-300 mb-2">📎 Recursos do Projeto</h2>
        <ul className="list-disc list-inside">
          <li>Interface toda estilizada como se fosse parte de um game</li>
          <li>XP bars e níveis representando habilidades</li>
          <li>Menus laterais simulando um sistema de RPG</li>
          <li>Mensagens interativas e textos com linguagem de “aventura”</li>
          <li>
            Integrações prontas para adição de animações, sons e até easter eggs
            secretos
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl text-orange-300 mb-2">📂 Repositório</h2>
        <p>
          Este projeto está disponível no GitHub e você pode explorá-lo, clonar,
          estudar ou até contribuir se quiser:
        </p>
        <a
          href="#"
          target="_blank"
          className="inline-block mt-2 bg-orange-400 text-black px-4 py-2 rounded shadow hover:bg-orange-300"
        >
          🔗 Acessar repositório no GitHub
        </a>
      </section>

      <section>
        <h2 className="text-xl text-orange-300 mb-2">💭 Objetivo</h2>
        <p>
          O portfólio serve não só como uma vitrine do meu trabalho, mas também
          como uma extensão da minha personalidade como dev e gamer. Mais do que
          mostrar projetos, ele <strong>conta uma história</strong>, e
          transforma o visitante em um jogador explorando meu mundo.
        </p>
      </section>
    </div>
  );
}
