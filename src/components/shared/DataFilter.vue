<template>
  <div class="form-group mx-sm-3 mb-2">
    <label for="filter-input" class="sr-only">Filter</label>
    <input type="text" class="form-control" id="filter-input" placeholder="Input name or age" v-model="input" @input="onInput()">
  </div>
</template>

<script>
export default {
  name: 'DataFilter',
  props: {
    // data: Array,
    onSearch: Function
  },
  data() {
    return {
      input: ''
    };
  },
  methods: {
    onInput() {
      console.log(this.input);
      // this.onSearch(this.input);
      this.$emit('input', this.input);
      // this.data = this.data.filter(d => d.name.indexOf(this.input) || d.age === this.input);
    }
  }
}
</script>

