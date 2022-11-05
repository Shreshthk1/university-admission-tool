import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

import config from "../config.js";
import CreatedPopup from "./CreatedPopup.js";
import classes from "../css/SignupForm.module.css"

function SignupForm() {
  const navigate = useNavigate();

  // These track the state of errors of each input that needs to be particular
  const [emailError, setEmailErr] = useState("");
  const [passwordError, setPasswordErr] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  // These track the state  of each input that needs to be sent to the API
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // tracks the state of the creation popups display. when false it's display is 'none'
  // when true it's display is 'block'
  const [popupDisplayed, setPopupDisplayed] = useState(false);

  // Called when user clicks sign up button, sending the entered information
  // to an API, which checks if they are valid, and sends them to the database
  const addUser = (e) => {
    Axios.post(
      config.uniAdminToolServer.location,
      {
        "userEmail": `${userEmail}`,
        "password": `${password}`,
        "firstName": `${firstName}`,
        "lastName": `${lastName}`
      }).then(() => {
        console.log("success");
        setPopupDisplayed(current => !current)
        setTimeout(function () {
          navigate("/login");
        }, 3000);
      })
  };

  // Checks email when each character is typed in by the user, to see if valid.
  // updates a p tag with what is still needed for it to be valid.
  const handleEmailValidation = (evnt) => {
    const emailInputValue = evnt.target.value.trim();
    const emailInputFieldName = evnt.target.name;
    //for email
    if (emailInputFieldName === "email") {
      let emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]{3,}(?:\.{1}[a-zA-Z0-9-]{2,})*$/;
      let errMsg = "";
      if (emailInputValue.length === 0) {
        errMsg = "";
      } else if (!emailInputValue.match(emailRegex)) {
        errMsg = "Email is not valid";
      }
      setEmailErr(errMsg);
    }
  };

  // Checks password when each character is typed in by the user, to see if valid.
  // updates a p tag with what is still needed for it to be valid.
  const handlePasswordValidation = (evnt) => {
    const passwordInputValue = evnt.target.value.trim();
    const passwordInputFieldName = evnt.target.name;
    //for password
    if (passwordInputFieldName === "password") {
      const uppercaseRegExp = /(?=.*?[A-Z])/;
      const lowercaseRegExp = /(?=.*?[a-z])/;
      const digitsRegExp = /(?=.*?[0-9])/;
      const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
      const minLengthRegExp = /.{8,}/;
      const passwordLength = passwordInputValue.length;
      const uppercasePassword = uppercaseRegExp.test(passwordInputValue);
      const lowercasePassword = lowercaseRegExp.test(passwordInputValue);
      const digitsPassword = digitsRegExp.test(passwordInputValue);
      const specialCharPassword = specialCharRegExp.test(passwordInputValue);
      const minLengthPassword = minLengthRegExp.test(passwordInputValue);
      let errMsg = "";
      if (passwordLength === 0) {
        errMsg = "";
      } else if (!uppercasePassword) {
        errMsg = "At least one Uppercase";
      } else if (!lowercasePassword) {
        errMsg = "At least one Lowercase";
      } else if (!digitsPassword) {
        errMsg = "At least one digit";
      } else if (!specialCharPassword) {
        errMsg = "At least one Special Characters";
      } else if (!minLengthPassword) {
        errMsg = "At least minumum 8 characters";
      }
      setPasswordErr(errMsg);
    }
    // for confirm password
    if (
      passwordInputFieldName === "confirmPassword" ||
      (passwordInputFieldName === "password" && confirmPassword.length > 0)
    ) {
      if (confirmPassword !== password) {
        setConfirmPasswordError("Confirm password is not matched");
      } else {
        setConfirmPasswordError("");
      }
    }
  };

  // The form that appears on the page. Called by Signup.js.
  return (
    <>
      <div className={classes.form}>
        {/* this popup is not displayed until user successfully creates account. */}
        <div style={{display: popupDisplayed ? 'block' : 'none'}}>
          <CreatedPopup />
        </div>

        <div className={classes.container}>
          {/* First name input */}
          <label>
            <b>First Name*</b>
          </label>
          <input
            type="text"
            placeholder="Enter First Name"
            name="firstName"
            required
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
          
          {/* Last name input */}
          <label>
            <b>Last Name*</b>
          </label>
          <input
            type="text"
            placeholder="Enter Last Name"
            name="lastName"
            required
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          />

          {/* Email input */}
          <label for="email">
            <b>Email*</b>
          </label>
          <input
            type="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            onKeyUp={handleEmailValidation}
            name="email"
            placeholder="Email"
            required
          />
          <p className={classes.input_error}>{emailError}</p>

          {/* Password input */}  
          <div>
            <label for="password">
              <b>Password*</b>
            </label>
            <input
              type="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              onKeyUp={handlePasswordValidation}
              name="password"
              placeholder="Password"
              required
            />
            <p className={classes.input_error}>{passwordError}</p>
          </div>

          {/* Password again input */}  
          <div>
            <label for="confirmPassword">
              <b>Password Again*</b>
            </label>
            <input
              type="password"
              onChange={(event) => {
                setConfirmPassword(event.target.value);
              }}
              onKeyUp={handlePasswordValidation}
              name="confirmPassword"
              placeholder="Password"
              required
            />
            <p className={classes.input_error}>{confirmPasswordError}</p>
          </div>

          {/* Signup button */}  
          <button className={classes.confirm_button} onClick={addUser}>
            Sign up
          </button>
        </div>
      </div>
    </>
  );
}

export default SignupForm;
