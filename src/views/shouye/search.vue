<template>
    <div>
    <van-nav-bar title="搜索页" left-arrow  @click-left="onClickLeft" border='false' class="search_head">
    </van-nav-bar>
    <div class="search_k">
        <i :class="['iconfont','icon-fangdajing']"></i>
        <input type="text" placeholder="请输入商家或商品名称" @click="search">
        <span>搜索</span>
     </div>

     <div class="hot">
         热门搜索
     </div>
</div>
</template>

<script>
export default {

  methods: {
    onClickLeft () {
      this.$router.go(-1);
    }
  }

}
</script>

<style scope>

.van-ellipsis{
    font-size:14px;
    color: #333;
}
.search_k{
    height: 50px;
    padding:10px 17px 10px 10px;
    background: #ffffff;
    position: relative;
}
.search_k input{
    width:305px;
    height: 30px;
    background: #e8e8e8;
    padding: 6px 0 6px 28px;

}
.search_k i{
    position:absolute;
    left:19px;
    top:18px;
    z-index: 99;
    color: #cccccc
}
.search_k span{
    display: block;
    float:right;
    padding-top:5px;
    color:#999;
    font-size:15px;
}

</style>
