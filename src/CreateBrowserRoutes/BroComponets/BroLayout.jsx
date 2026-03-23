import React from "react";
import BroNavbar from "./BroNavbar";
import { Outlet } from "react-router-dom";

const BroLayout = () => {
  return (
    <div>
      <BroNavbar />
      <Outlet/>
    </div>
  );
};

export default BroLayout;
