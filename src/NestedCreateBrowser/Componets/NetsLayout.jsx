import React from "react";
import NetsNavbar from "./NetsNavbar";
import { Outlet } from "react-router-dom";

const NetsLayout = () => {
  return (
    <div>
      <NetsNavbar />
      <hr />
      <Outlet />
    </div>
  );
};

export default NetsLayout;
