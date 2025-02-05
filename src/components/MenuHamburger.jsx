import { FaX } from "react-icons/fa6";
import "../scss/layout/MenuHamburger.scss";
import { FaBars } from "react-icons/fa";
import PropTypes from "prop-types";

function MenuHamburger({ menu, handleClick }) {
  return (
    <div onClick={handleClick} className="menu">
      {menu ? <FaX /> : <FaBars />}
    </div>
  );
}

export default MenuHamburger;

MenuHamburger.propTypes = {
  menu: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};
