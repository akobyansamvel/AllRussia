import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/HomePage.vue';
import ArticlePolitic from './components/ArticlePolitic.vue';

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


  ]
});

export default router;