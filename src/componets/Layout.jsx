import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="w-full h-140 bg-amber-300 text-black flex justify-center items-center">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
