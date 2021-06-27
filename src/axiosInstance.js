import axios from 'axios';

const instance = axios.create({
    // baseURL: "live_url"
    baseURL: "http://localhost:3000/v1/api"
  });

  export default instance;