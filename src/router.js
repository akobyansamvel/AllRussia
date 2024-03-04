import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/HomePage.vue';
import Contact from './components/ContactPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
  ]
});

export default router;