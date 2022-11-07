import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

import config from "../config.js";
import classes from "../css/LoginForm.module.css";

function LoginForm({ setToken }) {
  const navigate = useNavigate();

  const [userEmail, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Called when user clicks log in button, sending the entered information
  // to an API, which checks if they are valid, and sends them to the database
  const confirmUser = async (e) => {
    //prevents form from refreshing
    e.preventDefault();

    const credentials = {
      userEmail: `${userEmail}`,
      password: `${password}`,
    };
    Axios.post(config.uniAdminToolServer.login_location, credentials).then(
      () => {
        console.log("success");
        setToken(credentials);
        setTimeout(function () {
          navigate("/profile");
        }, 2000);
      }
    );
  };

  return (
    <form
      className={classes.form}
      onSubmit={confirmUser}
    >
      <div className={classes.container}>
        {/* Email input */}
        <label>
          <b>Email</b>
        </label>
        <input
          type="text"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          name="email"
          placeholder="Enter Email"
          required
        />

        {/* Password input */}
        <label>
          <b>Password</b>
        </label>
        <input
          type="password"
          className="login_pass"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          name="psw"
          placeholder="Enter Password"
          required
        />

        {/* Remember me check box */}
        <label className={classes.checkbox}>
          <input type="checkbox" id="remember" name="remember" />
          <label>Remember me</label>
        </label>

        {/* Login button */}
        <button className={classes.confirm_button} type="submit">
          Login
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
