import CTABox from "@/components/CTAbox";
import ProgressBar from "@/components/ProgressBar";
import { FC } from "react";
import { hardSkills } from "@/data/skills";
console.log("hardSkills ==> ", hardSkills.length);
import Tooltip from "@/components/Tooltip";
import { Link } from "react-router";

const HomePage: FC = () => {
  return (
    <div className="px-4 mx-auto">
      <div className="flex flex-col text-left">
        <h1 className="!text-4xl font-bold !mb-0 !text-left">Heric Mendes</h1>
        <h2>Level 33 Front-end Developer</h2>
        <hr className="golden mb-4" />
      </div>

      <div className="rpgui-container framed-grey !md:px-10 flex flex-col md:flex-row justify-between mb-4">
        <div className="flex flex-col w-full md:w-1/2 justify-center items-center space-y-5">
          <ProgressBar label="Saúde" fill={80} color="red" />
          <ProgressBar label="Code exp." fill={85} color="blue" />
          <ProgressBar label="Horas de sono" fill={45} color="green" />
        </div>
        <div className="flex flex-col w-full md:w-1/2 justify-center items-center md:ml-10">
          <h2 className="!text-xl text-left font-bold">Skills Principais</h2>
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-2 mb-4">
            {hardSkills.map(
              (item, index) =>
                item.icon && (
                  <div
                    key={index}
                    className="rpgui-container framed-grey flex items-center justify-center h-20 w-20 "
                  >
                    <Tooltip
                      content={
                        <div className="rpgui-container framed-golden p-2 min-w-50">
                          <strong className="text-xl">{item.name}</strong>
                          <ProgressBar fill={item.progressBar} label="xp:" />
                        </div>
                      }
                    >
                      <img className="" src={item.icon} alt={item.name} />
                    </Tooltip>
                  </div>
                )
            )}
            <div className="rpgui-container framed-grey flex items-center justify-center text-4xl h-20 w-20 !p-0">
              <Link to="/skills">
                <strong>+13</strong>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <hr className="golden mb-5 mt-2" />

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
          <li className="mb-2">🏢 Fullstack end Freelancer Dev (Web/Mobile)</li>
          <li className="mb-2">
            🎓 Cursando Análise e Desenvolvimento de Sistemas
          </li>
          <li className="mb-2">🇬🇧 Inglês Avançado (C1)</li>
        </ul>
      </div>

      <CTABox />
    </div>
  );
};

export default HomePage;
