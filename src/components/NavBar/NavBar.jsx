import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="NavBar">
        <Link to="/">
          <h3>T-Shirts</h3>
        </Link>
        <div className="Categories">
          <NavLink
            to={`/category/balenciaga`}
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
          >
            Balenciaga
          </NavLink>
          <NavLink
            to={`/category/supreme`}
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
          >
            Supreme
          </NavLink>
          <NavLink
            to={`/category/amiri`}
            className={({ isActive }) => (isActive ? "ActiveOption" : "Option")}
          >
            Amiri
          </NavLink>
        </div>
        <CartWidget></CartWidget>
      </nav>
    </header>
  );
};
export default Navbar;
