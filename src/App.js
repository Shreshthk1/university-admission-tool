import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaUserCircle, FaCopyright } from "react-icons/fa";
import classes from "./css/App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AuthService from "./services/auth_service";

import Home from "./home/Home";
import Login from "./login/Login";
import SignupForm from "./signup/Signup";
import UserProfile from "./profile/UserProfile";
import AdminProfile from "./profile/UserProfile";

import EventBus from "./common/EventBus";
import Programs from "./programs/Programs";

function App() {

  const { adminUser, setAdminUser } = useState(false);
  const { currentUser, setCurrentUser } = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      //setAdminUser(user.roles.includes("ROLE_ADMIN"));
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setAdminUser(false);
    setCurrentUser(undefined);
  };

  {/* checks what kind of user is logged in, and will direct them to the according profile */}
  const CheckProfile = () => {
    if (adminUser) {
      return (
        <nav className={classes.NavBtn}>
          <Link to="/adminProfile">
            <FaUserCircle className={classes.Profile} />
          </Link>
        </nav>
      )
    } else {
      return (
        <nav className={classes.NavBtn}>
          <Link to="/userProfile">
            <FaUserCircle className={classes.Profile} />
          </Link>
        </nav>
      )
    }   
  }

  //all the pages that are in the website. Each has a different route leads to
  //a page guided by the nav bar.
  return (
    <>
      <Router>
        <div className={classes.Nav}>
          <FaBars className={classes.Bars} />
          <div className={classes.NavMenu}>
            <Link className={classes.NavLink} to="/" activestyle="true">
              <FaCopyright className="Logo" />
            </Link>
          </div>

          {/* Change this later! right now its showing if not current user */}
          {!currentUser && (
            <div className={classes.NavMenu}>
              <Link
                className={classes.NavLink}
                to="/universities"
                activestyle="true"
              >
                Universities
              </Link>
              <Link
                className={classes.NavLink}
                to="/programs"
                activestyle="true"
              >
                Programs
              </Link>
            </div>
          )}

          {/* if current user is not logged in, will show signup and login on navbar  */}
          {currentUser ? (
            <div className={classes.NavMenu}>
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
            </div>
          /* is current user is logged in, will show log out and profile on navbar  */
          ) : (
            <div className={classes.NavMenu}>
              <nav className={classes.NavBtn}>
                <a href="/login" className={classes.NavBtnLink} onClick={logOut}>
                  Log out
                </a>
              </nav>

              {CheckProfile()}
            </div>
          )}
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/adminProfile" element={<AdminProfile />} />
          <Route path="/userProfile" element={<UserProfile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
