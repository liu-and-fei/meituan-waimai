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
      <van-tab title="点菜">
        <van-tree-select
          :items="items"
          :main-active-index="mainActiveIndex"
          :active-id="activeId"
          @navclick="onNavClick"
          @itemclick="onItemClick"
        />
      </van-tab>
      <van-tab title="评价">评价</van-tab>
      <van-tab title="商家">商家</van-tab>
    </van-tabs>
    <van-submit-bar
      :price="3050"
      button-text="去结算"
      @submit="onSubmit"
    />
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      items: [],
      mainActiveIndex: 0,
      activeId: 1
    }
  },
  components: {
    FoodList
  },
  computed: {
    ...mapState('congcong', [
      'foodList'
    ]),
    setFoodList () {

    }
  },

  methods: {
    ...mapActions('congcong', [
      'getFoodList'
    ]),
    onNavClick (index) {
      this.mainActiveIndex = index;
    },
    onItemClick (data) {
      this.activeId = data.id;
    }
  },

  created () {
    this.getFoodList();
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
  }
  .top-intro{
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-around
  }
</style>
