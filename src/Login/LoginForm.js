import React from "react";

const LoginForm = () => {
  return (
    <form className="form" action="" method="post">
      <div className="container">
        <label for="email">
          <b>Email</b>
        </label>
        <input type="text" placeholder="Enter Email" name="email" required />

        <label for="psw">
          <b>Password</b>
        </label>
        <input className="login_pass" type="password" placeholder="Enter Password" name="psw" required />
        <label className="checkbox">
          <input type="checkbox" id="remember" name="remember" />
          <label for="remember">Remember me</label>
        </label>
        <button className="confirm_button" type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
