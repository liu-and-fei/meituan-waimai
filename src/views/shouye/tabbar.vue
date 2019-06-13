<template>

    <ul class="tabbar">
    <router-link
      v-for="tab in tabs"
      :key="tab.id"
      :to="tab.href"
     active-class="z-act"
      tag="li"
      exact
      >
      <i :class="['iconfont', tab.icon]"></i>
      <span>{{ tab.name }}</span>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: 'Tabbar',

  props: {
    tabs: Array
  }

}
</script>

<style  scoped>
@import '~@/styles/reset.css';
.tabbar{
 position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  padding: 0;
  margin: 0;
  z-index: 100;
  background: #fafafa;
  list-style: none;
}
.tabbar li{
  flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50px;
    font-size:12px;
    color: #999
}
.tabbar li i {
  text-align: center;
  width: 125px;
}
.tabbar li .iconfont{
      font-size: 26px;
      margin-bottom: 4px;
      color: #ccc;
}

.tabbar .z-act{
  color: #333333;
}
.tabbar .z-act .iconfont{
  color: #ff5f16;
}

</style>
