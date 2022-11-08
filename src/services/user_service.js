import axios from "axios";
import config from "../config";

const getStudentProfile = () => {
  return axios.get(config.uniAdminToolServer.student_profile_location);
};

const getAdminProfile = () => {
  return axios.get(config.uniAdminToolServer.admin_profile_location);
};

const UserService = {
  getStudentProfile,
  getAdminProfile
}

export default UserService;