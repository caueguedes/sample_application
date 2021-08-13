import axios from "axios";
import configs from '../config/config.json';

const api = axios.create({
  baseURL: configs.SERVER_URL
});

const getUnits = () => {
  return api.get('/api/v1/units');
}

const getBottles = (page= 1) => {
  let config = {
    params: {
      current_page: page
    }
  }
  return api.get('/api/v1/bottles', config);
}

export const resourceService = {
  getUnits,
  getBottles
};
