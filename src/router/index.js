import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/post/:id',
    name: 'post',
    component: () => import('@/views/PostView.vue'),
  },
  {
    path: '/historial',
    name: 'history',
    component: () => import('@/views/HistoryView.vue'),
  },
];

const router = new VueRouter({
  base: '/blog',
  mode: 'hash',
  routes,
  scrollBehavior: () => {
    window.scrollTo(0, 0);
  }
});

router.beforeEach((to, from, next) => {
  to.meta.transition = 'slide-up';
  next();
});

export default router;