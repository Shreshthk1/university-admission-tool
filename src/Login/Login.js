import React from "react";
import LoginForm from "./LoginForm";
import "../css/Login_Signup.css";

const Login = () => {
  return (
    <>
      <h1 className='page_title'>Login</h1>
      <div className="Form">
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
