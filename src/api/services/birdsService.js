import apiService from './baseService';
import graphqlService from './graphql/graphqlService';
import constants from './constants';

export default {
  getAllBirds() {
    return apiService.get(constants.baseUrl + '/birds');
  },

  getBirdById(id) {
    return apiService.get(constants.baseUrl + '/birds/' + id);
  },

  getAllBirdsGraphQl(onSuccess, onError) {
    if(!onError) onError = () => {};
    graphqlService.getList('birds', "_id name about gender eyeColor isSold picture", onSuccess, onError);
  },

  addBird(bird, onSuccess, onError) {
    if(!onError) onError = () => {};
    graphqlService.add('Bird', bird, onSuccess, onError);
  },

  deleteBird(id, onSuccess, onError) {
    if(!onError) onError = () => {};
    graphqlService.delete('Bird', id, onSuccess, onError);
  },

  editBird(bird, onSuccess, onError) {
    if(!onError) onError = () => {};
    graphqlService.save('Bird', bird, onSuccess, onError);
  }
}