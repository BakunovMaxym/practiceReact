import '../App.css';
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Стан для бургер-меню

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="headerContainer">
      <div className="navbarLeft">
        <div className="logo">
          <img src="/logo.jpg" alt="logo" />
          <p>Untitle UI</p>
        </div>

        <div className={`burgerMenu ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbarList ${isOpen ? "active" : ""}`}>
          <li className="navbarItem">
            <NavLink className={({ isActive }) => `navbarLink ${isActive ? "activeNavbar" : ""}`} to="/" onClick={toggleMenu}>
              Home
            </NavLink>
          </li>
          <li className="navbarItem">
            <NavLink className={({ isActive }) => `navbarLink ${isActive ? "activeNavbar" : ""}`} to="/Categories" onClick={toggleMenu}>
              Categories
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbarRight">
        <button className="login">Log in</button>
        <button className="signup">Sign up</button>
      </div>
    </header>
  );
}

export default Navbar;
