import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthService from "../services/auth_service";

import CreatedPopup from "./CreatedPopup.js";
import classes from "../css/Signup.module.css";

function Signup() {
  const navigate = useNavigate();

  // These track the state of errors of each input that needs to be particular
  const [emailError, setEmailErr] = useState("");
  const [passwordError, setPasswordErr] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  // These track the state  of each input that needs to be sent to the API
  const [f_Name, setFirstName] = useState("");
  const [l_Name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  // tracks the state of the creation popups display. when false it's display is 'none'
  // when true it's display is 'block'
  const [popupDisplayed, setPopupDisplayed] = useState(false);

  // Called when user clicks sign up button, sending the entered information
  // to an API, which checks if they are valid, and sends them to the database
  const handleSignup = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(true);

    AuthService.signup(f_Name, l_Name, email, password).then(
      (response) => {
        setMessage(response.data.message);
        setSuccessful(true);
        window.location.reload();
        setPopupDisplayed((current) => !current);
        setTimeout(function () {
          navigate("/login");
        }, 2000);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setSuccessful(false);
        setMessage(resMessage);
      }
    );
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

  const onChangeFirstName = (e) => {
    const username = e.target.value;
    setFirstName(username);
  };

  const onChangeLastName = (e) => {
    const username = e.target.value;
    setLastName(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeConfirmPassword = (e) => {
    const confirmPassword = e.target.value;
    setConfirmPassword(confirmPassword);
  };

  // The form that appears on the page. Called by Signup.js.
  return (
    <>
      <h1 className={classes.signin_title}>Sign up</h1>
      <div className={classes.form}>
        {/* this popup is not displayed until user successfully creates account. */}
        <div style={{ display: popupDisplayed ? "block" : "none" }}>
          <CreatedPopup />
        </div>

        <form onSubmit={handleSignup}>
          {!successful && (
            <div className={classes.container}>
              {/* First name input */}
              <label htmlFor="firstName">
                <b>First Name*</b>
              </label>
              <input
                type="text"
                placeholder="Enter First Name"
                name="firstName"
                value={f_Name}
                onChange={onChangeFirstName}
                required
              />

              {/* Last name input */}
              <label htmlFor="lastName">
                <b>Last Name*</b>
              </label>
              <input
                type="text"
                placeholder="Enter Last Name"
                name="lastName"
                value={l_Name}
                onChange={onChangeLastName}
                required
              />

              {/* Email input */}
              <label htmlFor="email">
                <b>Email*</b>
              </label>
              <input
                type="email"
                placeholder="Email@email.com"
                name="email"
                value={email}
                onChange={onChangeEmail}
                onKeyUp={handleEmailValidation}
                required
              />
              <p className={classes.input_error}>{emailError}</p>

              {/* Password input */}
              <div>
                <label htmlFor="password">
                  <b>Password*</b>
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={onChangePassword}
                  onKeyUp={handlePasswordValidation}
                  required
                />
                <p className={classes.input_error}>{passwordError}</p>
              </div>

              {/* Password again input */}
              <div>
                <label htmlFor="confirmPassword">
                  <b>Password Again*</b>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  onChange={onChangeConfirmPassword}
                  onKeyUp={handlePasswordValidation}
                  required
                />
                <p className={classes.input_error}>{confirmPasswordError}</p>
              </div>

              {/* Signup button */}
              <button className={classes.confirm_button}>Sign up</button>
            </div>
          )}

          {/* message on why sign up did not work */}
          <div>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;
