import axios from 'axios';

export default {
  get(url) {
    return axios.get(url);
  },
  post(url, data) {
    return axios.post(url, data);
  },
}