import { createWebHistory, createRouter } from 'vue-router';
import Home from '../Views/Home.vue';
import Service from '../Views/Service.vue';
import SelectedWorks from '../Views/SelectedWorks.vue';
import WorkDetailXoolTech from "../Views/WorkDetailXoolTech.vue";
import AboutUs from '../Views/AboutUs.vue';
import Blog from '../Views/Blog.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/service', component: Service },
  { path: '/works', component: SelectedWorks },
  { path: "/xooltech", name: "work-xooltech", component: WorkDetailXoolTech },
  { path: '/about', name: 'About', component: AboutUs },
  { path: '/blog', name: 'Blog', component: Blog },

]
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;