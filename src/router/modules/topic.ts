import { RouteRecordRaw } from 'vue-router';
import Layout from '@/Layout/index.vue';

const topic: Array<RouteRecordRaw> = [
  {
    path: '/topic',
    component: Layout,
    redirect: '/topic/index',
    children: [
      {
        path: '/topic/index',
        name: 'Topic',
        component: () => import('@/views/topic/index.vue'),
        meta: {
          title: '话题页'
        }
      }
    ]
  }
];

export default topic;
