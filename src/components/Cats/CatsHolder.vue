<template>
  <div class="container">
    <DataFilter @input="onSearch"></DataFilter>
    <ListItem v-for="(cat) in getCats"
      :key="cat._id"
      :guid="cat._id"
      :isSold="cat.isSold"
      :picture="cat.picture"
      :age="cat.age"
      :eyeColor="cat.eyeColor"
      :name="cat.name"
      :gender="cat.gender"
      :about="cat.about"
      :type="'cat'"
      :onDelete="onDeleted"
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
        // catsService.getAllCats().then((cats) => {
        //   this.cats = cats.data;
        //   this.temp = [...cats.data];
        //   console.log(cats);
        // });

        catsService.getAllCatsGraphQl((cats) => {
            this.cats = cats;
            this.temp = [...cats];
            console.log(cats);
        })
      },
      onSearch(input) {
        const filtered = this.temp.filter((cats) => {
        return cats.name.toLocaleLowerCase().indexOf(input) !== -1
          || !input;
        });

        this.cats = [...filtered];
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
