<template>
  <div class="container h-100 justify-content-center d-flex">
    <div class="login-form-holder justify-content-center align-items-center d-flex">
      <form>
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
  };

</script>
