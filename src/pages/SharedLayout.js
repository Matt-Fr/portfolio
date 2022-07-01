import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import ToggleTheme from "../components/ToggleTheme";

const SharedLayout = () => {
  return (
    <>
      <header className="mainHeader">
        <ToggleTheme />
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;
