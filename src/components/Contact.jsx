import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import "../scss/layout/Contact.scss";
import Droplets from "./Droplets";

export default function Contact() {
  return (
    <section className="contact-container home-container">
      <h2 className="contact-title">Contacto</h2>
      <p className="contact-text">¡Puedes encontrarme en mis redes sociales!</p>

      <div className="social-icons">
        <a href="https://github.com/sprietoviciana" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/sprietoviciana" target="_blank">
          <FaLinkedin />
        </a>
        <a href="mailto:info@silviaprieto.com">
          <FaEnvelope />
        </a>
        <Droplets />
      </div>
    </section>
  );
}
