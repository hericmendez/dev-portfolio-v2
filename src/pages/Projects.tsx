import React, { useState } from "react";

type Project = {
  id: number;
  name: string;
  thumbnail: string;
  tags: string[];
  description: string;
  link?: string;
};

const projects: Project[] = [
  {
    id: 1,
    name: "Save State",
    thumbnail: "https://placehold.co/600x400/white/000.png",
    tags: ["React", "Tailwind", "IGDB API"],
    description:
      "Aplicação para registrar todos os jogos que já joguei, com favoritos, progresso e integração com a IGDB.",
    link: "https://github.com/seuprojeto/savestate",
  },
  {
    id: 2,
    name: "Save State",
    thumbnail: "https://placehold.co/600x400/white/000.png",
    tags: ["React", "Tailwind", "IGDB API"],
    description:
      "Aplicação para registrar todos os jogos que já joguei, com favoritos, progresso e integração com a IGDB.",
    link: "https://github.com/seuprojeto/savestate",
  },
  {
    id: 3,
    name: "Save State",
    thumbnail: "https://placehold.co/600x400/white/000.png",
    tags: ["React", "Tailwind", "IGDB API"],
    description:
      "Aplicação para registrar todos os jogos que já joguei, com favoritos, progresso e integração com a IGDB.",
    link: "https://github.com/seuprojeto/savestate",
  },
  {
    id: 4,
    name: "Save State",
    thumbnail: "https://placehold.co/600x400/white/000.png",
    tags: ["React", "Tailwind", "IGDB API"],
    description:
      "Aplicação para registrar todos os jogos que já joguei, com favoritos, progresso e integração com a IGDB.",
    link: "https://github.com/seuprojeto/savestate",
  },
  {
    id: 5,
    name: "Save State",
    thumbnail: "https://placehold.co/600x400/white/000.png",
    tags: ["React", "Tailwind", "IGDB API"],
    description:
      "Aplicação para registrar todos os jogos que já joguei, com favoritos, progresso e integração com a IGDB.",
    link: "https://github.com/seuprojeto/savestate",
  },
  {
    id: 6,
    name: "Save State",
    thumbnail: "https://placehold.co/600x400/white/000.png",
    tags: ["React", "Tailwind", "IGDB API"],
    description:
      "Aplicação para registrar todos os jogos que já joguei, com favoritos, progresso e integração com a IGDB.",
    link: "https://github.com/seuprojeto/savestate",
  },
];

const ProjectsPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="content-scroll p-4 rpgui-container framed-golden text-white">
      <h1 className="!text-4xl font-bold !mb-0">Quests Concluídas</h1>
      <hr className="golden mb-4" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rpgui-container framed p-2 flex flex-col min-h-[500px]"
          >
            <h2 className="text-2xl font-bold text-center mb-2">
              {project.name}
            </h2>
            <img
              src={project.thumbnail}
              alt={project.name}
              className="rounded-md object-cover h-[180px] w-full mb-3"
            />

            <div className="flex flex-wrap gap-2 mb-2 justify-start">
              {project.tags.map((tag, i) => (
                <span key={i} className="rpgui-container framed-grey !text-sm">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-sm text-gray-300 flex-grow">
              {project.description}
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
      {selectedProject && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="rpgui-container framed-golden p-6 w-full max-w-md mx-auto bg-black overflow-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4">{selectedProject.name}</h2>
            <p className="mb-4">{selectedProject.description}</p>

            {selectedProject.link && (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rpgui-button block w-full text-center mb-2"
              >
                🌐 Ver Projeto
              </a>
            )}

            <button
              onClick={() => setSelectedProject(null)}
              className="rpgui-button w-full"
            >
              ✖ Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
