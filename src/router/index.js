import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home/Home.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      TabbarShow: true
    },
    component: Home
  },
  {
    path: "/Home",
    name: "Home",
    meta: {
      TabbarShow: true
    },
    component: () => import("@/views/Home/Home.vue")
  },
  {
    path: "/detail",
    name: "detail",
    meta: {
      TabbarShow: false
    },
    component: () => import("../views/detail.vue")
  },
  {
    path: "/find",
    name: "find",
    meta: {
      TabbarShow: true
    },
    component: () => import("../views/Find.vue")
  },
  {
    path: "/order",
    name: "order",
    meta: {
      TabbarShow: true
    },
    component: () => import("../views/Order.vue")
  },
  {
    path: "/my",
    name: "my",
    meta: {
      TabbarShow: true
    },
    component: () => import("../views/my/My.vue"),
  },
  {
    path: "/Payment",
    name: "Payment",
    meta: {
      TabbarShow: false
    },
    component: () => import("../views/my/Payment.vue"),

  },
];

const router = new VueRouter({
  linkExactActiveClass: 'active',
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
