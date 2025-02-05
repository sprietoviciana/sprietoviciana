import "../scss/layout/Projects.scss";
import { motion } from "framer-motion";
import dragonImage from "../images/Dragon.jpeg";
import rickMortyImage from "../images/rick&morty.jpeg";
import pusheenImage from "../images/pusheen.jpeg";
import fourCodeImage from "../images/4code.jpeg";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Dragon Repeller",
      description:
        "Juega a derrotar monstruos. Consigue puntos antes de encontrarte al dragón.",
      image: dragonImage,
      technologies: ["HTML", "CSS", "JS Vanilla"],
      github: "https://sprietoviciana.github.io/dragon_repeller/",
    },
    {
      id: 2,
      title: "Rick & Morty",
      description:
        "Busca a tus personajes favoritos de la serie Rick & Morty. ",
      image: rickMortyImage,
      technologies: ["SCSS", "JS", "React", "API REST"],
      github:
        "https://beta.adalab.es/modulo-3-evaluacion-final-sprietoviciana/",
    },
    {
      id: 3,
      title: "PRR Skills",
      description:
        "Personaliza tu ficha de personaje para tus juegos de rol. Proyecto grupal.",
      image: pusheenImage,
      technologies: ["SCSS", "JS", "React", "API REST"],
      github: "https://angelacamu.github.io/project-promo-A-module-2-team-1/",
    },
    {
      id: 4,
      title: "4Code",
      description: "Web para añadir y guardar tus proyectos. Proyecto grupal.",
      image: fourCodeImage,
      technologies: ["SCSS", "JS", "React", "ExpressJS", "MySQL"],
      github: "https://promo-a-module-4-team-2-proyectos.onrender.com/",
    },
  ];

  return (
    <div className="projects-container">
      <h2 className="projects-title">Mis Proyectos</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <motion.div
            className="project-card"
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-info">
              <h3 className="project-info-title">{project.title}</h3>
              <p className="project-info-desc">{project.description}</p>
              <div className="tech-stack">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🔗 Ver Proyecto
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
