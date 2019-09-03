import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    overlay: false,
  },
  mutations: {
    searchMenu (state, payload) {
      state.overlay = payload
    }
  }
});
