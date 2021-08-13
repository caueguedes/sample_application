import axios from "axios";
import configs from '../config/config.json';

const api = axios.create({
  baseURL: configs.SERVER_URL
});

api.interceptors.request.use(function (config) {
  config.data.client_id = configs.CLIENT_ID;
  return config;
});

function register({firstName, lastName, email, password}) {
  return api.post('/api/v1/users', {
    firstName,
    lastName,
    email,
    password
  });
}

export const registerService = {
  register
};
