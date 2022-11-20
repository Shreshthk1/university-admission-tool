import config from "../config";
import apiInstance from "../api";
import TokenService from "./token_service";

class FunctionService {

  programsList = (university_name) => {
    return apiInstance.post(config.uniAdminToolServer.program_list_location, {
      "university": university_name
    }, {
      headers: {
        'Authorization': `${TokenService.getLocalAccessToken}` 
      }
    })
    .then((response) => {
  
      return response.data;
    });
  };
    
}

  
export default new FunctionService;
