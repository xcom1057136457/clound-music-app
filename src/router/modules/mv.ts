import { RouteRecordRaw } from 'vue-router';
import Layout from '@/Layout/index.vue';

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
          title: 'MV'
        }
      }
    ]
  }
];

export default mv;
