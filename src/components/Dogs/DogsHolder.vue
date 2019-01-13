<template>
  <div class="container">
    {{ dogs }}
  </div>
</template>

<script>
  import dogsService from '../../api/services/dogsService';

  export default {
    name: 'DogsHolder',
    data() {
      return {
        dogs: [],
      };
    },
    created() {
      this.getDogs();
    },
    methods: {
      getDogs() {
        dogsService.getAllDogs().then((dogs) => {
          this.dogs = dogs;
        });
      },
    },
  };
</script>
