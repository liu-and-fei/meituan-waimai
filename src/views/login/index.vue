<template>
<div class="main-login">
    <div class="top">
      <div class=“top-tu”>
        <img class="top-img"
        src="http://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:9096d347/7a5ff05b334e0debdd10954a7f5d4789.png"/>
        <p>美团外卖</p>
      </div>
    </div>
    <div class="center">
      <input type="tel" ref="txt" @focus="handFocus"
       class="txt" placeholder="请输入手机号" maxlength="12" />
      <input type="password" ref="pass" @focus="handFocus"
       class="pass" placeholder="请输入密码" maxlength="16"
       @keyup.13="handleLogin"
      />
      <span class="info" ref="info"></span>
      <button class="btn" ref="btn" @click="handleLogin">登录</button>
      <router-link class="reg" to="/reg">注册</router-link>
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
      if (iphone.test(txt) && mima.test(pass)) {
        this.$refs.btn.innerHTML = '正在登录....'
        this.$refs.btn.disabled = true;
        let name = this.$refs.txt.value;
        // console.log(this.$refs.txt.value);
        // console.log(this.$refs.pass.value);
        var login = (window.localStorage.getItem(name));
        setTimeout(() => {
          if (login != null) {
            console.log(this.$route);
            let redirect = this.$route.query.redirect || '/myde';
            window.localStorage.setItem('ifLogin', true);
            this.$router.replace(redirect);
          } else {
            this.$refs.info.innerHTML = '登录失败'
          }
          this.$refs.btn.innerHTML = '登录'
          this.$refs.btn.disabled = false;
        }, 2000)
      } else if (!iphone.test(txt) || !mima.test(pass)) {
        this.$refs.info.innerHTML = '!请输入正确的手机号或密码';
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
  .main-login{
    background: #fff;
    height: 0;
    padding-top: 60px;
  }
  .top {
    margin: 0;
    /* margin-top: 60px; */
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
  p{
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
  .txt,.pass{
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
  .reg{
    float: right;
    margin-top: 10px;
  }
  .info{
    display: block;
    color: red;
    margin: 10px;
  }
</style>
