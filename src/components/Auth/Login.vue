<template>
  <div class="container h-100 justify-content-center d-flex">
    <div class="login-form-holder justify-content-center align-items-center d-flex">
      <form @submit="onLogin">
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" v-model="formData.email">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" placeholder="Password" v-model="formData.password">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        formData: {
          email: '',
          password: '',
        },
      };
    },
    methods: {
      onLogin(e) {
        e.preventDefault();
        console.log(`Login with username: ${this.formData.email} and password: ${this.formData.password}`);
        this.$router.push({path: 'home'});
      },
    },
  };

</script>
