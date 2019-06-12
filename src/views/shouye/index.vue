<template>
  <div id="home">
    <div>
        <router-view></router-view>
        <Tabbar :tabs='tabs'></Tabbar>
     </div>
    <!--  筛选栏-->
    <colation></colation>
  </div>
</template>

<script>
import colation from '@/components/shouye/colation';
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
    colation,
    Tabbar
  }
}
</script>

<style lang="scss">

</style>
