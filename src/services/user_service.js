import config from "../config";
import apiInstance from "../api";
import TokenService from "./token_service";

class UserService {

  getUserInformation() {
    return apiInstance
      .get(config.uniAdminToolServer.user_services_location,
      {
        headers: {
          'Authorization': `Bearer ${TokenService.getLocalAccessToken()}` 
        }
      }
      )
      .then((response) => {
  
        return response.data;
      });
  }

  // Used to check what role the user has
  getUserType() {
    return apiInstance.get(config.uniAdminToolServer.confirm_user_type_location);
  };

}

export default new UserService();