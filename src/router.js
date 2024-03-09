import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/HomePage.vue';
import ArticlePolitic from './pages/ArticlePage.vue';
import AboutPortal from './pages/AboutPage.vue';
import Contact from './pages/ContactPage.vue';
import '@/styles/main.css'


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
  ]
});

export default router;