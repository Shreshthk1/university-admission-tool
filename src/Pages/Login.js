import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import {withRouter} from "../helpers/withRouter";
import { connect } from "react-redux";

import { login } from "../actions/auth";

import classes from "../css/Login.module.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    // controls state of Login.
    this.state = {
      email: "",
      password: "",
      loading: false,
    };
  }

  // Changes state value of email as info is typed into the input field
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  };

  // Changes state value of password as info is typed into the input field
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  };

  // Called when user clicks log in button with filled information, sending the entered information to an API.
  // which then checks if they are valid, and sends them to the database
  handleLogin(e) {
    e.preventDefault();

    this.setState({
      loading: true,
    })

    const { dispatch, history } = this.props;

    if (this.state.email !== "" && this.state.password !== "") {
      dispatch(login(this.state.email, this.state.password))
        .then(() => {
          this.sendToHome();
          window.location.reload();
        })
        .catch(() => {
          this.setState({
            loading: false
          });
        });
    } else {
      this.setState({
        loading: false,
      });
    }
  }

  sendToHome() {
    this.props.navigate("/");
  }

  // renders HTML to the web page, and enables reading props and state and return our JSX code to the root of the app.
  render() {
    const {isLoggedIn, message} = this.props;

    if (isLoggedIn) {
      return <Navigate to="/userProfile" />
    }

    return (
      <>
      <h1 className={classes.login_title}>Login</h1>

      <form className={classes.form} onSubmit={this.handleLogin}>
        <div className={classes.container}>

          {/* Email input */}
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.onChangeEmail}
            required
          />

          {/* Password input */}
          <label>
            <b>Password</b>
          </label>
          <input
            type="password"
            className="login_pass"
            name="password"
            value={this.state.password}
            onChange={this.onChangePassword}
            required
          />

          {/* Login button */}
          <button className={classes.confirm_button} disabled={this.state.loading}>
              {this.state.loading && (
                <span></span>
              )}
              <span>Login</span>
          </button>
        </div>

        {/* message on why login did not work */}
        {message && (
              <div>
                <div>
                  {message}
                </div>
              </div>
            )}
      </form>
    </>
    )
  }
}

// This connects the react components to a Redux store
function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const { message } = state.message;
  return {
    isLoggedIn,
    message
  };
}

export default withRouter(connect(mapStateToProps)(Login));
