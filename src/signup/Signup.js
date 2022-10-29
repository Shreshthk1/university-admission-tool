import React from 'react';
import SignupForm from './SignupForm';
import "../css/Login_Signup.css";
  
const Signup = () => {
  return (
    <>
      <h1 className='page_title'>Sign up</h1>
      <div className="Form">
        {/* sets up the form */}
        <SignupForm />
      </div>
    </>
  );
};
  
export default Signup;