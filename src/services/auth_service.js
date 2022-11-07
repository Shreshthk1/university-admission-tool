import axios from "axios";
import config from "../config";

const signup = (firstName, lastName, email, password) => {
  return axios.post(config.uniAdminToolServer.signup_location, {
    firstName,
    lastName,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(config.uniAdminToolServer.login_location, {
      email,
      password,
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