import Vue from 'vue';
import vuetify from './plugins/vuetify';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import App from './App.vue';
import Home from './pages/Home.vue';
import NotFound from './pages/NotFound.vue';
import Components from './pages/Components.vue';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: () => ({
    count: 0,
    links: [
      {text: 'Explore Components', href: 'components'},
      {text: 'Select a layout', href: 'layout'},
      {text: 'FAQ', href: 'faq'},
    ],
  }),
  mutations: {
    increment(state) {
      state.count++;
    },
    reset(state) {
      state.count = 0;
    },
  }
});

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/components', component: Components },
    { path: '/*', component: NotFound },
  ],
});

const app = new Vue({
  vuetify,
  store,
  router: router,
  render: h => h(App),
});
app.$mount('#app');
