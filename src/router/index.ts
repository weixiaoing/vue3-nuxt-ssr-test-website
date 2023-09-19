import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "tey",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/home/index.vue"),
  },
  {
    path: "/mine",
    name: "mine",
    component: () => import("@/views/mine/index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
