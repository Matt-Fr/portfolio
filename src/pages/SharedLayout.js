import React from "react";
import { Outlet } from "react-router-dom";
import Background from "../components/Background";
import Navbar from "../components/Navbar";
import "./SharedLayout.scss";

const SharedLayout = () => {
  return (
    <>
      <Background />
      <header className="mainHeader">
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;
