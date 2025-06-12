import { createRouter, createWebHistory } from 'vue-router'; // Changed here
import SinglePage from '../pages/SinglePage.vue';

const routes = [
  { path: '/', component: SinglePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;