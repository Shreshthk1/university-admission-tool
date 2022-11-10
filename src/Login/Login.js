import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthService from "../services/auth_service";

import classes from "../css/Login.module.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  // Called when user clicks log in button, sending the entered information
  // to an API, which checks if they are valid, and sends them to the database
  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    AuthService.login(email, password).then(
        () => {
          navigate("/profile");
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
  };

  return (
    <>
      <h1 className={classes.login_title}>Login</h1>

      <form className={classes.form} onSubmit={handleLogin}>
        <div className={classes.container}>
          {/* Email input */}
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={onChangeEmail}
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
            value={password}
            onChange={onChangePassword}
            required
          />

          {/* Remember me check box */}
          <label className={classes.checkbox}>
            <input type="checkbox" id="remember" name="remember" />
            <label>Remember me</label>
          </label>

          {/* Login button */}
          <button className={classes.confirm_button} disabled={loading}>
              {loading && (
                <span></span>
              )}
              <span>Login</span>
          </button>

          {/* message on why login did not work */}
          <div>
            <p>{message}</p>
          </div>

        </div>
      </form>
    </>
  );
}

export default Login;
