import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/HomePage.vue';
import ArticlePolitic from './components/ArticlePolitic.vue';
import AboutPortal from './components/AboutPortal.vue';
import Contact from './components/ContactPage.vue';
import MoscowScreen from './components/MoscowScreen.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/article',
      name:'ArticlePolitic',
      component: ArticlePolitic
    },
    {
      path: '/about',
      name: 'AboutPortal',
      component: AboutPortal
    },

    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },

    {
      path: '/moscow',
      name: 'MoscowScreen',
      component: MoscowScreen
    },
  ]
});

export default router;