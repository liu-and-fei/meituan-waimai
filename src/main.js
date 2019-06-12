import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './styles/base.less'

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
