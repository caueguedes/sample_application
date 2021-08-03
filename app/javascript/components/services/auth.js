import axios from "axios";
import config from '../utils/config.json';

const api = axios.create({
  baseURL: config.SERVER_URL
});

api.interceptors.request.use(function (request) {
  request.data.client_id = config.CLIENT_ID;
  request.data.client_secret = config.CLIENT_SECRET;
  return request;
});

// api.interceptors.response.use(function (response) {
//   return response;
// }, function (error) {
//   return Promise.reject(error);
// });

function login({ email, password }) {
  return api.post('/oauth/token', {
    grant_type: 'password',
    email,
    password
  });
}

// LogOut will also revoke the token at the server
function logout(token) {
  const headers = {
    auth: {
      username: config.CLIENT_ID,
      password: config.CLIENT_SECRET
    }
  }
  return api.post('/oauth/revoke',
    { token },
    headers
  );
}

// TODO: implement REFRESH TOKEN

export const authService = {
  login,
  logout
};
