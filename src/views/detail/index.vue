<template>
  <div>
    <div>
      <div class="detail-top">
        <router-link to="/" class="back">返回</router-link>
      </div>
      <div class="detail-pic">
        <img class="top-pic" :src="foodList.data.shopInfo.shopPic">
        <div class="top-intro">
          <p>{{foodList.data.shopInfo.distance}}</p>
          <p>公告:欢迎光临,很高兴为您服务</p>
        </div>
      </div>
    </div>
    <van-tabs v-model="active">
      <van-tab title="点菜"  class="article">
        <div class="detail-nav">
          <van-badge-group :active-key="activeKey" @change="onChange">
            <van-badge
              v-for="(nav,index) in foodList.data.categoryList"
              :key="nav.tag"
              :index="index"
              :title="nav.categoryName"
              @click="findfood(index,nav)"
              class="navlength"
              />
          </van-badge-group>
        </div>
        <FoodList :foodlist="foodList.data" class="detail-list"></FoodList>
      </van-tab>
      <van-tab title="评价">
        <Estimate></Estimate>
      </van-tab>
      <van-tab title="商家">
        <ShopInfor :shopinfor="shopinfor.data"></ShopInfor>
      </van-tab>
    </van-tabs>
    <van-submit-bar
      :price="total"
      button-text="去结算"
      @submit="onSubmit"
      class="detail-total"
    />
  </div>
</template>
<script>
import FoodList from '@/component/foodlist.vue'
import Estimate from '@/component/estimate.vue'
import ShopInfor from '@/component/shopinfor.vue'
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      active: 0,
      activeKey: 0,
      top: 100
    }
  },
  components: {
    FoodList,
    ShopInfor,
    Estimate
  },
  computed: {
    ...mapState('congcong', [
      'foodList',
      'shopinfor',
      'total'
    ])
  },

  methods: {
    ...mapActions('congcong', [
      'getFoodList',
      'getShopInfor'
    ]),
    onChange (index) {
      this.activeKey = index;
    },
    onSubmit (price) {
    },
    findfood (index) {
      console.log(this.foodList.data.categoryList)
      var lists = this.foodList.data.categoryList
      var height = 0
      for (var i = 0; i < index; i++) {
        height += lists[i].spuList.length * 107 + 36
        console.log(height)
      }
      document.getElementsByClassName('detail-list')[0].style.top = -height + 'px'
    }
  },

  created () {
    this.getFoodList();
    this.getShopInfor();
  }

}
</script>
<style>
  .detail-top{
    width: 100%;
    height: 45px;
    background: #1C1B20;
    border-bottom: 1px solid #ffffff;
    overflow: hidden;
    padding-top: 5px;
  }
  .back{
    color: #ccc;
    margin-left: 5px;
    margin-top: 5px;
  }
  .detail-pic{
    display: flex;
    width: 100%;
    height: 80px;
    background: #1C1B20;
    position: relative;
    color: #ffffff
  }
  .top-pic{
    width: 85px;
    height: 85px;
    margin: 5px 5px 0 10px;
    box-shadow: 0 0 10px #000000;
    z-index: 10;
  }
  .top-intro{
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-around
  }
  .article{
    position: relative;
    width: 100%;
    display: flex;
    overflow-y: auto;
  }
  .article .detail-nav{
    flex-shrink: 0;
    width: 80px;
  }
  .article .detail-list{
    position: absolute;
    left: 90px;
    z-index: 7;
  }
  .detail-total{
    width: 375px;
    position: fixed;
    bottom: 0;
  }

</style>
