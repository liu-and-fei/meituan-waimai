import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './styles/base.less'

import { Tab, Tabs, TreeSelect, SubmitBar } from 'vant'

Vue.use(Tab)
Vue.use(Tabs)
Vue.use(TreeSelect)
Vue.use(SubmitBar);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
