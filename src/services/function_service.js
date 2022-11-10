import axios from "axios";
import config from "../config";

const programsList = (university_name) => {
  return axios.post(config.uniAdminToolServer.program_list_location, {
    "university_name": university_name
  })
  .then((response) => {

    return response.data;
  });
};

const FunctionService = {
    programsList,
  }
  
  export default FunctionService;