import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
// import Vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(Vant);

import { NavBar, Search, Icon, Cell, CellGroup, Tab, Tabs, List } from 'vant';
Vue
  .use(NavBar)
  .use(Search)
  .use(Icon)
  .use(Cell)
  .use(CellGroup)
  .use(Tab)
  .use(Tabs)
  .use(List);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
