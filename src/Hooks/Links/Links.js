import React from "react";
import { NavLink } from "react-router-dom";
import "./Links.css";

const Links = () => {
  return (
    <ul className="links">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/About">About</NavLink>
      </li>
      <li>
        <NavLink to="/Resume">Resume</NavLink>
      </li>
      {/* <li>
        <NavLink to="/Services">Services</NavLink>
      </li> */}
      <li>
        <NavLink to="/Portfolio">Portfolio</NavLink>
      </li>
      <li>
        <NavLink to="/Contact">Contact</NavLink>
      </li>
    </ul>
  );
};

export default Links;
