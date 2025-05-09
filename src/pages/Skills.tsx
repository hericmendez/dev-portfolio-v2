
import { FC } from "react";
import RpguiCard from "@/components/RpguiCard";
import Tabs, { Tab } from "@/components/PageTabs";
import { hardSkills, hobbies, softSkills } from "@/constants/skills";
import ProgressBar from "@/components/ProgressBar";
const SkillsPage: FC = () => {
  return (
    <div className="px-4 mx-auto">
      <div className="flex flex-col text-left">
        <h1 className="!text-4xl font-bold !mb-0 !text-left">
          Habilidades e Talentos
        </h1>
        <h2>O poder de luta dele... É DE MAIS DE 8 MIL!!!</h2>
        <hr className="golden mb-4" />
      </div>

      <Tabs>
        <Tab label="Hard Skills">
          {hardSkills.map((skill, index) => (
            <RpguiCard
              key={index}
              variant="framed-golden"
              className="flex flex-row"
            >
              <div className=" flex flex-col justify-center">
                <h2 className="text-3xl text-center !mb-0 !mt-0 ">
                  {skill.name}
                </h2>
                <hr className="golden mb-2" />
                <p className="mb-2">{skill.description}</p>

                <ProgressBar label=" " fill={skill.progressBar} />
                <p className="!text-sm">
                  XP: {skill.expLevel} | Classe: {skill.class}
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
              <div className=" flex flex-col justify-center">
                <h2 className="text-3xl text-center !mb-0 ">{skill.name}</h2>
                <hr className="golden" />
                <p>{skill.description}</p>
                <ProgressBar label=" " color="green" fill={skill.progressBar} />
                <p className="!text-sm">
                  XP: {skill.expLevel} | Classe: {skill.class}
                </p>
              </div>
            </RpguiCard>
          ))}
        </Tab>
        <Tab label="Hobbies">
          {hobbies.map((skill, index) => (
            <RpguiCard
              key={index}
              variant="framed-golden"
              className="flex flex-row"
            >
              <div className=" flex flex-col justify-center">
                <h2 className="text-3xl text-center !mb-0 ">{skill.name}</h2>
                <hr className="golden w-full" />
                <p>{skill.description}</p>
                <ProgressBar label=" " color="blue" fill={skill.progressBar} />
                <p className="!text-sm">
                  XP: {skill.expLevel} | Classe: {skill.class}
                </p>
              </div>
            </RpguiCard>
          ))}
        </Tab>
      </Tabs>
    </div>
  );
};

export default SkillsPage;