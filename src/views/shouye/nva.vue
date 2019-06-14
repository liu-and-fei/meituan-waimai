<template>
  <div>

   <van-nav-bar title=""  left-arrow class="nav" >

      <div slot="left" class="left">
          <i :class="['iconfont','icon-location']" class="dingwei"></i>
          <router-link to='/site' tag="span">
                {{ site }}
          </router-link>
          <i :class="['iconfont','icon-xiangyou']" class="xiangyou"></i>
      </div>

     <div slot="right" class="right">
         <i :class="['iconfont','icon-fangdajing']"></i>
        <input type="text" placeholder="请输入商家或商品名称" @click="search">

     </div>
    </van-nav-bar>
</div>
</template>

<script>
import { mapState } from 'vuex';
export default {

  methods: {

    search () {
      // alert(1)
      this.$router.push({ path: '/search' });
    }
  },
  computed: {
    ...mapState('zhouyan', ['site'])
  }

}
</script>

<style  scope>
    .nav{
    position: fixed;
    z-index: 15;
    top: 0;
    left: 0;
    right: 0;
    left: constant(safe-area-inset-left) !important;
    left: env(safe-area-inset-left) !important;
    right: constant(safe-area-inset-right) !important;
    right: env(safe-area-inset-right) !important;
    height: 50px;
    padding: 0 10px;
    background: #1C1B20;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    color: #ffffff;
    }

input{
    width: 100%;
    position: relative;
    border: none;
    height: 30px;
    padding-left: 30px;
    box-sizing: border-box;
    border-radius: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: 30px;
    font-size: 14px;
    opacity: 1;
    background: rgb(235, 235, 228);
}

.left{
    font-size:15px;
    color: #ffffff;
}
.left .dingwei{
    font-size:15px;
}
.left .xiangyou{
    font-size:10px;
    margin-right: 15px;

}

.right{
    position: relative;
    margin-left: 5px;
}
.right .icon-fangdajing{
    font-size:14px;
    position: absolute;
    left:8px;
    top:0px;
    z-index: 99 ;
    color: #000;
}

</style>
