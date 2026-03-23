import React from "react";
import { Link } from "react-router-dom";

const NetsNavbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={"homee"}>Home</Link>
        </li>
        <li>
          <Link to={"about"}>About</Link>
        </li>
        <li>
          <Link to={"profile"}>Profil</Link>
        </li>
        <li>
          <Link to={"admin"}>Admin</Link>
        </li>
      </ul>
    </div>
  );
};

export default NetsNavbar;
