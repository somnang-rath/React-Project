import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <nav className="">
      <NavBar />
      <Outlet />
    </nav>
  );
};

export default RootLayout;
