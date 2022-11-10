import React from "react";

import AuthService  from "../services/auth_service";

const UserProfile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <div >
      <header>
        <h3>
          Profile
        </h3>
      </header>
    </div>
  );
};

export default UserProfile;