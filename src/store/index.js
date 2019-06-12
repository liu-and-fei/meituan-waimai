import Vue from 'vue'
import Vuex from 'vuex'
import congcong from './congcong'
import huachao from './huachao'
import liufei from './liufei'
import zhouyan from './zhouyan'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    congcong,
    huachao,
    liufei,
    zhouyan
  }
});

// export default {
//   store
// }

