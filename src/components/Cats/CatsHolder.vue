<template>
  <div class="container">
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

  export default {
    name: 'CatsHolder',
    components: {
      ListItem,
    },
    data() {
      return {
        cats: [],
      };
    },
    computed: {
      getCats() {
        return this.cats;
      }
    },
    created() {
      this.getAllCats();
    },
    methods: {
      getAllCats() {
        catsService.getAllCats().then((cats) => {
          this.cats = cats.data;
          console.log(cats);
        });
      },
    },
  };
</script>