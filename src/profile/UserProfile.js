import React from "react";

import AuthService  from "../services/auth_service";

const UserProfile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <div >
      <header>
        <h3>
          <strong>{currentUser.firstName} {currentUser.lastName}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
    </div>
  );
};

export default UserProfile;