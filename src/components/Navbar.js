import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context";

const Navbar = () => {
  const { writeBilingualContent } = useGlobalContext();
  return (
    <nav className="navbar">
      <NavLink className="navbar-element" to="/">
        {writeBilingualContent("Home", "Accueil")}
      </NavLink>
      <NavLink className="navbar-element" to="projects">
        {writeBilingualContent("Projects", "Projets")}
      </NavLink>
      <NavLink className="navbar-element" to="contact">
        {writeBilingualContent("Contact", "Contact")}
      </NavLink>
    </nav>
  );
};

export default Navbar;
