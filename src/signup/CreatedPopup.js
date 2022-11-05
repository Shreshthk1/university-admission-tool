import React from "react";

import classes from "../css/CreatedPopup.module.css";

// Creates the popup that is displayed when user successfully creates an account
const CreatedPopup = () => {

  return (
    <div className={classes.modal}>
      <div className={classes.modalContent}>
        <h1 className={classes.modalTitle}>Welcome!</h1>
        <p>You have successfully created an account!</p>
        <p>Now directing you to the login page!</p>
      </div>
    </div>
  );
};

export default CreatedPopup;
