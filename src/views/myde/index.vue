<template>
    <div class="box-main">
        <div class="main-header">
            <div class="my-to">
            </div>
            <p>oLM847059302</p>
        </div>
        <div class="main-list">
            <van-cell title="美团红包" icon="bill-o" is-link to="" />
            <van-cell title="收货地址" icon="location-o" is-link to=""/>
            <van-cell title="常见问题" icon="question-o" is-link to=""/>
            <van-cell title="美团协议与说明" icon="orders-o" is-link to=""/>
            <van-cell title="退出登录" icon="close" is-link @click="quit"/>
        </div>
        <div class="phone">
            <p>客服电话：10109777</p>
        </div>
        <div class="serveTime">
            <p>服务时间：9:00-23:00</p>
        </div>
    </div>
</template>

<script>
import { Dialog } from 'vant'
export default {
  methods: {
    quit () {
      Dialog.confirm({
        title: '是否退出'
      }).then(() => {
        setTimeout(() => {
          window.localStorage.removeItem('ifLogin');
          console.log(this.$router);
          this.$router.replace('/login');
        }, 1000)
      }).catch(() => {
        // on cancel
      });
    }
  }
}
</script>

<style lang="scss">
@import '~@/styles/reset.css';
.box-main{
    background: rgb(240, 240, 240);
    height: 100vh;
    .main-header{
        width: 100%;
        padding: 10% 0 5%;
        background: url(http://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:9096d347/78890a8f1859bc10152151fc64aff5cc.png);
        background-size: 100% 100%;
        .my-to{
            width: 19.7333%;
            padding-top: 19.7333%;
            border-radius: 100%;
            border: 4px solid #ffe699;
            background: url(http://p1.meituan.net/codeman/e32b47a07b818bf9a1d4086a882c18a62282.png) no-repeat;
            background-size: 100% 100%;
            margin: auto;
        }
        p{
            width: 100%;
            text-align: center;
            font-size: 16px;
            margin-top: 8px;
            cursor: pointer;
            color: #333333;
            max-width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;

        }
    }
    .main-list{
        background: white;
        .van-cell{
            width: 97%;
            margin-left: 3%;
            padding: 8px 10px 8px 0;
            border-bottom: 1px solid #e3e3e3;
            cursor: pointer;
            i{
                width: 0;
            }
        }
    }
    .phone{
        font-size: 14px;
        margin-top: 20px;
        text-align: center;
        color: #ffb000;
        padding: 10px 0;
        background: white;
    }
    .serveTime{
        font-size: 12px;
        text-align: center;
        color: #999999;
        padding: 10px 0;
        margin-bottom: 65px;
    }
}
</style>
