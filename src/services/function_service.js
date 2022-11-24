import config from "../config";
import apiInstance from "../api";
import TokenService from "./token_service";
import { json } from "react-router-dom";

class FunctionService {

  programsList = (university_name) => {

    
    return apiInstance.get(config.uniAdminToolServer.program_list_location,{
       headers:{'Authorization': `Bearer ${TokenService.getLocalAccessToken()}` },
       params:{ university: university_name }
       
    })
    .then((response) => {
      
      return response.data; 
    })
  };
  
}

  
export default new FunctionService;
