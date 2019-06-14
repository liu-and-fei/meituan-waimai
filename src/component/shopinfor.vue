<template>
  <div class="shopinfor">
    <ul>
      <li>♀&nbsp;{{shopinfor.shopAddress}}</li>
      <li>㉿&nbsp;查看食品安全档案</li>
      <li>☸&nbsp;配送时间:  {{shopinfor.serTime[0]}}</li>
      <li @click="show=!show">
        ☀&nbsp;{{shopinfor.tip}}
        <van-actionsheet v-model="show" title="" class="ac-sheet">
          <h2>配送</h2>
          <p>起送¥5</p>
          <p>配送时间:   {{shopinfor.serTime[0]}}</p> <br/>
          <h2>公告</h2>
          <p class="notice">{{shopinfor.tip}}</p>
        </van-actionsheet>
      </li>

      <li>商家服务:&nbsp;<span>服</span>&nbsp;&nbsp;{{shopinfor.brandMsg}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: false
    }
  },
  props: {
    shopinfor: Object
  }
}
</script>
<style>
.shopinfor ul li{
  padding: 18px 15px;
}
.shopinfor ul li:nth-child(3){
  border-top: 1px solid #000;
  border-bottom: 1px solid #000
}
ul li:nth-child(4){
  font-size: 14px;
  width: 340px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
 ul li:nth-child(5) span{
  color: blue;
  font-size: 10px;
  text-align: center;
  line-height: 15px;
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 1px solid blue;
}
.shopinfor .ac-sheet{
  font-size: 12px;
  line-height: 16px;
  box-sizing: border-box;
  width: 375px;
  padding: 20px 15px 35px;
}
.shopinfor .ac-sheet h2{
  font-size: 16px;
  font-weight: bold;
}
.notice{
  width: 300px;
}
</style>
