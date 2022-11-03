import React from "react";

import "./CreatedPopup.css";

// Creates the popup that is displayed when user successfully creates an account
const CreatedPopup = () => {

  return (
    <div className="modal">
      <div className="modal-content">
        <h1>Welcome!</h1>
        <p>You have successfully created an account!</p>
        <p>Now directing you to the login page!</p>
      </div>
    </div>
  );
};

export default CreatedPopup;
