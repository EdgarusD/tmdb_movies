import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.themoviedb.org',
  timeout: 1000,
});
