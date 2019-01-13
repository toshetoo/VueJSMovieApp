import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/Auth/Login';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      components: {
        default: Login,
      },
    },
  ],
});
