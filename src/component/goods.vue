<template>
  <div>
    <li
      v-for="(goods,index) in goodsList"
      :key="goods.spuId"
      :index="index"
      class="goodslist"
      @click="dialogopen"
      >
      <img :src="goods.littleImageUrl">
      <div class="goods-detail">
        <h2>{{goods.spuName}}</h2>
        <p>{{goods.spuDesc}}</p>
        <i>月售{{goods.saleVolume}}赞{{goods.sellStatus}}</i>
        <div class="count"><b>¥{{goods.originPrice}}</b><span @click="fn1(`${goods.spuId}`,`${goods.currentPrice}`)">+</span></div>
      </div>
      <van-dialog
        v-model="show"
        show-cancel-button
        :beforeClose="beforeClose"
        class="dialogs"
      >
      <img :src="goods.bigImageUrl">
      <h3>{{goods.spuName}}</h3>
      <p>月售{{goods.saleVolume}}赞{{goods.sellStatus}}</p>
      <div class="count"><b>¥{{goods.originPrice}}</b><span @click="fn1(`${goods.spuId}`,`${goods.currentPrice}`)">+</span></div>
      </van-dialog>
    </li>
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
  data () {
    return {
      count: 0,
      show: false
    }
  },
  props: {
    goodsList: Array
  },
  methods: {
    ...mapMutations('congcong', [
      'SETTOTAL'
    ]),
    fn1 (key, price) {
      price = price * 100
      this.count += price;
      this.SETTOTAL(this.count)
    },
    dialogopen () {
      this.show = !this.show
    },
    beforeClose (action, done) {
      if (action === 'confirm') {
        this.show = !this.show
      } else if (action === 'cancel') {
        this.show = !this.show
      }
    }
  }
}
</script>
<style>
.goodslist{
  height: 107px;
  display: flex;
  /* flex-grow: 0; */
}
.goodslist img{
  margin: 0 10px;
  width: 75px;
  height: 75px;
}
.goods-detail{
  flex:1;
}
.goodslist h2{
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  color: #333333;
  font-weight:900;
}
.goodslist p,i{
  width: 200px;
  margin-bottom: 3px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 15px;
  font-size: 12px;
  color: #666666;
  word-break: break-all;
}
.goodslist .count{
  width: 200px;
  display: flex;
  justify-content: space-between
}
.goodslist .count b{
  color: #fb4e44;
  font-size: 18px;
  line-height: 22px;
}
.goodslist .count span{
  display: inline-block;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: yellow;
  text-align: center;
  line-height: 25px;
  color: #000;
  font-size: 20px;
  font-weight: bold;
}
.dialogs{
  border-radius: 5px
}
.dialogs img{
  width: 100%;
  height: 236px;
  margin: 0;
}
</style>
