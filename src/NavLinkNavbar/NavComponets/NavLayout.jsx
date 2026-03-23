import React from "react";
import NavHeadre from "./NavHeadre";
import NavFooter from "./NavFooter"
import { Outlet } from "react-router-dom";

const NavLayout = () => {
  return (
    <div>
      <NavHeadre />
      <main className="h-150">
        <Outlet/>
      </main>
      <NavFooter/>
    </div>
  );
};

export default NavLayout;
