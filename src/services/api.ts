import axios from 'axios';

const api = axios.create({
  baseURL:`https://superheroapi.com/api.php/3703124586446855`
})

export default api;