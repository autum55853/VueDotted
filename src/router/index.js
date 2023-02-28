import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "FrontView",
      component: () => import("../views/FrontView.vue"),
    },
    {
      path: "/guest",
      name: "guest",
      component: () => import("../views/GuestView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/regist",
      name: "regist",
      component: () => import("../views/RegistView.vue"),
    },
    {
      path: "/forgotpassword",
      name: "forgotpassword",
      component: () => import("../views/ForgotpasswordView.vue"),
    },
    {
      path: "/dashboard",
      name: "dashBoard",
      component: () => import("../views/DashbordView.vue"),
      children: [
        {
          path: "memember",
          name: "memember",
          component: () => import("../views/Dashboard/MememberView.vue"),
        },
      ],
    },
  ],
});

export default router;
