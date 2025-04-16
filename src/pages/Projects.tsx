import { Project } from "@/types/Project";
import { useState } from "react";
import { projects } from "@/constants/projects";
import ProjectModal from "@/components/ProjectModal";

const ProjectsPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="px-4 mx-auto">
      <div className="content-scroll flex flex-col text-left">
        <h1 className="!text-4xl font-bold !mb-0 !text-left">
          Quests Concluídas
        </h1>
        <h2>
          As batalhas que lutei, os chefões que derrotei.
        </h2>
        <hr className="golden mb-4" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rpgui-container framed-golden p-2 flex flex-col min-h-[500px]"
          >
            <h2 className="text-2xl font-bold text-center mb-2">
              {project.title}
            </h2>
            <hr className="golden mb-2" />
            <div className="rpgui-container framed-grey !p-0">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="rounded-md object-cover h-[180px] w-full p-1"
              />
            </div>

            <div className="flex flex-wrap gap-2 mb-2 justify-start">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="rpgui-container framed-grey !p-0 !text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-sm text-gray-300 flex-grow">
              {project.meta_description}
            </p>

            <button
              className="rpgui-button golden mt-4 w-full text-xl"
              onClick={() => setSelectedProject(project)}
            >
              <p> 📜 Detalhes</p>
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      <ProjectModal project={selectedProject} setProject={setSelectedProject} />
    </div>
  );
};

export default ProjectsPage;
