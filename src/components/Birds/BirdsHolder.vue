<template>
  <div class="container">
    <DataFilter @input="onSearch"></DataFilter>
    <ListItem v-for="(bird) in getBirds"
      :key="bird._id"
      :guid="bird._id"
      :isSold="bird.isSold"
      :picture="bird.picture"
      :age="bird.age"
      :eyeColor="bird.eyeColor"
      :name="bird.name"
      :gender="bird.gender"
      :about="bird.about"
      :type="'bird'"
      :onDelete="onDeleted"
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
        // birdsService.getAllBirds().then((birds) => {
        //   this.birds = birds.data;
        //   this.temp = [...birds.data];
        //   console.log(birds);
        // });

        birdsService.getAllBirdsGraphQl((birds) => {
            this.birds = birds;
            this.temp = [...birds];
            console.log(birds);
        });
      },
      onSearch(input) {
        const filtered = this.temp.filter((bird) => {
        return bird.name.toLocaleLowerCase().indexOf(input) !== -1
          || !input;
        });

        this.birds = [...filtered];
      },
      onDeleted(id) {
        const index = this.cats.findIndex(cat => cat._id === id);
        this.cats.splice(index, 1);
        this.cats = cats;
        this.temp = [...cats];
      }
    },
  };
</script>
