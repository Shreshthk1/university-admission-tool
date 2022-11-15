import config from "../config";
import apiInstance from "../api";
import TokenService from "./token_service";

class AuthService {

  //posts the login to the API and when successful, sets user token in localstorage
  login(email, password) {
    return apiInstance
      .post(config.uniAdminToolServer.login_location, {
        "userEmail": email,
        "password": password
      })
      .then((response) => {
        if (response.data.accessToken) {
          TokenService.setUser(response.data);
        }
  
        return response.data;
      });
  };

  //posts the signup to the API
  signup(f_name, l_name, email, password) {
    return apiInstance.post(config.uniAdminToolServer.signup_location, {
      "userEmail": email,
      "password": password,
      "firstName": f_name,
      "lastName": l_name
    });
  };

  //removes the user token from Redux storage when logging out
  logout() {
    TokenService.removeUser();
    // return apiInstance.get(config.uniAdminToolServer.logout_location, 
    //   TokenService.getLocalAccessToken);
  };
}

export default new AuthService();