import React from "react";
import { Outlet } from "react-router-dom";
import Background from "../components/Background";
import Navbar from "../components/Navbar";
import "./SharedLayout.scss";

const SharedLayout = () => {
  return (
    <>
      <Background />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;
