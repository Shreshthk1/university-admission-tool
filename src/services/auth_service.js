import axios from "axios";
import config from "../config";

const signup = (f_Name, l_Name, email, password) => {
  return axios.post(config.uniAdminToolServer.signup_location, {
    "userEmail": email,
    "password": password,
    "firstName": f_Name,
    "lastName": l_Name
  });
};

const login = (email, password) => {
  return axios
    .post(config.uniAdminToolServer.login_location, {
      "userEmail": email,
      "password": password
    })
    .then((response) => {
      if (response.data.username) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  return axios.post(config.uniAdminToolServer.signout_location).then((response) => {
    return response.data;
  });
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  signup,
  login,
  logout,
  getCurrentUser,
}

export default AuthService;