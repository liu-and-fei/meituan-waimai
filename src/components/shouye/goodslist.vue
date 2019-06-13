<template>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      :error.sync="iserror"
      error-text="网络异常，点击重试"
      @load="onLoad"
      :offset="100">
      <van-cell v-for="item in shopList" :key="item.mtWmPoiId">
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
        </div>
      </van-cell>
    </van-list>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'goodslist',
  data () {
    return {
      loading: false,
      finished: false
    };
  },
  methods: {
    ...mapActions('liufei', [
      'getGoodsList'
    ]),
    onLoad () {
      // 异步更新数据
      setTimeout(() => {
        // 加载更多数据
        this.getGoodsList();

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.shopList.length >= 10) {
          this.finished = true;
        }
      }, 10000);
    }
  },
  computed: {
    ...mapState('liufei', [
      'shopList',
      'iserror'
    ])
  },
  created () {
    this.getGoodsList();
  }
}
</script>

<style lang="scss" scoped>
.van-list {
  width: 100%;
  padding-bottom: 50px;

  .van-cell {
    padding: 0;
    .van-cell__value {
      padding: 0 10px;
      box-sizing: border-box;
      margin: 10px 0 25px;
      display: flex;

      .goods-pic {
        width: 76px;
        height: 57px;
        position: relative;
        box-sizing: border-box;
        margin-right: 8px;
        flex-shrink: 0;
        border-radius: 2px;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .goods-info {
        width: 78%;
        color: #333;

        h2 {
          width: 80%;
          font-size: 16px;
          color: #333;
          line-height: 1.4;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-weight: 600;
        }

        &>div {
          height: 18px;
          margin-top: 4px;
          font-size: 11px;
          line-height: 16px;
          align-items: center;
          align-content: center;
        }

        .shopdetail-line1 {
          display: flex;
          justify-content: space-around;

          div:nth-child(1) {
            width: 52%;
            height: 100%;
            display: flex;
            justify-content: space-around;

            p {
              display: flex;
              justify-content: space-around;
              align-items: center;

              i {
                width: 13px;
                height: 13px;
                background: url("~@/../public/images/xing.png") no-repeat 0 0;
                background-size: cover;
              }
            }

            span {
              font-size: 11px;
            }
          }

          div:nth-child(2) {
            width: 48%;
            height: 100%;

            p {
              float: right;
            }
          }
        }

        .shopdetail-line2 {

        }
      }
    }
  }
}

</style>
