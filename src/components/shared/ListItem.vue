<template>
  <div class="card d-inline-flex ml-2 mr-2 mt-2 mb-2" style="width: 18rem;">
    <span title="Delete" class="delete-icon" @click="deleteEntity">X</span>
    <img class="card-img-top" :src="picture" alt="Card image cap" v-if="isImage()">
    <video controls v-if="!isImage()">
      <source :src="picture" type="video/mp4">
    </video>
    <div class="card-body">
      <h5 class="card-title">Name: {{ name }}</h5>
      <p class="card-text">{{ about }}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Age: {{ age }}</li>
      <li class="list-group-item">Eye color: {{ eyeColor }}</li>
      <li class="list-group-item">Gender: {{ gender }}</li>
    </ul>
  </div>
</template>

<script>
import catsService from '../../api/services/catsService';
import dogsService from '../../api/services/dogsService';
import birdsService from '../../api/services/birdsService';
  export default {
    name: 'ListItem',
    props: {
      guid: String,
      isSold: Boolean,
      picture: String,
      age: Number,
      eyeColor: String,
      name: String,
      gender: String,
      about: String,
      type: String,
      onDelete: Function
    },
    methods: {
      isImage() {
        return this.picture.indexOf('.mp4') === -1 ||
        this.picture.indexOf('.jpg') !== -1 || 
        this.picture.indexOf('.gif') !== -1 || 
        this.picture.indexOf('.JPG') !== -1 || 
        this.picture.indexOf('.GIF') !== -1;
      },
      deleteEntity() {
        switch(this.type) {
          case 'bird': 
            birdsService.deleteBird(this.guid, () => {});
          break;            
          case 'cat': 
            catsService.deleteCat(this.guid, () => {
              this.onDelete(this.guid);
            });
          break;
          case 'dog': 
            dogsService.deleteDog(this.guid, () => {});
          break;
        }
      }
    }
  };
</script>

<style>
  img {
      width: 18rem;
      height: 18rem;
  }

  video {
    width: 18rem;
    height: 18rem;
  }

  .delete-icon {
    position: absolute;
    right: 10px;
    top: 0;
    color: red;
    font-size: 1.250rem;
    cursor: pointer;
  }
</style>

