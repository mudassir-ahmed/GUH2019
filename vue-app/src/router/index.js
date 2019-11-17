import Vue from "vue";
import Router from "vue-router";
import Dashboard from "@/components/Dashboard";
import Remote from "@/components/Remote";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: Dashboard
    },
    {
      path: "/remote",
      name: "Remote",
      component: Remote
    }
  ]
});
