import axios from "axios";
import Cookies from "js-cookie";

const getToken =() => {
  return Cookies.get('access_token')
}

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    timeout: 3000,
    headers: {
      'Authorization':`BEARER ${getToken()}`
    }
  });

export default api;