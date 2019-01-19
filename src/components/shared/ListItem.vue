<template>
  <div class="card d-inline-flex ml-2 mr-2 mt-2 mb-2" style="width: 18rem;">
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
    },
    methods: {
      isImage() {
        return this.picture.indexOf('.mp4') === -1 ||
        this.picture.indexOf('.jpg') !== -1 || 
        this.picture.indexOf('.gif') !== -1 || 
        this.picture.indexOf('.JPG') !== -1 || 
        this.picture.indexOf('.GIF') !== -1;
      },

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
</style>

