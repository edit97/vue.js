import Vue from "vue";
import Vuex from 'vuex';
import Vuetify from "vuetify";
import ElementUI from 'element-ui';
import VueRouter from "vue-router";
import store from './store/index'
import router from "./routes";
import App from "./App.vue";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css";
import 'element-ui/lib/theme-chalk/index.css';

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
