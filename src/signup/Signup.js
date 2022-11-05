import React from 'react'
import SignupForm from './SignupForm'

import classes from "../css/Signup.module.css"
  
const Signup = () => {
  return (
    <>
      <h1 className={classes.signin_title}>Sign up</h1>
      <div className="Form">
        {/* sets up the form */}
        <SignupForm />
      </div>
    </>
  );
};
  
export default Signup;