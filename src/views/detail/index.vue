<template>
  <div>
    <van-loading class="loading" v-if="loading" />
    <div v-if="!loading">
      <div class="detail-top">
        <router-link to="/" class="back">返回</router-link>
      </div>
      <div class="detail-pic">
        <img class="top-pic" :src="foodList.shopInfo.shopPic">
        <div class="top-intro">
          <p>{{foodList.shopInfo.distance}}</p>
          <p>公告:欢迎光临,很高兴为您服务</p>
        </div>
      </div>
    </div>
    <van-tabs v-if="!loading" v-model="active">
      <van-tab title="点菜"  class="article">
        <div class="detail-nav">
          <van-badge-group :active-key="activeKey" @change="onChange">
            <van-badge
              v-for="(nav,index) in foodList.categoryList"
              :key="nav.tag"
              :index="index"
              :title="nav.categoryName"
              @click="findfood(index,nav)"
              class="navlength"
              />
          </van-badge-group>
        </div>
        <FoodList :foodlist="foodList" class="detail-list"></FoodList>
      </van-tab>
      <van-tab title="评价">
        <Estimate></Estimate>
      </van-tab>
      <van-tab title="商家">
        <ShopInfor :shopinfor="shopinfor.data" />
      </van-tab>
    </van-tabs>
    <van-submit-bar
      v-if="!loading"
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
import { mapActions, mapState, mapMutations } from 'vuex'
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
      'total',
      'id',
      'loading'
    ])

  },

  methods: {
    ...mapActions('congcong', [
      'getFoodList',
      'getShopInfor'
    ]),
    ...mapMutations('congcong', [
      'SETID'
    ]),
    onChange (index) {
      this.activeKey = index;
    },
    onSubmit (price) {
    },
    findfood (index) {
      var lists = this.foodList.categoryList
      var height = 0
      for (var i = 0; i < index; i++) {
        height += lists[i].spuList.length * 107 + 36
      }
      document.getElementsByClassName('detail-list')[0].style.top = -height + 'px'
    }

  },
  mounted () {
    var id = location.href.substring(31);
    console.log(id)
    this.SETID(id);
    this.getFoodList();
    this.getShopInfor();
  }
}
</script>
<style>
  .loading{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
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
    width: 295px;
    height: 440px;
    display: flex;
    overflow-x: hidden;
  }
  .article .detail-nav{
    flex-shrink: 0;
    width: 80px;
    display: flex;
  }
  .article .detail-list{
    width: 78%;
    position: absolute;
    left: 90px;
    z-index: 7;
  }
  .detail-total{
    width: 100%;
    position: fixed;
    bottom: 0;
  }

</style>
