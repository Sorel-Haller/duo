import { createWebHistory, createRouter } from 'vue-router';
import Home from '../Views/Home.vue';
import Service from '../Views/Service.vue';
import SelectedWorks from '../Views/SelectedWorks.vue';
import WorkDetailXoolTech from "../Views/WorkDetailXoolTech.vue";

const routes = [
  { path: '/', component: Home },
  { path: '/service', component: Service },
  { path: '/works', component: SelectedWorks },
  { path: "/works/xooltech", name: "work-xooltech", component: WorkDetailXoolTech },

]
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;