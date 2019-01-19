<template>
  <div class="container">
    <DataFilter @input="onSearch"></DataFilter>
    <ListItem v-for="(cat) in getCats"
      :key="cat.guid"
      :guid="cat.guid"
      :isSold="cat.isSold"
      :picture="cat.picture"
      :age="cat.age"
      :eyeColor="cat.eyeColor"
      :name="cat.name"
      :gender="cat.gender"
      :about="cat.about"
    >
    </ListItem>
  </div>
</template>

<script>
  import catsService from '../../api/services/catsService';
  import ListItem from '../shared/ListItem';
  import DataFilter from '../shared/DataFilter';

  export default {
    name: 'CatsHolder',
    components: {
      ListItem,
      DataFilter
    },
    data() {
      return {
        cats: [],
        temp: [],
      };
    },
    computed: {
      getCats() {
        return this.cats;
      },
    },
    created() {
      this.getAllCats();
    },
    methods: {
      getAllCats() {
        catsService.getAllCats().then((cats) => {
          this.cats = cats.data;
          this.temp = [...cats.data];
          console.log(cats);
        });
      },
      onSearch(input) {
        const filtered = this.temp.filter((cats) => {
        return cats.name.toLocaleLowerCase().indexOf(input) !== -1
          || !input;
        });

        this.cats = [...filtered];
      }
    },
  };
</script>
