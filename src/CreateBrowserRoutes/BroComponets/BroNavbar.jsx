import React from "react";
import { Link } from "react-router-dom";

const BroNavbar = () => {
  return (
    <div>
      <ul className="flex justify-center items-center h-20 border ">
        <li className="flex w-60 justify-around">
          <Link to={"/"}>Admin</Link>
          <Link to={"/brosetting"}>Setting</Link>
          <Link to={"/broprofile"}>Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default BroNavbar;
