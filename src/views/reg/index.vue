<template>
<div class="main-reg">
    <div class="top">
      <div class=“top-tu”>
        <img class="top-img"
        src="http://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:9096d347/7a5ff05b334e0debdd10954a7f5d4789.png"/>
        <p>美团外卖</p>
      </div>
    </div>
    <div class="center">
      <input type="tel" ref="txt" @focus="handFocus" class="txt" placeholder="请输入手机号" maxlength="12" />
      <input type="password" ref="pass" @focus="handFocus" class="pass" placeholder="请输入密码" maxlength="16"/>
      <input type="password" ref="affirm" class="affirm" placeholder="请确认密码" maxlength="16"/>
      <span class="info" ref="info"></span>
      <button class="btn" ref="btn" @click="handleLogin">注册</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    handleLogin () {
      var iphone = /^1[3|4|5|8][0-9]\d{4,8}$/g;
      var mima = /^[a-zA-Z]\w{3,15}$/g;
      var pass = this.$refs.pass.value;
      var txt = this.$refs.txt.value;
      var affirm = this.$refs.affirm.value;
      if (iphone.test(txt) && mima.test(pass) && pass === affirm) {
        let userInfo = {
          name: this.$refs.txt.value,
          pwd: this.$refs.pass.value
        };
        let name = this.$refs.txt.value;
        // console.log(window.localStorage.getItem(name));
        let reg = window.localStorage.getItem(name);
        // console.log(reg);
        setTimeout(() => {
          if (reg != null) {
            this.$refs.info.innerHTML = '手机号已被注册'
          } else {
            window.localStorage.setItem(name, JSON.stringify(userInfo));
            this.$refs.info.innerHTML = '注册成功,即将跳转到登录';
            setTimeout(() => {
              this.$router.replace('/login');
            }, 2000)
          }
        }, 1000)
      } else if (!mima.test(pass)) {
        this.$refs.info.innerHTML = '!密码错误: 密码为字母、数字、下划线组成，字母开头，4-16位,';
      } else if (!iphone.test(txt)) {
        this.$refs.info.innerHTML = '请输入正确的手机号';
      }
      if (affirm !== pass) {
        this.$refs.info.innerHTML = '!密码不一致';
      }
      if (affirm === '') {
        this.$refs.info.innerHTML = '!确认密码不能为空';
      }
      if (pass === '') {
        this.$refs.info.innerHTML = '!密码不能为空';
      }
      if (txt === '') {
        this.$refs.info.innerHTML = '!手机号不能为空';
      }
    },
    handFocus () {
      this.$refs.info.innerHTML = '';
    }
  }
}
</script>

<style>
@import '~@/styles/common/reset.css';
input{
  padding-left: 0;
  border-radius: 0;
  background: #fff;
}
  .main-reg{
    background: #fff;
    height: 0;
    padding-top: 60px;
  }
 .main-reg .top {
    margin: 0;
    margin-bottom: 48px;
    padding: 0;
    text-align: center
    }
  .top-tu{
      display: inline-block;
      margin: 0 10px;
  }
  .top-img{
    width: 66px;
    margin: 0 auto;
    padding: 0;
    display: block;
  }
.top-tu p{
    font-size: 18px;
    height: 24px;
    line-height: 24px;
    font-weight: 530
  }
  .center{
    width: 100%;
    padding: 1.2em;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .txt,.pass,.affirm{
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 10px;
    height: 32px;
    margin-top: 10px;
  }
  .btn{
    width: 336px;
    height: 46px;
    /* margin-top: 34px; */
    text-align: center;
    color: #999;
    background: #e5e5e5;
    /* border: none; */
  }
  .info{
    display: block;
    color: red;
    margin: 10px;
  }
</style>
