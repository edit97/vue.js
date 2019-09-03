import Vue from "vue";
import router from "./routes";
import Vuex from 'vuex';
import store from './store/index'
import App from "./App.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from "vue-router";

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(Vuetify);

new Vue({
  render: h => h(App),
  router,
  store,
  vuetify: new Vuetify(),
  icons: {
    iconfont: "mdi"
  }
}).$mount("#app");
Vue.config.productionTip = false;
