<template>
  <div class="goods">
    <ul>
      <li v-for="item in shopList" :key="item.mtWmPoiId">
        <div class="goods-pic">
          <img :src="item.picUrl" alt="">
        </div>
        <div class="goods-info">
          <h2>{{ item.shopName }}</h2>
          <div class="shopdetail-line1">
            <div>
              <p><i v-for="(item,index) in 5" :key="index"></i></p>
              <span>4.5</span>&nbsp;&nbsp;
              <span>{{ item.monthSalesTip }}</span>
            </div>
            <div>
              <p><i>{{ item.deliveryTimeTip }}</i><span v-if="item.distance"> | {{ item.distance }}</span></p>
            </div>
          </div>
          <div class="shopdetail-line2">
            <div><span>{{ item.minPriceTip }}</span><span v-if="item.shippingFeeTip"> | {{ item.shippingFeeTip }}</span><span v-if="item.averagePriceTip"> | {{ item.averagePriceTip }}</span></div>
          </div>
          <div class="shopdetail-line3">
            <div></div>
          </div>
          <div class="shopdetail-line4">
            <div></div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'goodslist',
  data () {
    return {}
  },
  methods: {
    ...mapActions('liufei', [
      'getGoodsList'
    ])
  },
  computed: {
    ...mapState('liufei', [
      'shopList'
    ])
  },
  created () {
    this.getGoodsList();
  }
}
</script>

<style lang="scss" scoped>
.goods{
  width: 100%;
  ul{
    width: 100%;
    li{
      padding: 0 10px;
      box-sizing: border-box;
      margin: 10px 0 25px;
      display: flex;
      .goods-pic{
        width: 76px;
        height: 57px;
        position: relative;
        box-sizing: border-box;
        margin-right: 8px;
        flex-shrink: 0;
        border-radius: 2px;
        overflow: hidden;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .goods-info{
        width: 78%;
        color: #333;
        h2{
          width: 80%;
          font-size: 16px;
          color: #333;
          line-height: 1.4;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-weight: 600;
        }
        &>div{
          margin-top: 4px;
          font-size: 11px;
        }
        .shopdetail-line1{
          display: flex;
          justify-content: space-around;
          div:nth-child(1){
            width: 52%;
            display: flex;
            justify-content: space-around;
            p{
              display: flex;
              justify-content: space-around;
              align-items: center;
              i{
                width: 13px;
                height: 13px;
                background: url("~@/../public/images/xing.png") no-repeat 0 0;
                background-size: cover;
              }
            }
            span{
              font-size: 11px;
            }
          }
          div:nth-child(2){
            width: 48%;
            p{
              float: right;
            }
          }
        }
        .shopdetail-line2{

        }
      }
    }
    li:nth-last-child(1){
      height: 60px;
      margin-bottom: 50px;
      color: #333;
      span{
        display: block;
        margin: 0 auto;
      }
    }
  }
}
</style>
