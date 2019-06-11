import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import vant from 'vant'
import 'vant/lib/index.css'
Vue.use(vant)

Vue.config.productionTip = false;
// import { Tabbar, TabbarItem } from 'vant';

// Vue.use(Tabbar).use(TabbarItem);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
