import React from "react";
import propTypes from 'prop-types';
import LoginForm from "./LoginForm";

import classes from "../css/Login.module.css";

export default function Login({ setToken }) {
  return (
    <>
      <h1 className={classes.login_title}>Login</h1>
      <div className="Form">
        <LoginForm setToken={setToken} />
      </div>
    </>
  );
};

Login.propTypes = {
  setToken: propTypes.func.isRequired
}
