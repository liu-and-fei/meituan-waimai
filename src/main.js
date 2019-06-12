import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
// import vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(vant);

import { NavBar, Search, Icon } from 'vant';
Vue.use(NavBar).use(Search).use(Icon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
