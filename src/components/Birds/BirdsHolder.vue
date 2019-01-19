<template>
  <div class="container">
    <DataFilter @input="onSearch"></DataFilter>
    <ListItem v-for="(bird) in getBirds"
      :key="bird.guid"
      :guid="bird.guid"
      :isSold="bird.isSold"
      :picture="bird.picture"
      :age="bird.age"
      :eyeColor="bird.eyeColor"
      :name="bird.name"
      :gender="bird.gender"
      :about="bird.about"
    >
    </ListItem>
  </div>
</template>

<script>
  import birdsService from '../../api/services/birdsService';
  import ListItem from '../shared/ListItem';
  import DataFilter from '../shared/DataFilter';

  export default {
    name: 'BirdsHolder',
    components: {
      ListItem,
      DataFilter
    },
    data() {
      return {
        birds: [],
        temp: [],
      };
    },
    computed: {
      getBirds() {
        return this.birds;
      },
    },
    created() {
      this.getAllBirds();
    },
    methods: {
      getAllBirds() {
        birdsService.getAllBirds().then((birds) => {
          this.birds = birds.data;
          this.temp = [...birds.data];
          console.log(birds);
        });
      },
      onSearch(input) {
        const filtered = this.temp.filter((bird) => {
        return bird.name.toLocaleLowerCase().indexOf(input) !== -1
          || !input;
        });

        this.birds = [...filtered];
      }
    },
  };
</script>
