import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useGlobalContext } from "../context";
import LanguageBtn from "../components/LanguageBtn";
import ToggleTheme from "../components/ToggleTheme";

const Navbar = () => {
  const { writeBilingualContent } = useGlobalContext();
  return (
    <>
      <Link to="/" className="logo">
        Matthieu Franck
      </Link>
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
      <div className="switchBtns">
        <LanguageBtn />
        <ToggleTheme />
      </div>
    </>
  );
};

export default Navbar;
