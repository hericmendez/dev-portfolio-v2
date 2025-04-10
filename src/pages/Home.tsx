import CTABox from "@/components/CTAbox";
import ProgressBar from "@/components/ProgressBar";
import { FC } from "react";

const HomeCard: FC = () => {
  return (
    <div className="px-5 text-white flex flex-col justify-center">
      <div className="flex flex-col text-left">
        <h1 className="!text-4xl font-bold !mb-0 !text-left">Héric Mendes</h1>
        <h2 className="r text-md !mb-0">
          Level: 33 — Classe: Front-end Developer
        </h2>
        <hr className="golden mb-4" />
      </div>

      <div className="rpgui-container framed-grey !px-10 flex flex-col md:flex-row justify-between mb-4">
        <div className="flex flex-col w-full md:w-1/2 justify-center items-center">
          <ProgressBar label="Saúde" fill={60} color="red" />
          <ProgressBar label="Code exp." fill={80} color="blue" />
          <ProgressBar label="Horas de sono" fill={45} color="green" />
        </div>
        <div className="flex flex-col w-full md:w-1/2 justify-center items-stretch md:ml-10">
          <h2 className="!text-xl text-left font-bold">Skills Principais</h2>
          <div className="grid grid-cols-4 gap-2 mb-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="rpgui-container framed-golden-2 flex items-center justify-center h-20 w-20"
              >
                <span className="text-sm text-gray-400">?</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className="golden mb- mt-0" />

      <div className="text-xl leading-relaxed text-justify mb-5">
        <p>
          Olá, eu sou o Héric Mendes, um front-end developer apaixonado por
          criar experiências digitais únicas e envolventes. Assim como um herói
          em sua jornada, estou sempre em busca de novos desafios, aprendizados
          e power-ups de conhecimento.
        </p>{" "}
        <p>
          Neste mundo mágico da programação, cada linha de código é uma
          conquista, e cada projeto é uma nova missão completada com orgulho.
        </p>
      </div>

      <div>
        <ul className="text-xl space-y-1 list-none mb-8">
          <li className="mb-2">🏢 Meu trabalho atual (nenhum, no caso).</li>
          <li className="mb-2">🎓 Minha formação.</li>
          <li className="mb-2">🇬🇧 Nível de inglês.</li>
          <li className="mb-2">📜 Algum curso que eu fiz.</li>
          <li className="mb-2">
            🗡️ Aqui vou colocar minha área e especialização.
          </li>
        </ul>
      </div>

      <CTABox />
    </div>
  );
};

export default HomeCard;
