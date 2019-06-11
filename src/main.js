import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

import { NavBar, Search, Icon } from 'vant';
Vue.config.productionTip = false;

Vue.use(NavBar).use(Search).use(Icon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
