import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5001' // or your backend port
});
 
export default instance;