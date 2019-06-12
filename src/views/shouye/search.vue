<template>
  <div>
    <van-nav-bar title="搜索页" left-arrow @click-left="onClickLeft"></van-nav-bar>
    <div class="search_k">
      <i :class="['iconfont','icon-fangdajing']"></i>
      <input type="text" placeholder="请输入商家或商品名称" v-model="inputValue">
      <span @click="fn2">搜索</span>
    </div>

    <div class="hot">热门搜索</div>

    <div class="hot_list">
      <a
        href="JavaScript:;"
        v-for="(item,index) in searchList"
        :key="index"
        @click="fn1(item.labelName)"
      >{{ item.labelName }}</a>
    </div>

    <div v-show="isShow">
      <div class="history">
        历史搜索
        <i :class="['iconfont','icon-lajitong']" @click="fn4"></i>
      </div>

      <div class="history_list">
        <a href="#" v-for="(item,index) in historyList" :key="index">{{ item }}</a>
      </div>
    </div>

    <!-- 弹出框 -->

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  data: () => {
    return {
      inputValue: '',
      historyList: [],
      isShow: false
    };
  },
  computed: {
    ...mapState('zhouyan', ['searchList'])
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1);
    },
    ...mapActions('zhouyan', ['getSearchList']),

    fn1 (value) {
      this.inputValue = value;
    },
    fn2 () {
      if (localStorage.getItem('history')) {
        let str = JSON.parse(localStorage.getItem('history'));
        str.push(this.inputValue);
        let str1 = JSON.stringify(str);
        localStorage.setItem('history', str1);
        this.historyList = JSON.parse(localStorage.getItem('history'));
        this.inputValue = '';
        this.isShow = true;
      } else {
        let arr = [];
        arr.push(this.inputValue);
        localStorage.setItem('history', JSON.stringify(arr));
        this.historyList = JSON.parse(localStorage.getItem('history'));
        this.inputValue = '';
        this.isShow = true;
      }
    },
    fn3 () {
      if (confirm('fegege')) {
      }
    },
    fn4 () {
      this.$dialog
        .alert({
          message: '清空历史记录', // 改变弹出框的内容
          showCancelButton: true // 展示取水按钮
        })
        .then(() => {
          // 点击确认按钮后的调用
          this.historyList = []
          this.isShow = false
          console.log('点击了确认按钮噢');
        })
        .catch(() => {
          // 点击取消按钮后的调用
          console.log('点击了取消按钮噢');
        });
    }
  },

  created () {
    this.getSearchList();

    if (localStorage.getItem('history')) {
      this.historyList = JSON.parse(localStorage.getItem('history'));
      this.isShow = true;
    }
  }
};
</script>

<style scope>
.van-ellipsis {
  font-size: 14px;
  color: #333;
}
.search_k {
  height: 30px;
  padding: 10px 17px 10px 10px;
  background: #ffffff;
  position: relative;
}
.search_k input {
  width: 305px;
  height: 30px;
  background: #e8e8e8;
  padding: 6px 0 6px 28px;
}
.search_k i {
  position: absolute;
  left: 19px;
  top: 18px;
  z-index: 99;
  color: #cccccc;
}
.search_k span {
  display: block;
  float: right;
  padding-top: 5px;
  color: #999;
  font-size: 15px;
}
.hot,
.history {
  color: #999;
  font-size: 14px;
  height: 40px;
  margin-left: 10px;
  line-height: 40px;
  border-bottom: 1px solid #e4e4e4;
}
.hot_list a,
.history_list a {
  padding: 0 10px;
  height: 28px;
  line-height: 28px;
  color: #666;
  margin: 5px 10px;
  margin-left: 0;
  font-size: 13px;
  display: inline-block;
  position: relative;
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border: 0.5px solid #d7d7d7;
  border-radius: 2px;
}
.hot_list,
.history_list {
  background: #fff;
  margin: 13px 10px 24px 10px;
  max-height: 80px;
  overflow: hidden;
}
.history i {
  font-size: 24px;
  float: right;
  color: #999;
  margin-right: 5px;
}
</style>
