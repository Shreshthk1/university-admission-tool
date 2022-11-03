import React from "react";
import LoginForm from "./LoginForm";

import classes from "../css/Login.module.css";

const Login = () => {
  return (
    <>
      <h1 className={classes.login_title}>Login</h1>
      <div className="Form">
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
