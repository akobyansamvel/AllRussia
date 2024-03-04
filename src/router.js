import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/HomePage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
  ]
});

export default router;