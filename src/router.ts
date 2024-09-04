import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/templates/HomeTemplate.vue'),
  },
  {
    path: '/:pathMatch(.*)*', // 404
    name: '404',
    redirect: '/',
  },
  {
    path: '/:id',
    name: 'Article :id',
    component: () => import('@/templates/ArticleTemplate.vue'),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;