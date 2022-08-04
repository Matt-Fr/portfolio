import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useGlobalContext } from "../context";
import LanguageBtn from "../components/LanguageBtn";
import ToggleTheme from "../components/ToggleTheme";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    if (showLinks === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showLinks]);
  const { writeBilingualContent } = useGlobalContext();
  return (
    <header className="mainHeader">
      <Link to="/" className="logo">
        Matthieu Franck
      </Link>
      <nav className={showLinks ? "navbar show-nav" : "navbar"}>
        <NavLink className="navbar-element" to="/" onClick={handleShowLinks}>
          {writeBilingualContent("Home", "Accueil")}
        </NavLink>
        <NavLink
          className="navbar-element"
          to="projects"
          onClick={handleShowLinks}
        >
          {writeBilingualContent("Projects", "Projets")}
        </NavLink>
        <NavLink
          onClick={handleShowLinks}
          className="navbar-element"
          to="contact"
        >
          {writeBilingualContent("Contact", "Contact")}
        </NavLink>
        <button className="hamburger" onClick={handleShowLinks}>
          <span className="hamburger-bar"></span>
        </button>
      </nav>
      <div className={showLinks ? "switchBtns show-btns" : "switchBtns"}>
        <LanguageBtn />
        <ToggleTheme />
      </div>
    </header>
  );
};

export default Navbar;
