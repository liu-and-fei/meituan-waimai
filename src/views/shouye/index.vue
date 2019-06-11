<template>
    <div>
        <router-view></router-view>
        <Tabbar :tabs='tabs'></Tabbar>
     </div>
</template>

<script>
import Tabbar from '../shouye/tabbar.vue'
export default {
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
