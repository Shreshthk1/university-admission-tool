import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FaBars, FaUserCircle } from "react-icons/fa";

import navbarClasses from "./css/Navbar.module.css";
import footerClasses from "./css/Footer.module.css";

import Home from "./Pages/Home";
import Programs from "./Pages/Programs";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import UserProfile from "./Pages/UserProfile";
import AdminProfile from "./Pages/UserProfile";
import FrontEndLogIn from "./Pages/FrontEndLogIn";

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
        

        {/* Footer will go below this point! */}
        <footer className={footerClasses.footer}>
          <div className={footerClasses.links}>
            <p><a href="?">Terms of Use</a></p>
            <p>|</p>
            <p><a href="?">Privacy</a></p>
            <p>|</p>
            <p><a href="?">Accessibility</a></p>
            <p>|</p>
            <p><a href="?">Support</a></p>
            <p>|</p>
            <p>Copyright &#169; 2022 <a href="?">Shirah</a> All rights reserved.</p>
          </div>
        </footer>
        
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/programs" element={<Programs />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/frontendlogin" element={<FrontEndLogIn />} />
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
