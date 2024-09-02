import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';
import HomeTemplate from '@/templates/HomeTemplate.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: HomeTemplate,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;