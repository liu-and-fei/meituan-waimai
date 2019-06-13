<template>
  <div>
    <li
      v-for="(goods,index) in goodsList"
      :key="goods.spuId"
      :index="index"
      class="goodslist">
      <img :src="goods.littleImageUrl">
      <div>

        <h2>{{goods.spuName}}</h2>
        <p>{{goods.spuDesc}}</p>
        <i>月售{{goods.saleVolume}}赞{{goods.sellStatus}}</i>
        <div class="count"><b>¥{{goods.originPrice}}</b><span @click="fn1(`${goods.spuId}`,`${goods.currentPrice}`)">+</span></div>
      </div>
      <!-- <a href="javascript:void(0)" @click="$router.push('/dialog')">
         <van-col span="6" class="marb20">
            <van-icon name="pending-deliver" />
            <div>Dialog 弹出框</div>
         </van-col>
      </a> -->
    </li>
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
export default {
  data () {
    return {
      count: 0
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
      console.log(key, price)
      this.count += price;
      this.SETTOTAL(this.count)
    }
  }
}
</script>
<style>
.goodslist{
  width: 334px;
  height: 107px;
  display: flex;
}
.goodslist img{
  margin: 0 10px;
  width: 75px;
  height: 75px;
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
.goodslist .count b{
  color: #fb4e44;
  font-size: 18px;
  line-height: 22px;
}
.goodslist .count span{
  margin-left: 160px;
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
</style>
