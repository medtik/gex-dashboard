import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  linkActiveClass: "nav__link_active",
  routes: [
    {
      path: "/",
      component: () => import("./components/Main/Main.vue")
    },
    {
      path: "/users",
      component: () => import("./components/Main/MainUsers.vue")
    },
    {
      path: "/add",
      component: () => import("./components/Main/MainAddUser.vue")
    }
  ]
});
