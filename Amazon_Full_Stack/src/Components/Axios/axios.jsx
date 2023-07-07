import axios from 'axios';

const instance = axios.create({
  
  baseURL: "https://rediet-amazon-app.cyclic.app/",
});

export default instance;