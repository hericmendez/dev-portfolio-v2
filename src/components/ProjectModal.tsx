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

  const carouselImages = [
    "https://placehold.co/600x400/FFFFFF/000000",
    "https://placehold.co/600x400/333333/000000",
    "https://placehold.co/600x400/666666/000000",
    "https://placehold.co/600x400/999999/000000",
  ];

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
            {carouselImages.map((src, index) => (
              <div key={index}>
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  style={{
                    all: "unset",
                    width: "100%",
                    height: "180px",
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
          <a
            href={project.demo_link}
            target="_blank"
            rel="noopener noreferrer"
            className="rpgui-button block w-full text-center mb-2"
          >
            🌐 Ver Projeto
          </a>
        )}
        {project.repository_link && (
          <a
            href={project.repository_link}
            target="_blank"
            rel="noopener noreferrer"
            className="rpgui-button block w-full text-center mb-2"
          >
            🌐 Ver Código
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
  );
};

export default ProjectModal;
