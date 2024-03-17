import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/HomePage.vue';
import ArticlePolitic from '@/components/ArticlePage.vue';
import AboutPortal from '@/components/AboutPage.vue';
import Contact from '@/components/ContactPage.vue';
import MoscowScreen from '@/components/MoscowScreen.vue';
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
    {
      path: '/moscow',
      name: 'Moscow',
      component: MoscowScreen
    },

  ]
});

export default router;