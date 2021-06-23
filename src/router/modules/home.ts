import { RouteRecordRaw } from "vue-router";
import Layout from "@/Layout/index.vue";

const home: Array<RouteRecordRaw> = [
  {
    path: "/home",
    component: Layout,
    redirect: "/home/index",
    children: [
      {
        path: "/home/index",
        name: "Home",
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: "主页",
          keepAlive: true
        }
      }
    ]
  }
];

export default home;
