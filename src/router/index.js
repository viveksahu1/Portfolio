import { createRouter, createWebHashHistory } from 'vue-router'; // Changed here
import SinglePage from '../pages/SinglePage.vue';

const routes = [
  { path: '/', component: SinglePage },
];

const router = createRouter({
  // Switched to createWebHashHistory for GitHub Pages compatibility
  history: createWebHashHistory(), 
  routes,
});

export default router;
