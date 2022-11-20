import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FaBars, FaUserCircle } from "react-icons/fa";

import navbarClasses from "./css/Navbar.module.css";
import footerClasses from "./css/Footer.module.css";

import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UserProfile from "./pages/UserProfile";
import AdminProfile from "./pages/UserProfile";

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined,
      userRole: undefined,
    };

    // whenever the current location changes, this is run and clears any system messages
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
      });

    }
  }

  logOut() {
    this.props.dispatch(logout());
    this.setState({
      currentUser: undefined,
    });
  }


  render() {
    const { currentUser, userRole } =
      this.state;

    // checks what kind of user is logged in, and will direct them to the according profile
    const CheckProfile = () => {
      if (userRole === "ADMIN") {
        return (
          <nav className={navbarClasses.NavBtn}>
            <Link to="/adminProfile">
              <FaUserCircle className={navbarClasses.Profile} />
            </Link>
          </nav>
        );
      } else {
        return (
          <nav className={navbarClasses.NavBtn}>
            <Link to="/userProfile">
              <FaUserCircle className={navbarClasses.Profile} />
            </Link>
          </nav>
        );
      }
    };

    //all the pages that are in the website. Each has a different route leads to
    //a page guided by the nav bar.
    return (
      <BrowserRouter location={history.location} navigator={history}>
        <div className={navbarClasses.Nav}>
          <FaBars className={navbarClasses.Bars} />

          {/* This is the Home link*/}
          <div className={navbarClasses.NavMenu}>
            <Link className={navbarClasses.NavLink} to="/" activestyle="true">
              Home
            </Link>
          </div>

          {/* Change this later! right now its showing if not current user */}
          {currentUser && (
            <div className={navbarClasses.NavMenu}>
              <Link
                className={navbarClasses.NavLink}
                to="/programs"
                activestyle="true"
              >
                Programs
              </Link>
            </div>
          )}

          {/* if current user is not logged in, will show signup and login on navbar  */}

          {!currentUser ? (
            <div className={navbarClasses.NavMenu}>
              <nav className={navbarClasses.NavBtn}>
                <Link className={navbarClasses.NavBtnLink} to="/signup">
                  Sign up
                </Link>
              </nav>
              <nav className={navbarClasses.NavBtn}>
                <Link className={navbarClasses.NavBtnLink} to="/login">
                  Login
                </Link>
              </nav>
            </div>
          ) : (
            /* is current user is logged in, will show log out and profile on navbar  */
            <div className={navbarClasses.NavMenu}>
              <nav className={navbarClasses.NavBtn}>
                <Link
                  className={navbarClasses.NavBtnLink}
                  to="/login"
                  onClick={this.logOut}
                >
                  Log out
                </Link>
              </nav>

              {CheckProfile()}
            </div>
          )}
        </div>

        {/* Footer will go below this point! */}
        <footer className={footerClasses.footer}>
          <p>This is a basic footer... please edit me!</p>
        </footer>
        
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/programs" element={<Programs />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route path="/userProfile" element={<UserProfile />} />
            <Route path="/adminProfile" element={<AdminProfile />} />
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
