import React from "react";
import { Outlet, Link } from "react-router-dom";
import Background from "../components/Background";
import LanguageBtn from "../components/LanguageBtn";
import Navbar from "../components/Navbar";
import ToggleTheme from "../components/ToggleTheme";

const SharedLayout = () => {
  return (
    <>
      <Background />
      <header className="mainHeader">
        <Link to="/" className="logo">
          Matthieu Franck
        </Link>
        <Navbar />
        <div className="switchBtns">
          <LanguageBtn />
          <ToggleTheme />
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;
