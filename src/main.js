import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './styles/base.less'
// import vant from 'vant'
// import 'vant/lib/index.css'
// Vue.use(vant);

import { NavBar, Search, Icon } from 'vant';
Vue.use(NavBar).use(Search).use(Icon);

import { Tab, Tabs, Badge, BadgeGroup, SubmitBar, Dialog } from 'vant'

Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Badge)
Vue.use(BadgeGroup)
Vue.use(SubmitBar)
Vue.use(Dialog)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
