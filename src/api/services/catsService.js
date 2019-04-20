import apiService from './baseService';
import graphqlService from './graphql/graphqlService';
import constants from './constants';

export default {
  getAllCats() {
    return apiService.get(`${constants.baseUrl}/cats`);
  },

  getCatById(id) {
    return apiService.get(`${constants.baseUrl}/cats/${id}`);
  },

  getAllCatsGraphQl(onSuccess, onError) {
    if(!onError) onError = () => {};
    graphqlService.getList('cats', "_id name about gender eyeColor isSold picture", onSuccess, onError);
  },

  addCat(cat, onSuccess, onError) {
    if(!onError) onError = () => {};
    graphqlService.add('Cat', cat, onSuccess, onError);
  },

  deleteCat(id, onSuccess, onError) {
    if(!onError) onError = () => {};
    graphqlService.delete('Cat', id, onSuccess, onError);
  },

  editCat(cat, oSuccess, onError) {
    if(!onError) onError = () => {};
    graphqlService.save('Cat', cat, oSuccess, onError);
  }
};
