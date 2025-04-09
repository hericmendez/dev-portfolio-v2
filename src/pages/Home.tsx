import ProgressBar from "@/components/ProgressBar";
import { FC } from "react";

interface StatusBarProps {
  label: string;
  value: number;
  color: string;
}

const HomeCard: FC = () => {
  return (
    <div className="p-5 text-white flex flex-col justify-center">
      <h1 className="!text-5xl !mb-0 text-center font-bold">Héric Mendes</h1>
      <h2 className="text-center text-md mb-4">Level 33 Front-end dev</h2>

      <div className="rpgui-container framed-grey !px-10 flex flex-row justify-between mb-4">
        <div className="flex flex-col w-1/2 justify-center items-center">
          <ProgressBar label="Saúde" fill={60} color="red" />
          <ProgressBar label="Code exp." fill={80} color="blue" />
          <ProgressBar label="Horas de sono" fill={45} color="green" />
        </div>
        <div className="flex flex-col w-1/2 justify-center items-center">
          <h2 className="!text-2xl text-left font-bold">Skills Principais</h2>
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

      <hr className="golden mb-5 mt-0" />

      <div className="text-2xl leading-relaxed text-justify mb-5">
        <p>
          Olá, eu sou o Héric Mendes, um desenvolvedor front-end apaixonado por
          criar experiências digitais incríveis. Sou um aventureiro no mundo da
          programação, sempre em busca de novos desafios e aprendizados.
        </p>
      </div>

      <ul className="text-2xl space-y-1 list-none mb-8">
        <li>🗡️ Aqui vou colocar minha área e especialização.</li>
        <li>🏢 Meu trabalho atual (nenhum, no caso).</li>
        <li>🎓 Minha formação.</li>
        <li>🇬🇧 Nível de inglês.</li>
        <li>📜 Algum curso que eu fiz.</li>
      </ul>
    </div>
  );
};

export default HomeCard;
