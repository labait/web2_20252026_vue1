import { createRouter, createWebHistory } from 'vue-router';
import About from './components/About.vue';
import Works from './components/Works.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'about',
      component: About,
    },
    {
      path: '/works',
      name: 'works',
      component: Works,
    },
  ],
});

export default router;