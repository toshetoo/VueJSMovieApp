<template>
  <div class="card d-inline-flex ml-2 mr-2 mt-2 mb-2" style="width: 18rem;">
    <img class="card-img-top" :src="picture" alt="Card image cap">
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
  };
</script>
