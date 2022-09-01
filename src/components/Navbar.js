import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useGlobalContext } from "../context";
import LanguageBtn from "../components/LanguageBtn";
import ToggleTheme from "../components/ToggleTheme";

const Navbar = () => {
  const { writeBilingualContent, openModal } = useGlobalContext();
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

  return (
    <header className="mainHeader">
      <Link to="/" className="logo">
        MattFR
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
      </nav>
      <div className={showLinks ? "switchBtns show-btns" : "switchBtns"}>
        <LanguageBtn />
        <ToggleTheme />
      </div>
      {openModal ? (
        ""
      ) : (
        <button
          className={showLinks ? "hamburger hamburger-anim" : "hamburger"}
          onClick={handleShowLinks}
        >
          <span className="hamburger-bar"></span>
        </button>
      )}
    </header>
  );
};

export default Navbar;
