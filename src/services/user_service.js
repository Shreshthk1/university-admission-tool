import config from "../config";
import apiInstance from "../api";

class UserService {

  // Used to check what role the user has
  getUserType() {
    return apiInstance.get(config.uniAdminToolServer.confirm_user_type_location);
  };

}

export default new UserService();