import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logo/logo4.png";

export default function Header() {
  return (
    <section className="header">
      <div className="header-container">
        <Link to="/" className="header-logo__link">
          <img className="header-logo" alt="header-logo" src={logo} />
        </Link>
      </div>
      <nav className="header-nav">
        <NavLink to="/search" className="header-nav--active">
          <div className="header-nav__info">Search</div>
        </NavLink>
        <NavLink to="/contact" className="header-nav--active">
          <div className="header-nav__info">Contact</div>
        </NavLink>
        <NavLink to="/comments" className="header-nav--active">
          <div className="header-nav__info">Top 20</div>
        </NavLink>
      </nav>
    </section>
  );
}
