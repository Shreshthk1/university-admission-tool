import axios from "axios";

// an instance of the Axios driver. Used everywhere for API calls
const instance = axios.create({
  baseURL: "http://35.209.74.28:4000/api",
  headers: {
    "Content-Type": "application/json",
  }
});

export default instance;