import Avatar from "@/assets/img/eu_ghibli.png";

export default function Profile() {
  return (
    <div className="px-4 mx-auto">
      <div className="flex flex-col text-left">
        <h1 className="!text-4xl font-bold !mb-0 !text-left">
          Sobre este projeto
        </h1>

        <hr className="golden mb-4" />
      </div>

             <div className="rpgui-container framed-golden p-4 mb-4">
          <h1 className="text-3xl font-bold mb-2">Héric Vinícius Mendes</h1>
          <p className="italic text-yellow-300">
            Classe: Desenvolvedor Front-end
          </p>
          <p className="mt-2 text-sm">
            Nível 24 • Experiência em React, JavaScript, interfaces e
            metodologias ágeis.
          </p>
        </div>
      <div className="md:w-[60%] p-6 relative z-10">
   

        <div className="rpgui-container framed-grey p-4 mb-4">
          <h2 className="rpgui-heading">HISTÓRIA</h2>
          <p>
            Guerreiro do Front-End com especialidade em React e TypeScript,
            Nativo da aldeia de Matão, nas terras de São Paulo. Autodidata e sempre em busca de
            novas aventuras, domina bibliotecas como Material, Ant Design e
            Tailwind. Já lutou ao lado de guildas como DTEC, Biotrônica e
            Polarsapiens.
          </p>
        </div>

        <div className="rpgui-container framed-grey p-4 mb-4">
          <h2 className="rpgui-heading">MISSÕES COMPLETADAS</h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>DTEC (2024 ~ 2025):</strong>Desenvolvimento de um sistema
              de reembolso médico otimizado com React e Ant Design.
            </li>
            <li>
              <strong>Biotrônica (2022 ~ 2024):</strong> Criação de dashboards e
              landing pages com React + TypeScript.
            </li>
            <li>
              <strong>Polarsapiens (2022 ~ 2023):</strong> Implementação de
              aplicações Web e Mobile com Figma como oráculo visual.
            </li>
          </ul>
        </div>

        <div className="rpgui-container framed-grey p-4">
          <h2 className="rpgui-heading">TÍTULOS E CERTIFICAÇÕES</h2>
          <ul className="list-disc list-inside">
            <li>Bacharel em Administração de Empresas (2017)</li>
            <li>Técnico em Desenvolvimento de Sistemas (2020)</li>
            <li>Tecnólogo em ADS (em andamento)</li>
            <li>Inglês avançado • Português nativo</li>
          </ul>
        </div>
      </div>

      <div className="w-[40%] hidden md:flex justify-center items-center relative z-1">
        <img
          src={Avatar}
          alt="Avatar RPG"
          className="fixed  h-[75vh] bottom-[40px] right-[13%]"
        />
      </div>
    </div>
  );
}
