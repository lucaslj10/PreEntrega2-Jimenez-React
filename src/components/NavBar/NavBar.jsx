import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="NavBar">
        <Link to="/">
          <h3>T-Shirts</h3>
        </Link>
        <ul>
          <li>
            <NavLink to={"/category/Inicio"}>Inicio</NavLink>
          </li>
          <li>
            <NavLink to={"/category/Remeras"}>Remeras</NavLink>
          </li>
          <li>
            <NavLink to={"/category/Contacto"}>Contacto</NavLink>
          </li>
        </ul>
        <CartWidget />
      </nav>
    </header>
  );
};
export default Navbar;
