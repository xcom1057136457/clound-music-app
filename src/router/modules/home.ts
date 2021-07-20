import { RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';

const home: Array<RouteRecordRaw> = [
  {
    path: '/home',
    component: Layout,
    redirect: '/home/index',
    children: [
      {
        path: '/home/index',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '主页',
          keepAlive: true,
          navBar: false
        }
      },
      {
        path: '/playListDetail',
        name: 'PlayListDetail',
        component: () => import('@/views/playListDetail/index.vue'),
        meta: {
          title: '歌单详情',
          keepAlive: false,
          tabBar: false
        }
      }
    ]
  }
];

export default home;
