import React from "react";
import { Outlet, Link } from "react-router-dom";
import LanguageBtn from "../components/LanguageBtn";
import Navbar from "../components/Navbar";
import ToggleTheme from "../components/ToggleTheme";

const SharedLayout = () => {
  return (
    <>
      <header className="mainHeader">
        <Link to="/" className="logo">
          MattFr
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
