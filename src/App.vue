<template>
  <div id="movie-app" class="h-100">
    <router-view name="navigation"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
  };
</script>

<style scoped>
</style>
