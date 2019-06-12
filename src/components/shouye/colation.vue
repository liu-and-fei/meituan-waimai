<template>
  <div>
    <van-tabs v-model="active" :line-height="0" title-active-color="#333" animated sticky>
      <van-tab title="综合排序">
        <div slot="title" @click="onClick">综合排序</div>
        <ul class="total-sort" v-show="showSort">
          <li v-for="item in sortList" :key="item.sortId">{{ item.name }}</li>
        </ul>
      </van-tab>
      <van-tab title="销量最高"></van-tab>
      <van-tab title="距离最近"></van-tab>
      <van-tab title="筛选">

      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from 'vue';
import { Tab, Tabs } from 'vant';
import http from '@/utils/http';

Vue
  .use(Tab)
  .use(Tabs);

export default {
  name: 'colation',
  data () {
    return {
      active: 0,
      showSort: false,
      sortList: []
    }
  },
  methods: {
    onClick () {
      this.showSort = !this.showSort;
      console.log(this.showSort);
    }
  },
  created () {
    http.post('http://localhost:8080/openh5/poi/filterconditions?_=1560255541980&X-FOR-WITH=v6Rnitzgi%2BmQGvCWmTA53jOcHfZmKLK3IIECh%2FxjGpA8QsA1fyYqnd4dp%2BLVs5FJk%2B4DxuYsN02ZAYZXEqXDjPM1VeoPqSE7BBfTLcZAQIG9oQm9SaYypOqKDj3y%2BGFBtSDKvn%2F1QVOrKnAYyXKs9Q%3D%3D')
      .then(res => {
        // console.log(res.data.sortVOList);
        this.sortList = res.data.sortVOList.filter(item => { return item.name !== '销量最高' && item.name !== '距离最近' });
      })
      .catch(error => {
        console.log(error);
      });
  }
}
</script>

<style lang="scss" scoped>
.van-tabs__content{
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  .van-tab__pane{
    position: relative;
    z-index: 9;
    background-color: #fff;
    .total-sort{
      li{
        position: relative;
        height: 42px;
        line-height: 42px;
        padding-left: 15px;
        font-size: 14px;
        font-weight: bold;
        color: #333;
        &:hover{
          color: #ffb000;
        }
        &::after{
          content: ' ';
          width: 100%;
          height: 1px;
          background: #e4e4e4;
          transform-origin: 0 0;
          transform: scaleY(0.5);
          position: absolute;
          left: 0;
          bottom: 0;
        }
      }
    }
  }
}
</style>
