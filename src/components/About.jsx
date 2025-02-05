import "../scss/layout/About.scss";
import { motion } from "framer-motion";
// import foto from "../image/foto.jpeg";
function About() {
  return (
    <div className="about-container">
      <h2 className="about-title">Bienvenid@ a mi portfolio</h2>

      <div className="about-timeline">
        <motion.div
          className="timeline-item"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="timeline-dot"></div>
          <p>
            Soy Silvia, una desarrolladora web apasionada por la creación de
            interfaces atractivas y funcionales.
          </p>
        </motion.div>
        <div className="about-timeline">
          <motion.div
            className="timeline-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="timeline-dot"></div>
            <p>
              Hace mas de un año, inicié mi camino en la programación como
              autodidacta, dedicando horas a aprender HTML, CSS y JS.
              Recientemente, completé un bootcamp de desarrollo web, donde
              perfeccioné mis habilidades y aprendí a trabajar en proyectos
              reales que consolidaron mis conocimientos. Siempre estoy en busca
              de mejorar profesionalmente!
            </p>
          </motion.div>
          <div className="about-timeline">
            <motion.div
              className="timeline-item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="timeline-dot"></div>
              <p>
                Además de programar, me encanta escuchar música, pasear y el
                café ☕.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
