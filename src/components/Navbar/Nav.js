import React from "react";
import "../../index.css";
import "./style.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <h2 className="logo-text">Ultra Profile</h2>
        </div>

        <ul className="ul-list">
          <li className="list-item">
            <NavLink to="/">Home </NavLink>
          </li>
          <li className="list-item">
            {" "}
            <NavLink to="/work">Work </NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/portfolio">Portfolio </NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/profile">Profile </NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/about">About </NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
