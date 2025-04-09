
import { FC } from "react";
import RpguiCard from "@/components/RpguiCard";
import Tabs, { Tab } from "@/components/PageTabs";
import { hardSkills, softSkills } from "@/constants/skills";
import ProgressBar from "@/components/ProgressBar";
const Skills: FC = () => {
  return (
    <div className="flex flex-col text-white">
      <h2 className="text-4xl text-bold">Habilidades e Talentos</h2>
      <hr className="golden mb-5" />
      <Tabs>
        <Tab label="Hard Skills">
          {hardSkills.map((skill, index) => (
            <RpguiCard
              key={index}
              variant="framed-golden"
              className="flex flex-row"
            >
              <div className=" flex flex-col justify-center">
                <h2 className="text-3xl text-center !mb-0 ">{skill.name}</h2>
                <hr className="golden" />
                <p>{skill.description}</p>
                <ProgressBar label=" " fill={skill.progressBar} />
                <p>
                  XP: {skill.expLevel} Classe: {skill.class}
                </p>
              </div>
            </RpguiCard>
          ))}
        </Tab>
        <Tab label="Soft Skills">
          {softSkills.map((skill, index) => (
            <RpguiCard
              key={index}
              variant="framed-golden"
              className="flex flex-row"
            >
              <div className="w-[100%] flex flex-col justify-center">
                <h2 className="text-2xl">{skill.name}</h2>
                <p>{skill.description}</p>
                <ProgressBar label=" " fill={skill.progressBar} />
                <p>
                  XP: {skill.expLevel} Classe: {skill.class}
                </p>
              </div>
            </RpguiCard>
          ))}
        </Tab>
      </Tabs>
    </div>
  );
};

export default Skills;