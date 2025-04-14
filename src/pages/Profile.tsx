import Avatar from "@/assets/images/avatar/eu_ghibli.gif";

export default function Profile() {
  return (
    <div className="px-4 mx-auto max-w-7xl">
      {/* Título */}
      <div className="flex flex-col text-left">
        <h1 className="!text-4xl font-bold !mb-0 !text-left">Meu perfil</h1>
        <p className="text-md text-gray-300 p-2">
          Um pouco sobre mim e minha jornada...
        </p>
        <hr className="golden mb-4" />
      </div>

      {/* Container com conteúdo e avatar lado a lado */}
      <div className="flex flex-col md:flex-row items-start gap-4">
        {/* Conteúdo principal */}
        <div className="w-full lg:w-[70%] px-0 md:px-6 relative z-10">
          {/* Ficha do aventureiro */}
          <div className="rpgui-container framed-golden p-4 mb-4">
            <h1 className="text-3xl font-bold mb-2">Héric Vinícius Mendes</h1>

            <p className="mt-2 text-">
              Nível 33 • Mago conjurador de interfaces mágicas com especialidade
              em React, encantamentos com TypeScript e rituais ágeis.
            </p>
            <br />
            <ul className="text-md space-y-2">
              <li>
                <span className="text-yellow-400 font-semibold">Classe:</span>{" "}
                Desenvolvedor Front-end
              </li>
              <li>
                <span className="text-yellow-400 font-semibold">
                  Alinhamento:
                </span>{" "}
                Caoticamente Criativo
              </li>
              <li>
                <span className="text-yellow-400 font-semibold">
                  Território:
                </span>{" "}
                Matão, SP
              </li>
              <li>
                <span className="text-yellow-400 font-semibold">Guildas:</span>{" "}
                Dtec, Biotrônica, PolarSapiens
              </li>
              <li>
                <span className="text-yellow-400 font-semibold">Armas:</span>{" "}
                React Blade, Ant Design Grimoire
              </li>
            </ul>
          </div>

          <div className="rpgui-container framed-golden p-4 mb-4">
            <h2 className="text-xl font-semibold mb-2">ESTATÍSTICAS</h2>
            <ul className="list-disc list-inside text-md space-y-1">
              <li>
                <strong>Inteligência Técnica:</strong> 95
              </li>
              <li>
                <strong>Carisma em UX/UI:</strong> 90
              </li>
              <li>
                <strong>Velocidade de Deploy:</strong> +30% Buff
              </li>
              <li>
                <strong>Contenção de Bugs:</strong> -40% em bugs críticos
              </li>
              <li>
                <strong>Foco em Performance:</strong> +25% Agilidade
              </li>
              <li>
                <strong>Contribuição em Guilda:</strong> Alto impacto
                estratégico
              </li>
            </ul>
            <br />
            <h2 className="text-xl font-semibold mb-2">HABILIDADES MÁGICAS</h2>
            <ul className="list-disc ml-5 space-y-1">
              <li>
                Criação de interfaces responsivas com React & React Native
              </li>
              <li>Invocação de componentes com Ant Design e TypeScript</li>
              <li>Conjuração de dashboards com dados em tempo real</li>
              <li>Feitiçaria de integração com APIs mágicas e mortais</li>
              <li>Runas secretas em Figma para encantamento visual</li>
            </ul>
          </div>
          {/* História */}
          <div className="rpgui-container framed-grey font-semibold text-md p-4 mb-4">
            <h2>HISTÓRIA</h2>
            <p>
              Nativo da longínqua aldeia de Matão, Héric é um aventureiro
              autodidata que domina bibliotecas como Material, Ant Design,
              Tailwind e se comunica em diversos dialetos (JS, TS, HTML, CSS).
              Atuou em diversas guildas, sempre com o foco de transformar
              requisitos em produtos mágicos e escaláveis.
            </p>
          </div>

          {/* Missões completadas */}
          <div className="rpgui-container framed-grey p-4 mb-4">
            <h2 className="rpgui-heading">MISSÕES COMPLETADAS</h2>
            <ul className="list-disc list-inside text-md space-y-2">
              <li>
                <strong>DTEC (2024 ~ Presente):</strong> Forjou o front-end de
                um sistema de reembolso médico, utilizando React e Ant Design. A
                arquitetura escalável reduziu o tempo de manutenção em 35% e
                melhorou a experiência dos usuários.
              </li>
              <li>
                <strong>Biotrônica (2022 ~ 2024):</strong> Conjurou dashboards
                interativos com React e TypeScript. Suas magias em UI aumentaram
                a eficiência dos mestres gestores em +40%.
              </li>
              <li>
                <strong>PolarSapiens (2022 ~ Presente):</strong> Desenvolveu
                artefatos Web e Mobile com base nos pergaminhos do Figma.
                Implementou rotas responsivas com React Native e aprimorou a
                jornada do usuário, resultando em uma experiência mais fluida e
                intuitiva.
              </li>
            </ul>
          </div>

          {/* Títulos e Certificações */}
          <div className="rpgui-container framed-grey p-4">
            <h2 className="rpgui-heading">TÍTULOS E CERTIFICAÇÕES</h2>
            <ul className="list-disc list-inside text-md space-y-2">
              <li>Bacharel em Administração de Empresas (2017)</li>
              <li>Técnico em Desenvolvimento de Sistemas (2020)</li>
              <li>
                Tecnólogo em Análise e Desenvolvimento de Sistemas (em
                andamento)
              </li>
              <li>Inglês Avançado • Português Nativo</li>
            </ul>
          </div>
        </div>

        {/* Avatar fixo */}
        <div className="w-full lg:w-[30%] hidden lg:flex justify-center items-end relative z-1">
          <img
            src={Avatar}
            alt="Avatar RPG"
            className="fixed h-[85vh] bottom-12 lg:right-[10%] xl:right-[12%] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
