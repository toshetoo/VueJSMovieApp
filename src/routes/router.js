import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/Auth/Login';
import Home from '../components/Home/Home';
import Navigation from '../components/shared/Navigation';
import DogsHolder from '../components/Dogs/DogsHolder';
import CatsHolder from '../components/Cats/CatsHolder';
import BirdsHolder from '../components/Birds/BirdsHolder';


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
    {
      path: '/Home',
      name: 'Home',
      components: {
        navigation: Navigation,
        default: Home,
      },
    },
    {
      path: '/Dogs',
      name: 'Dogs',
      components: {
        navigation: Navigation,
        default: DogsHolder,
      },
    },
    {
      path: '/Cats',
      name: 'Cats',
      components: {
        navigation: Navigation,
        default: CatsHolder,
      },
    },
    {
      path: '/Birds',
      name: 'Birds',
      components: {
        navigation: Navigation,
        default: BirdsHolder,
      },
    },
  ],
});
