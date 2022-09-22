import React from "react";
import Links from "../Links/Links";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="content contener">
        <div className="name">Nour Khattab</div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
