import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FaBars, FaUserCircle } from "react-icons/fa";

import classes from "./css/App.module.css";

import Home from "./home/Home";
import Programs from "./programs/Programs";
import Login from "./login/Login";
import Signup from "./signup/Signup";
import UserProfile from "./profile/UserProfile";
import AdminProfile from "./profile/UserProfile";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    //controls state of App
    this.state = {
      showStudentUserProfile: false,
      showAdminUserProfile: false,
      currentUser: undefined,
    };

    history.listen((location) => {
      props.dispatch(clearMessage()); // clear message when changing location
    });
  }

  // gets invoked right after first render() lifecyle of React component
  componentDidMount() {
    const user = this.props.user;

    if (user) {
      this.setState({
        currentUser: user,
        //showStudentUserProfile: user.roles.includes("ROLE_STUDENT"),
        //showAdminUserProfile: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    this.props.dispatch(logout());
  }


  render() {
    const { currentUser, showStudentUserProfile, showAdminUserProfile } =
      this.state;

    // checks what kind of user is logged in, and will direct them to the according profile
    const CheckProfile = () => {
      if (showAdminUserProfile) {
        return (
          <nav className={classes.NavBtn}>
            <Link to="/adminProfile">
              <FaUserCircle className={classes.Profile} />
            </Link>
          </nav>
        );
      } else {
        return (
          <nav className={classes.NavBtn}>
            <Link to="/userProfile">
              <FaUserCircle className={classes.Profile} />
            </Link>
          </nav>
        );
      }
    };

    //all the pages that are in the website. Each has a different route leads to
    //a page guided by the nav bar.
    return (
      <BrowserRouter location={history.location} navigator={history}>
        <div className={classes.Nav}>
          <FaBars className={classes.Bars} />

          {/* This is the Home link*/}
          <div className={classes.NavMenu}>
            <Link className={classes.NavLink} to="/home" activestyle="true">
              Home
            </Link>
          </div>

          {/* Change this later! right now its showing if not current user */}
          {currentUser && (
            <div className={classes.NavMenu}>
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
          {!currentUser ? (
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
          ) : (
            /* is current user is logged in, will show log out and profile on navbar  */
            <div className={classes.NavMenu}>
              <nav className={classes.NavBtn}>
                <Link
                  to="/login"
                  className={classes.NavBtnLink}
                  onClick={this.logOut}
                >
                  Log out
                </Link>
              </nav>

              {CheckProfile()}
            </div>
          )}
        </div>
        
        <div>
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route path="/programs" element={<Programs />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route path="/adminProfile" element={<AdminProfile />} />
            <Route path="/userProfile" element={<UserProfile />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(App);
