// the query strings for each location. work in api.js as that file creates the Axios instance. 
const config = {
  uniAdminToolServer: {
    home_location:
      "/home",
    signup_location:
      "/registerUser",
    login_location:
      "/auth",
    confirm_user_type_location:
      "/auth/user",
    program_list_location:
      "/programlist"
  },
};
//35.209.74.28
module.exports = config;
