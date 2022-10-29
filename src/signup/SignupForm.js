import React from "react";
import PasswordValidation from "./password/PasswordValidation";
import EmailValidation from "./email/EmailValidation";

const SignupForm = () => {
  return (
    <form className="form" action="" method="post">
      <div className="container">
      <label for="firstName">
          <b>First Name*</b>
        </label>
        <input type="text" placeholder="Enter First Name" name="firstName" required />
        <label for="lastName">
          <b>Last Name*</b>
        </label>
        <input type="text" placeholder="Enter Last Name" name="lastName" required />

        <label for="dob">
          <b>Date of Bith*</b>
        </label>
        <input type="date" name="dob" required />

        {/* Class sets up email input and checks for certain requirements. */}
        <EmailValidation />

        {/* Class sets up both password inputs and checks for certain requirements. */}
        <PasswordValidation />
        <button className="confirm_button" type="submit">Sign up</button>
      </div>
    </form>
  );
};

export default SignupForm;