import { createWebHistory, createRouter } from 'vue-router';
import Home from '../Views/Home.vue';
import Service from '../Views/Service.vue';
import privacyPolicy from '../Views/privacyPolicy.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/service', component: Service },
  { path: '/privacyPolicy', component: privacyPolicy },

]
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;