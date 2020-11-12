import axios from 'axios';

const headers = {
  'Content-Type': 'application/json;charset=utf-8',
};

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/',
  timeout: 30000,
  headers,
});

export const apikey = 'd6482542a42fd39db476d1e14b1f2a98';
export default api;
