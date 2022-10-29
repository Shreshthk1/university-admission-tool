import React, { useState } from "react"
import Axios from "axios"

function SignupForm() {
  const [emailError, setEmailErr] = useState("")
  const [passwordError, setPasswordErr] = useState("")
  const [confirmPasswordError, setConfirmPasswordError] = useState("")

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [dob, setDob] = useState(0)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const addUser = () => {
    Axios.post(
      "https://university-admission-server.herokuapp.com/api/usermanagement/register",
      {
        firstName: firstName,
        lastName: lastName,
        dob: dob,
        email: email,
        password: password,
      }).then(() => {
        console.log("success");
      })
  }

  const handleEmailValidation = (evnt) => {
    const emailInputValue = evnt.target.value.trim()
    const emailInputFieldName = evnt.target.name
    //for email
    if (emailInputFieldName === "email") {
      let emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]{3}(?:\.{1}[a-zA-Z0-9-]{2})*$/
      let errMsg = ""
      if (emailInputValue.length === 0) {
        errMsg = ""
      } else if (!emailInputValue.match(emailRegex)) {
        errMsg = "Email is not valid"
      }
      setEmailErr(errMsg)
    }
  }

  const handlePasswordValidation = (evnt) => {
    const passwordInputValue = evnt.target.value.trim()
    const passwordInputFieldName = evnt.target.name
    //for password
    if (passwordInputFieldName === "password") {
      const uppercaseRegExp = /(?=.*?[A-Z])/
      const lowercaseRegExp = /(?=.*?[a-z])/
      const digitsRegExp = /(?=.*?[0-9])/
      const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/
      const minLengthRegExp = /.{8,}/
      const passwordLength = passwordInputValue.length
      const uppercasePassword = uppercaseRegExp.test(passwordInputValue)
      const lowercasePassword = lowercaseRegExp.test(passwordInputValue)
      const digitsPassword = digitsRegExp.test(passwordInputValue)
      const specialCharPassword = specialCharRegExp.test(passwordInputValue)
      const minLengthPassword = minLengthRegExp.test(passwordInputValue)
      let errMsg = ""
      if (passwordLength === 0) {
        errMsg = ""
      } else if (!uppercasePassword) {
        errMsg = "At least one Uppercase"
      } else if (!lowercasePassword) {
        errMsg = "At least one Lowercase"
      } else if (!digitsPassword) {
        errMsg = "At least one digit"
      } else if (!specialCharPassword) {
        errMsg = "At least one Special Characters"
      } else if (!minLengthPassword) {
        errMsg = "At least minumum 8 characters"
      }
      setPasswordErr(errMsg);
    }
    // for confirm password
    if (
      passwordInputFieldName === "confirmPassword" ||
      (passwordInputFieldName === "password" &&
        confirmPassword.length > 0)
    ) {
      if (confirmPassword !== password) {
        setConfirmPasswordError("Confirm password is not matched")
      } else {
        setConfirmPasswordError("")
      }
    }
  }

  return (
    <div className="form">
      <div className="container">
        <label>
          <b>First Name*</b>
        </label>
        <input
          type="text"
          placeholder="Enter First Name"
          name="firstName"
          required
          onChange={(event) => {
            setFirstName(event.target.value)
          }}
        />
        <label>
          <b>Last Name*</b>
        </label>
        <input
          type="text"
          placeholder="Enter Last Name"
          name="lastName"
          required
          onChange={(event) => {
            setLastName(event.target.value)
          }}
        />

        <label>
          <b>Date of Bith*</b>
        </label>
        <input
          type="date"
          name="dob"
          required
          onChange={(event) => {
            setDob(event.target.value)
          }}
        />

        <label for="email">
          <b>Email*</b>
        </label>
        <input
          type="email"
          onChange={(event) => {
            setEmail(event.target.value)
          }}
          onKeyUp={handleEmailValidation}
          name="email"
          placeholder="Email"
          required
        />
        <p className="input-error">{emailError}</p>

        <div>
          <label for="password">
            <b>Password*</b>
          </label>
          <input
            type="password"
            onChange={(event) => {
              setPassword(event.target.value)
            }}
            onKeyUp={handlePasswordValidation}
            name="password"
            placeholder="Password"
            required
          />
          <p className="input-error">{passwordError}</p>
        </div>
        <div>
          <label for="confirmPassword">
            <b>Password Again*</b>
          </label>
          <input
            type="password"
            onChange={(event) => {
              setConfirmPassword(event.target.value)
            }}
            onKeyUp={handlePasswordValidation}
            name="confirmPassword"
            placeholder="Password"
            required
          />
          <p className="input-error">{confirmPasswordError}</p>
        </div>

        <button className="confirm_button" onClick={addUser}>
          Sign up
        </button>
      </div>
    </div>
  );
}

export default SignupForm
