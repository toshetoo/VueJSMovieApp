import apiService from './baseService';
import constants from './constants';

export default {
  getAllDogs() {
    return apiService.get(`${constants.baseUrl}/dogs`);
  },

  getDogById(id) {
    return apiService.get(`${constants.baseUrl}/dogs/${id}`);
  },

  getDogImage() {
    return apiService.get('https://random.dog/woof.json');
  },
};
