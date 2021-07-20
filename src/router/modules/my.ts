import { RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';

const my: Array<RouteRecordRaw> = [
  {
    path: '/my',
    component: Layout,
    redirect: '/my/index',
    children: [
      {
        path: '/my/index',
        name: 'My',
        component: () => import('@/views/my/index.vue'),
        meta: {
          title: '我的',
          navBar: false
        }
      }
    ]
  }
];

export default my;
