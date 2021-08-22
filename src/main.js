// =========================================================
// * Vue Material Dashboard - v1.4.0
// =========================================================
//
// * Product Page: https://www.creative-tim.com/product/vue-material-dashboard
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/vue-material-dashboard/blob/master/LICENSE.md)
//
// * Coded by Creative Tim
//
// =========================================================
//
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";

// validate
import Vuelidate from "vuelidate";
// import "bootstrap/dist/css/bootstrap.min";
// vue-i18n
import i18n from "./js/i18n";
import VueI18n from "vue-i18n";
import FlagIcon from "vue-flag-icon";
//store.js
import store from "./store/Store";

//axios
import axios from "axios";

// router setup
import routes from "./routes/routes";

// Plugins
import GlobalComponents from "./globalComponents";
import GlobalDirectives from "./globalDirectives";

// MaterialDashboard plugin
import MaterialDashboard from "./material-dashboard";
// import Pagination from '@material-ui/lab/Pagination';
// import {Pagination} from '@/components'
import Chartist from "chartist";

// configure router
const server = localStorage.getItem("server") || "http://edalili.e-dalely.com/public";
axios.defaults.baseURL = server;
const router = new VueRouter({
  mode: "history",
  routes, // short for routes: routes
  linkExactActiveClass: "nav-item active",
});
const lang = localStorage.getItem("lang") || "en";
axios.defaults.headers["Accept-Language"] = lang;
// const server = localStorage.getItem("server") || "edalily";
document.documentElement.lang = lang;

// if (server == "admin") {
// axios.defaults.baseURL = "http://admin.e-dalely.com/public";
// }

Vue.prototype.$Chartist = Chartist;

Vue.use(VueRouter);
Vue.use(MaterialDashboard);
Vue.use(GlobalComponents);
Vue.use(GlobalDirectives);
Vue.use(i18n, VueI18n);
Vue.use(FlagIcon);
Vue.use(Vuelidate);
// Vue.use(Pagination)

// axios.defaults.baseURL = "http://edalili.e-dalely.com/public";

require("./store/subscriber");

/* eslint-disable no-new */
store.dispatch("auth/attempt", localStorage.getItem("token")).then(() => {
  // if (server == "admin") {
  // axios.defaults.baseURL = "http://admin.e-dalely.com/public";
  // } else if (server == "edalily") {
  // }
  new Vue({
    el: "#app",
    render: (h) => h(App),
    router,
    store,
    data: {
      Chartist: Chartist,
    },
  });
});
