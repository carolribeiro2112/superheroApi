import axios from 'axios';

const accessToken = 3703124586446855;

const api = axios.create({
  baseURL:`https://superheroapi.com/api/${accessToken}`
})

export default api;