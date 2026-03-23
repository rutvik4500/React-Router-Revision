import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="w-full h-20 shadow-xl flex justify-between items-center px-10">
        <aside>
          <span className="text-3xl font-semibold text-yellow-500">E-</span>
          <span className="text-3xl font-semibold text-gray-700">commerce</span>
        </aside>
        <nav className=" flex justify-evenly items-center ">
          <ul className="w-150 flex justify-between  items-center px-3">
            <li className="text-xl font-semibold text-gray-700 hover:font-bold">
             <Link to={"/"}>Home</Link>
            </li>
            <li  className="text-xl font-semibold text-gray-700 hover:font-bold">
              <Link to={"/about"}>About</Link>
            </li>
            <li  className="text-xl font-semibold text-gray-700 hover:font-bold">
            <Link to={"/product"}>Products</Link>
            </li>
              <li  className="text-xl font-semibold text-gray-700 hover:font-bold">
             <Link to={"/contactus"}>Contact Us</Link>
            </li>
           
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
