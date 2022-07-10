import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "homeView" */ '@/views/HomeView.vue'),
  },
  {
    path: '/add-user',
    name: 'addUser',
    component: () => import(/* webpackChunkName: "addUser" */ '@/views/AddUser.vue'),
  },
  {
    path: '/:id',
    name: 'editUser',
    component: () => import(/* webpackChunkName: "editUser" */ '@/views/EditUser.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
