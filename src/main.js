import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
// import vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(Vant);

import { Tab, Tabs, SubmitBar, NavBar, Search, Icon, Dialog, Cell, CellGroup, List, Actionsheet, Loading } from 'vant';
Vue
  .use(Tab)
  .use(Tabs)
  .use(SubmitBar)
  .use(NavBar)
  .use(Search)
  .use(Icon)
  .use(Dialog)
  .use(Cell)
  .use(CellGroup)
  .use(List)
  .use(Actionsheet)
  .use(Loading);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
