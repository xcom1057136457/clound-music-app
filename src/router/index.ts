import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const modulesFiles: any = require.context('./modules', true, /\.ts$/);

const routeModules: any = [];

modulesFiles.keys().reduce((modules: unknown, modulePath: unknown) => {
  routeModules.push(...modulesFiles(modulePath).default);
}, {});

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录页'
    }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404/index.vue'),
    meta: {
      title: '错误页'
    }
  },
  ...routeModules
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
