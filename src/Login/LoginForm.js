import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Axios from "axios"

import classes from "../css/LoginForm.module.css"

const LoginForm = () => {
  return (
    <form className={classes.form} action="" method="post">
      <div className={classes.container}>
        <label for="email">
          <b>Email</b>
        </label>
        <input type="text" placeholder="Enter Email" name="email" required />

        <label for="psw">
          <b>Password</b>
        </label>
        <input className="login_pass" type="password" placeholder="Enter Password" name="psw" required />
        <label className={classes.checkbox}>
          <input type="checkbox" id="remember" name="remember" />
          <label for="remember">Remember me</label>
        </label>
        <button className={classes.confirm_button} type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
