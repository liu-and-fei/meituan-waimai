<template>
    <router-link to="/detail/960020863616730">详情页</router-link>
  <div id="home">
    <div>
        <router-view></router-view>
        <Tabbar :tabs='tabs'></Tabbar>
     </div>
  </div>
</template>

<script>

import Tabbar from '../shouye/tabbar.vue'

export default {
  name: 'home',
  data () {
    return {
      tabs: [
        { id: 1, name: '首页', icon: 'icon-index', href: '/shouye1' },
        { id: 2, name: '订单', icon: 'icon-icon--copy', href: '/dingdan' },
        { id: 3, name: '我的', icon: 'icon-meituanwaimai', href: '/myde' }
      ]
    }
  },
  components: {
    Tabbar
  }
}
</script>

<style lang="scss">
#home{
  width: 100%;
  height: 100%;
  /*overflow-y: scroll;*/
}
</style>
