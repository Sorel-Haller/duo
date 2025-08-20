import { createWebHistory, createRouter } from 'vue-router';
import Home from '../Views/Home.vue';
import Service from '../Views/Service.vue';
import privacyPolicy from '../Views/privacyPolicy.vue';
import contactUs from '../Views/contactUs.vue';
import Blog from '../Views/Blog.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/Service', component: Service },
  { path: '/PrivacyPolicy', component: privacyPolicy },
  { path: '/ContactUs', component: contactUs },
  { path: '/blog', component: Blog },

]
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;