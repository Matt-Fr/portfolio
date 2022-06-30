import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink className="navbar-element" to="/">
        Home
      </NavLink>
      <NavLink className="navbar-element" to="projects">
        Projects
      </NavLink>
      <NavLink className="navbar-element" to="contact">
        Contact
      </NavLink>
    </nav>
  );
};

export default Navbar;
