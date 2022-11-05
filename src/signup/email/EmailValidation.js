import React, { useState } from "react";
import EmailInputField from "./EmailInputField.js";

function EmailValidation() {
  const [emailError, setEmailErr] = useState("");
  const [emailInput, setEmailInput] = useState("");

  const handleEmailChange = (evnt) => {
    const emailInputValue = evnt.target.value.trim();
    const emailInputFieldName = evnt.target.name;
    const NewEmailInput = {
      ...emailInput,
      [emailInputFieldName]: emailInputValue,
    };
    setEmailInput(NewEmailInput);
  };

  const handleValidation = (evnt) => {
    const emailInputValue = evnt.target.value.trim();
    const emailInputFieldName = evnt.target.name;
    //for email
    if (emailInputFieldName === "email") {
      let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      let errMsg = "";
      if (emailInputValue.length === 0) {
        errMsg = "";
      } else if (!emailInputValue.match(emailRegex)) {
        errMsg = "Email is not valid";
      }
      setEmailErr(errMsg);
    }
  };

  return (
    <div>
      <div>
        <EmailInputField
          handleEmailChange={handleEmailChange}
          handleValidation={handleValidation}
          emailValue={emailInput.email}
          emailError={emailError}
        />
      </div>
    </div>
  );
}

export default EmailValidation;
