import { Project } from "@/types/Project";
import { Dispatch } from "react";

interface ProjectModalProps {
  project: Project | null;
  setProject: Dispatch<React.SetStateAction<Project | null>>;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, setProject }) => {
  return (
    project && (
      <div
        className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80"
        onClick={() => setProject(null)}
      >
        <div
          className="rpgui-container framed-golden p-6 w-full max-w-2xl mx-auto bg-black overflow-auto max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-2xl font-bold mb-4">{project!.name}</h2>

            <img
                src={project!.thumbnail}
                alt={project!.name}
                className="rounded-md object-cover h-[180px] w-full mb-3"/>
                          <p className="mb-4">{project!.description}</p>
          {project!.link && (
            <a
              href={project!.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rpgui-button block w-full text-center mb-2"
            >
              🌐 Ver Projeto
            </a>
          )}

          <button
            onClick={() => setProject(null)}
            className="rpgui-button w-full"
          >
            ✖ Fechar
          </button>
        </div>
      </div>
    )
  );
};

export default ProjectModal;