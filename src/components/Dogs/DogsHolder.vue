<template>
  <div class="container">
    <ListItem v-for="(dog) in getDogs"
      :key="dog.guid"
      :guid="dog.guid"
      :isSold="dog.isSold"
      :picture="dog.picture"
      :age="dog.age"
      :eyeColor="dog.eyeColor"
      :name="dog.name"
      :gender="dog.gender"
      :about="dog.about"
    >
    </ListItem>
  </div>
</template>

<script>
  import dogsService from '../../api/services/dogsService';
  import ListItem from './ListItem';

  export default {
    name: 'DogsHolder',
    components: {
      ListItem,
    },
    data() {
      return {
        dogs: [],
      };
    },
    computed: {
      getDogs() {
        return this.dogs;
      }
    },
    created() {
      this.getAllDogs();
    },
    methods: {
      getAllDogs() {
        dogsService.getAllDogs().then((dogs) => {
          this.dogs = dogs.data;
          console.log(dogs);
        });
      },
    },
  };
</script>
