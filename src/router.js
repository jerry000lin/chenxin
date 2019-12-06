import Vue from "vue";
import Router from "vue-router";
import home from "./views/home.vue";
import update from "./views/update.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/update",
      name: "update",
      // route level code-splitting
      // this generates a separate chunk (update.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: update
    }
  ]
});
