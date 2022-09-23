import React, { useRef } from "react";
import "./NavBarForMobile.css";
import { NavLink } from "react-router-dom";
import Links from "../Links/Links";
import { useEffect } from "react";
import { useState } from "react";

const NavbarForMobile = () => {
  const [show, setShow] = useState(true);
  const [x, setX] = useState(100);
  const toogleShow = () => {
    show ? setX(0) : setX(100);
    setShow(!show);
    show ? (document.body.style.overflowY = "hidden") : (document.body.style.overflowY = "visible");
  };
  return (
    <div className="navForMobile">
      <div className="toogle" onClick={toogleShow}></div>
      <div className="sidebar" style={{ transform: `translate(${x}%, 0` }}>
        <ul className="ul">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            <NavLink to="/Resume">Resume</NavLink>
          </li>
          <li>
            <NavLink to="/Services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/Portfolio">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarForMobile;
