import axios from 'axios';

axios.defaults.baseUrl = import.meta.env.VITE_API_URL;
axios.defaults.withCredentials = true;

export default axios;
