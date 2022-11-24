import config from "../config";
import apiInstance from "../api";



class FunctionService {

  programsList = (university_name) => {

    
    return apiInstance.get(config.uniAdminToolServer.program_list_location,{
       params:{ university: university_name }
       
    })
    .then((response) => {
      
      return response.data; 
    })
  };
  
}

  
export default FunctionService;
