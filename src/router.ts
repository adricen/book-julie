import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/templates/HomeTemplate.vue'),
  },
  {
    // TODO: Faire page 404
    path: '/:pathMatch(.*)*', // 404
    name: '404 NotFound',
    // component: () => import('@/templates/404Template.vue'),
    redirect: '/',
  },
  {
    path: '/article',
    name: 'Article',
    redirect: '/',
  },
  {
    // TODO: article Id to md page
    path: '/article/:slug',
    name: 'Article',
    component: () => import('@/templates/ArticleTemplate.vue'),
  },
  // {
  //   path: '/storyline/',
  //   children: [
  //     {
  //       path: ':embedId',
  //       component: () => import('./storyline/:embedId/story.html'),
  //     }
  //   ],
  // }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;