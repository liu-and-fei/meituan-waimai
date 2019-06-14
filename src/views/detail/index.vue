<template>
  <div>
    <div>
      <div class="detail-top">
      </div>
      <div class="detail-pic">
        <img class="top-pic" :src="foodList.data.shopInfo.shopPic" alt="">
        <div class="top-intro">
          <p>{{foodList.data.shopInfo.distance}}</p>
          <p>公告:欢迎光临,很高兴为您服务</p>
        </div>
      </div>
    </div>
    <van-tabs v-model="active">
      <van-tab title="点菜" class="diancai">
        <div class="detail-nav">
          <van-badge-group :active-key="activeKey" @change="onChange">
            <van-badge
              v-for="(nav,index) in foodList.data.categoryList"
              :key="nav.tag"
              :index="index"
              :title="nav.categoryName" />
          </van-badge-group>
        </div>
        <FoodList :foodlist="foodList.data"></FoodList>
      </van-tab>
      <van-tab title="评价">评价
        <Estimate :estimate="estimate.data"></Estimate>
      </van-tab>
      <van-tab title="商家">商家</van-tab>
    </van-tabs>
    <van-submit-bar
      :price="total"
      button-text="去结算"
      @submit="onSubmit"
    />
  </div>
</template>
<script>
import FoodList from '@/component/foodlist.vue'
import Estimate from '@/component/estimate.vue'
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      active: 0,
      activeKey: 0
    }
  },
  components: {
    FoodList,
    Estimate
  },
  computed: {
    ...mapState('congcong', [
      'foodList',
      'estimate',
      'total'
    ])
  },

  methods: {
    ...mapActions('congcong', [
      'getFoodList',
      'getEstimate'
    ]),
    onChange (index) {
      this.activeKey = index;
    },
    onSubmit (price) {
      console.log('lalal')
    }
  },

  created () {
    this.getFoodList();
    this.getEstimate();
  }

}
</script>
<style>
  .detail-top{
    width: 100%;
    height: 50px;
    background: #1C1B20;
    border-bottom: 1px solid #ffffff;
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
  .diancai{
    width: 100%;
    display: flex
  }
  .detail-nav{
    width: 80px;
  }
</style>
