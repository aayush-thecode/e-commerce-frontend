import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    timeout: 3000,
    headers: {'X-Custom-Header': 'foobar'}
  });

export default api;