<template>
  <div>
    <section class="classify">
      <a href="javaScript:;" v-for="item in classList" :key="item.cateId">
        <img :src="item.icon">
        <p>{{ item.name }}</p>
      </a>
      <span>---附近商家---</span>
    </section>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
  computed: {
    ...mapState('zhouyan', ['classList'])
  },

  methods: {
    ...mapActions('zhouyan', ['getClassList'])
    // ...mapMutations('zhouyan',[])
  },

  created () {
    this.getClassList();
  },

  mounted () {}
};
</script>

<style scope>
.classify {
  height: 200px;
  width: 100%;
  margin-top: 55px;
  box-sizing: border-box;
  padding: 0.24rem 0 0 0;
  display: flex;
  flex-wrap: wrap;
  overflow-x: auto;
  overflow-y: hidden;
  flex-shrink: 0;
}
.classify span {
  display: block;
  margin: 0 auto;
  margin-top: 15px;
  color: #333;
  font-size: 17px;
}
.classify a {
  height: 64px;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 11px;
  color: #131313;
  align-items: center;
}
.classify a p{
  font-size: 12px;
}
.classify a img {
  width: 44px;
}
</style>
