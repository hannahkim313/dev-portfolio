import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.headers = {
  'Content-Type': 'application/json',
};
axios.defaults.withCredentials = true;

export default axios;
