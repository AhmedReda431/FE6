import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./filter"

import 'jquery/dist/jquery.min.js'

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
