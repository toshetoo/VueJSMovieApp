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
        console.log('before')
        dogsService.getAllDogs().then(dogs => {
          console.log(dogs);
          this.dogs = dogs;
        });
      }
    }
  };
</script>
