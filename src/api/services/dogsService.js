import apiService from './baseService';
import graphqlService from './graphql/graphqlService';
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

  getAllDogsGraphQl(onSuccess, onError) {
    if(!onError) onError = () => {};
    graphqlService.getList('dogs', "_id name about gender eyeColor isSold picture", onSuccess, onError);
  },

  addDog(dog, onSuccess, onError) {
    if(!onError) onError = () => {};
    graphqlService.add('Dog', dog, onSuccess, onError);
  },

  deleteDog(id, onSuccess, onError) {
    if(!onError) onError = () => {};
    graphqlService.delete('Dog', id, onSuccess, onError);
  },

  editDog(dog, oSuccess, onError) {
    if(!onError) onError = () => {};
    graphqlService.save('Dog', dog, oSuccess, onError);
  }
};
