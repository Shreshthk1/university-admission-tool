const config = {
  uniAdminToolServer: {
    signup_location:
      "http://localhost:3003/api/registerUser",
    login_location:
      "http://localhost:3003/api/auth",
    signout_location:
      "http://localhost:3003/api/signout",
    student_profile_location:
      "http://localhost:3003/api/profile/student",
    admin_profile_location:
      "http://localhost:3003/api/profile/admin"
  },
};
//35.209.74.28
module.exports = config;
