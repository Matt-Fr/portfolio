import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const SharedLayout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;
