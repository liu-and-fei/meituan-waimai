import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
// import vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(Vant);

import { Tab, Tabs, Badge, BadgeGroup, SubmitBar, NavBar, Search, Icon, Dialog, Cell, CellGroup, List } from 'vant';
Vue
  .use(Tab)
  .use(Tabs)
  .use(Badge)
  .use(BadgeGroup)
  .use(SubmitBar)
  .use(NavBar)
  .use(Search)
  .use(Icon)
  .use(Dialog)
  .use(Cell)
  .use(CellGroup)
  .use(List);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
