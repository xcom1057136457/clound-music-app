import { RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';

const dj: Array<RouteRecordRaw> = [
  {
    path: '/dj',
    component: Layout,
    redirect: '/dj/index',
    children: [
      {
        path: '/dj/index',
        name: 'DJ',
        component: () => import('@/views/dj/index.vue'),
        meta: {
          title: 'DJ',
          navBar: false
        }
      }
    ]
  }
];

export default dj;
