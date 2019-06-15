<template>
    <van-list
      v-model="loading"
      :offset="50"
      :finished="finished"
      finished-text="没有更多了"
      :error.sync="iserror"
      error-text="网络异常，点击重试"
      @load="onLoad"
      >
      <router-link
        tag="div"
        v-for="item in shopList"
        :to="'detail/'+item.mtWmPoiId"
        :key="item.mtWmPoiId"
        class="tag-link"
      >
        <van-cell>
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
      </router-link>
    </van-list>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'goodslist',
  data () {
    return {
      pageNum: 0,
    };
  },
  methods: {
    ...mapActions('liufei', [
      'getGoodsList'
    ]),
    onLoad () {
      // console.log('触发onload');
      // 加载更多数据
      this.getGoodsList(this.pageNum++);
    }
  },
  computed: {
    ...mapState('liufei', [
      'shopList',
      'iserror',
      'finished'
    ]),

    loading: {
      get () {
        return this.$store.state.liufei.loading;
      },

      set (value) {
        this.$store.commit('liufei/CHGLOADING', value);
      }
    }
  },
  // created () {
  //   this.getGoodsList(this.pageNum);
  // }
}
</script>

<style lang="scss" scoped>
.van-list {
  width: 100%;
  padding-bottom: 50px;

  .tag-link{

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
            line-height: 18px;
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
                height: 18px;
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
                line-height: 18px;
              }
            }

            div:nth-child(2) {
              width: 48%;
              height: 100%;

              p {
                float: right;
                font-size: 12px;
              }
            }
          }

          .shopdetail-line2 {

          }
        }
      }
    }
  }
}

</style>
