import apiService from './baseService';
import constants from './constants';

export default {
  getAllCats() {
    return apiService.get(`${constants.baseUrl}/cats`);
  },

  getCatById(id) {
    return apiService.get(`${constants.baseUrl}/cats/${id}`);
  },
};
