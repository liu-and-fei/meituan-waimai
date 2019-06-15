<template>
  <div class="zt">
    <div class="search_head">
      <i :class="['iconfont','icon-fangdajing']"></i>
      <input type="text" placeholder="城市中文名或拼音" v-model="inputValue">
      <span @click="fn8">确定</span>
    </div>

    <div class="main">
      <div class="main_1">
        <div class="hotcity">
          <span>热门城市</span>
          <a
            href="JavaScript:;"
            v-for="item in hotcity"
            :key="item.city_pinyin"
            @click="fn6(item.city_name)"
          >{{ item.city_name}}</a>
        </div>

        <div class="allcity">
          <ul :ref="`ul_${item.idx}`" v-for="(item,index) in allcity" :key="index">
            <p>{{ item.idx }}</p>
            <li
              v-for="(item1,index) in item.cities"
              :key="index"
              @click="fn7(item1.city_name)"
            >{{ item1.city_name }}</li>
          </ul>
        </div>
      </div>
      <div class="right">
        <ul>
          <li>#</li>
          <li v-for="(item,index) in zimuList" :key="index" @click="fn5(item.idx)">{{ item.idx }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
export default {
  data () {
    return {
      inputValue: ''
    };
  },

  computed: {
    ...mapState('zhouyan', ['zimuList', 'hotcity', 'allcity', 'site'])
  },

  methods: {
    ...mapActions('zhouyan', ['getZimuList']),
    ...mapMutations('zhouyan', [`SETSITE`]),
    fn5 (value) {
      let box = this.$refs[`ul_${value}`];
      console.log(box);
      let top = box[0].offsetTop;
      console.log(top);
      document.getElementsByClassName('main')[0].scrollTop = top - 42;
      // let time = setInterval(() => {
      //   if (document.getElementsByClassName("main")[0].scrollTop <= top - 42) {
      //     document.getElementsByClassName("main")[0].scrollTop += 4;
      //     if (
      //       document.getElementsByClassName("main")[0].scrollTop >=
      //       top - 42
      //     ) {
      //       clearInterval(time);
      //     }
      //   } else {
      //     document.getElementsByClassName("main")[0].scrollTop -= 4;
      //     if (
      //       document.getElementsByClassName("main")[0].scrollTop <=
      //       top - 42
      //     ) {
      //       clearInterval(time);
      //     }
      //   }
      // }, 1);
    },
    fn6 (value) {
      this.inputValue = value;
    },
    fn7 (value) {
      this.inputValue = value;
    },
    fn8 () {
      this.SETSITE(this.inputValue);
      // 弹出框
      this.$dialog
        .alert({
          message: `是否确实城市为"${this.inputValue}"`, // 改变弹出框的内容
          showCancelButton: true // 展示取水按钮
        })
        .then(() => {
          // 点击确认按钮后的调用
          this.historyList = [];
          this.isShow = false;
          this.$router.push('/shouye1');
          console.log('点击了确认按钮噢');
        })
        .catch(() => {
          // 点击取消按钮后的调用
          console.log('点击了取消按钮噢');
        });
    }
  },

  created () {
    this.getZimuList();
  }
};
</script>

<style scope>
li {
  list-style: none;
}
html,
body {
  height: 100%;
}
#app {
  height: 100%;
}
.zt {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.search_head {
  display: block;
  height: 42px;
  flex-shrink: 0;
  position: relative;
  padding: 10px 15px;
  box-sizing: border-box;
}
.search_head i {
  position: absolute;
  left: 20px;
  top: 12px;
  z-index: 99;
  font-size: 18px;
  color: #999;
}
.search_head input {
  width: 286px;
  height: 21px;
  border: 0;
  background: #ffffff;
}
.search_head span {
  float: right;
  color: #999;
  font-size: 14px;
  margin-top: 3px;
}
.main {
  flex: 1;
  overflow-y: auto;
  width: 337px;
}
.main_1 {
}
.main_1 .hotcity {
  height: 182px;
  padding: 15px 0 15px 15px;
}
.main_1 .hotcity span {
  display: block;
  font-size: 14px;
  color: #999;
}
.main_1 .hotcity a {
  display: inline-block;
  width: 22.73%;
  text-align: center;
  border: 1px solid #eee;
  border-radius: 2px;
  font-size: 14px;
  line-height: 35px;
  box-sizing: border-box;
  margin: 10px 1.13% 0 1.13%;
  color: #333;
}
.allcity ul {
  position: relative;
}
.allcity ul li {
  height: 41px;
  color: #333;
  font-size: 16px;
  padding-left: 15px;
  line-height: 41px;
}
.allcity ul p {
  display: block;
  background: #eeeeee;
  height: 24px;
  font-size: 14px;
  padding: 0 0 0 5px;
  line-height: 24px;
}

.main .right {
  width: 38px;
  height: 100%;
  margin-top: 41px;
  background: #ffffff;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
}
.main .right ul {
  justify-content: center;
  margin: auto;
}
.main .right li {
  text-align: center;
  font-size: 12px;
  color: #999;
  height: 16px;
}
</style>
