import Vue from 'vue';
import Vuex from 'vuex';

import App from './App';
import router from './router';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    moo: true,
  },

  mutations: {
  },

  getters: {
  },

  actions: {
  },
  strict: process.env.NODE_ENV !== 'production',
});

Vue.config.productionTip = false;
Vue.config.devtools = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
