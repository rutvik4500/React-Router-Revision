import React from "react";
import { NavLink } from "react-router-dom";

const NavHeadre = () => {
  return (
    <div>
      <header className="bg-red-300 flex justify-center items-center w-full h-20">
        <ul className="flex justify-between items-center w-125">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `p-2 rounded-lg font-semibold ${
                  isActive
                    ? "bg-red-400 text-amber-50"
                    : "bg-amber-50 text-red-400"
                }`
              }
            >
              User-Admin
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to={"/userconcat"}
              className={({ isActive }) =>
                `p-2 rounded-lg font-semibold ${
                  isActive
                    ? "bg-red-400 text-amber-50"
                    : "bg-amber-50 text-red-400 font-semibold"
                }`
              }
            >
              User-Concat-Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/usersetting"}
              className={({ isActive }) =>
                `p-2 rounded-lg font-semibold ${
                  isActive
                    ? "bg-red-400 text-amber-50"
                    : "bg-amber-50 text-red-400"
                }`
              }
            >
              User-Setting
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default NavHeadre;
