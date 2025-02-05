import { Link } from "react-router-dom";
import "../scss/layout/NavBar.scss";
import "../scss/layout/MenuHamburger.scss";
import MenuHamburger from "./MenuHamburger";
import { useState } from "react";

function NavBar() {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
  };
  return (
    <nav className="navbar">
      <MenuHamburger menu={menu} handleClick={handleClick} />
      <ul className={`navbar-list ${menu ? "navbar-active" : ""}`}>
        <li>
          <Link to="/" onClick={handleClick}>
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={handleClick}>
            Sobre mí
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={handleClick}>
            Proyectos
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleClick}>
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
