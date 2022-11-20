import config from "../config";
import apiInstance from "../api";
import TokenService from "./token_service";

class UserService {

  getUserInformation() {
    return apiInstance
      .get(config.uniAdminToolServer.get_user_info_location,
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

  updateUserInformation(f_name, l_name, address, dob, country, interests, role) {
    return apiInstance
      .post(config.uniAdminToolServer.get_user_info_location,
        {
          "f_name": f_name,
          "l_name": l_name,
          "address": l_name,
          "dob": dob,
          "country": country,
          "interests": interests,
          "role_id": role,
        },
        {
          headers: {
            'Authorization': `Bearer ${TokenService.getLocalAccessToken()}` 
          }
        })
  }

  sendUserDocument(file) {
    return apiInstance
      .post(config.uniAdminToolServer.send_user_doc_location,
        {
          "files": file,
        },
        {
          headers: {
            'Authorization': `Bearer ${TokenService.getLocalAccessToken()}` 
          }
        })
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