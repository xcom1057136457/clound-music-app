import { RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';

const mv: Array<RouteRecordRaw> = [
  {
    path: '/mv',
    component: Layout,
    redirect: '/mv/index',
    children: [
      {
        path: '/mv/index',
        name: 'MV',
        component: () => import('@/views/mv/index.vue'),
        meta: {
          title: 'MV',
          navBar: false
        }
      }
    ]
  }
];

export default mv;
