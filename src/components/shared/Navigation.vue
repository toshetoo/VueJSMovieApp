<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand">Animals</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active mr-2">
        <router-link to="/Home">Home</router-link>
      </li>
      <li class="nav-item mr-2">
        <router-link to="/Dogs">Dogs</router-link>
      </li>
      <li class="nav-item mr-2">
        <router-link to="/Cats">Cats</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/Birds">Birds</router-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<script>
  export default {

  };
</script>
