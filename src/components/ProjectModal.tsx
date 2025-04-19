import { Project } from "@/types/Project";
import { Dispatch } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // não se esqueça disso!

interface ProjectModalProps {
  project: Project | null;
  setProject: Dispatch<React.SetStateAction<Project | null>>;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, setProject }) => {
  if (!project) return null;


  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80"
      onClick={() => setProject(null)}
    >
      <div
        className="rpgui-container framed-golden p-6 w-full max-w-2xl mx-auto bg-black overflow-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-4xl text-center font-bold mb-4">{project.title}</h2>
        <hr className="w-full golden mb-2" />
        <div className="mb-3 rounded-md overflow-hidden">
          <Carousel
            showThumbs={false}
            infiniteLoop
            showStatus={false}
            autoPlay
            interval={4000}
            className="carousel-wrapper"
          >
            {project.screenshots.map((src, index) => (
              <div key={index} className="mb-5">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  style={{
                    all: "unset",
                    width: "100%",
                    objectFit: "cover",
                    display: "block",
                    borderRadius: "0.375rem",
                  }}
                />
              </div>
            ))}
          </Carousel>
        </div>

        <p className="mb-4">{project.full_description}</p>

        {project.demo_link && (
          <a href={project.demo_link} target="_blank" rel="noopener noreferrer">
            <button className="rpgui-button block w-full text-center mb-2">
              <strong> 🌐 Ver Projeto</strong>
            </button>
          </a>
        )}
        {project.repository_link && (
          <a
            href={project.repository_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="rpgui-button block w-full text-center mb-2">
              <strong> 🌐 Ver Código</strong>
            </button>
          </a>
        )}
        <button
          onClick={() => setProject(null)}
          className="rpgui-button text-white block w-full text-center mb-2"
        >
          <strong> ✖ Fechar</strong>
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;
