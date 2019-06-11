import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import vant from 'vant'
import 'vant/lib/index.css'
Vue.use(vant)

import { NavBar, Search, Icon } from 'vant';
Vue.config.productionTip = false;

Vue.use(NavBar).use(Search).use(Icon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
