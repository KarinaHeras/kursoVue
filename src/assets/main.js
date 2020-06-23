import Vue from "vue";
import Router from "vue-router";
import App from "./App";
import Login from "./views/auth";
import Home from "./views/Home";
import Register from "./views/Register";


Vue.use(Router);

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/register", component: Register }
];

const router = new Router({
  routes
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
