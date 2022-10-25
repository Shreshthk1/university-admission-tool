import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaUserCircle, FaCopyright } from "react-icons/fa";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="Nav">
      <FaBars className="Bars" />
      <div className="NavMenu">
        <Link className="NavLink" to="/home" activeStyle>
          <FaCopyright className="Logo" />
        </Link>
        <Link className="NavLink" to="/universities" activeStyle>
          Universities
        </Link>
        <Link className="NavLink" to="/programs" activeStyle>
          Programs
        </Link>
      </div>
      <nav className="NavBtn">
        <Link className="NavBtnLink" to="/signup">
          Sign in
        </Link>
      </nav>
      <nav className="NavBtn">
        <Link className="NavBtnLink" to="/login">
          Login
        </Link>
      </nav>
      <nav className="NavBtn">
        <Link to="/profile">
          <FaUserCircle className="Profile" />
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
