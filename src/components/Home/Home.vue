<template>
  <div class="container d-flex">
      <div class="nav-box">
        <router-link to="/Cats"><img  src="https://www.readersdigest.ca/wp-content/uploads/sites/14/2011/01/4-ways-cheer-up-depressed-cat.jpg"/></router-link>
      </div>
      <div class="nav-box">
        <router-link to="/Dogs"><img  src="https://nhl.bamcontent.com/images/photos/301406224/1024x576/cut.jpg"/></router-link>
      </div>
      <div class="nav-box">
        <router-link to="/Birds"><img  src="https://amp.thisisinsider.com/images/5b47c02a20e3a81e008b4646-750-563.jpg"/></router-link>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
  };
</script>

<style>
  .container {
        height: 100%;
    align-items: center;
    justify-content: center;
  }

  .nav-box {
        width: 200px;
    height: 200px;
    border: 1px solid black;
    box-shadow: 1px 2px;
    display:flex;
    margin: 10px;
    cursor: pointer;
  }

  .nav-box:hover {
    transform: scale(1.1);
    transition: 0.5s ease all;
  }

  img {
    width: 100% !important;
    height: 100% !important;
  }
</style>

