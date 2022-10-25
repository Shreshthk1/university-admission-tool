import React from "react";
import "./LoginForm.css";

const LoginForm = () => {
  return (
    <form action="" method="post">
      <div className="container">
        <label for="email">
          <b>Email</b>
        </label>
        <input type="text" placeholder="Enter Email" name="email" required />

        <label for="psw">
          <b>Password</b>
        </label>
        <input type="password" placeholder="Enter Password" name="psw" required />
        <label className="checkbox">
          <input type="checkbox" id="remember" name="remember" />
          <label for="remember">Remember me</label>
        </label>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
