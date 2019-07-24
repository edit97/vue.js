import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(Vuetify);

new Vue({
  render: h => h(App),
  vuetify: new Vuetify(),
  icons: {
    iconfont: 'mdi', // default - only for display purposes
  },
}).$mount('#app');
Vue.config.productionTip = false;
