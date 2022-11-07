import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaUserCircle, FaCopyright } from "react-icons/fa";
import classes from "../css/NavBar.module.css";

const NavBar = () => {

  //The nav bar that appears on the page. Called by App.js.
  return (
    <div className={classes.Nav}>
      <FaBars className={classes.Bars} />
      <div className={classes.NavMenu}>
        <Link className={classes.NavLink} to="/home" activestyle='true'>
          <FaCopyright className="Logo" />
        </Link>
        <Link className={classes.NavLink} to="/universities" activestyle='true'>
          Universities
        </Link>
        <Link className={classes.NavLink} to="/programs" activestyle='true'>
          Programs
        </Link>
      </div>
      <nav className={classes.NavBtn}>
        <Link className={classes.NavBtnLink} to="/signup">
          Sign up
        </Link>
      </nav>
      <nav className={classes.NavBtn}>
        <Link className={classes.NavBtnLink} to="/login">
          Login
        </Link>
      </nav>
      <nav className={classes.NavBtn}>
        <Link to="/profile">
          <FaUserCircle className={classes.Profile} />
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
