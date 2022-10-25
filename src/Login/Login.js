import React from "react";
import LoginForm from "./LoginForm";
import "./Login.css";

const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <div className="Form">
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
