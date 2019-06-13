<template>
  <div>
    <van-tabs v-model="active" :line-height="0" title-active-color="#333" sticky>
      <van-tab title="综合排序">
        <div slot="title" @click="toggle">综合排序</div>
        <ul class="total-sort" v-show="showSort">
          <li v-for="item in sortVOList" :key="item.sortId">{{ item.name }}</li>
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

import { mapState, mapActions } from 'vuex';

export default {
  name: 'sort',
  data () {
    return {
      active: 0,
      showSort: false,
      // sortList: []
    }
  },
  methods: {
    toggle () {
      this.showSort = !this.showSort;
    },
    ...mapActions('liufei', [
      'getDataList'
    ])
  },
  computed: {
    ...mapState('liufei', [
      'sortVOList'
    ])
  },
  created () {
    this.getDataList();
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
    /*z-index: 0;*/
    background-color: #fff;
    .total-sort{
      position: relative;
      z-index: 9;
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
