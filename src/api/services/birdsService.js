import apiService from './baseService';
import constants from './constants';

export default {
  getAllBirds() {
    return apiService.get(constants.baseUrl + '/birds');
  },

  getBirdById(id) {
    return apiService.get(constants.baseUrl + '/birds/' + id);
  }
}