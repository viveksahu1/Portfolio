import { createRouter, createWebHistory } from 'vue-router';
import SinglePage from '../pages/SinglePage.vue';

const routes = [
  { path: '/', component: SinglePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
