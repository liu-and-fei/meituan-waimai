<template>
  <div>
    <section class="classify">
      <a href="#">
        <img src="http://p1.meituan.net/jungle/8b5e1702d4145ccf058ba5fb31008c5310912.png">
        <p>美食</p>
      </a>
      <a href="#">
        <img src="http://p0.meituan.net/jungle/45ff2f098a20a77122bff8385192f0ec10547.png">
        <p>蔬菜水果</p>
      </a>
      <a href="#">
        <img src="http://p1.meituan.net/jungle/12a9834827909fa55f54bce96e67470711250.png">
        <p>美食</p>
      </a>
    </section>
  </div>
</template>
<script>
export default {
  computed: {},

  methods: {}
};
</script>

<style scope>
.classify {
  height: 182px;
  width: 100%;
  margin-top: 50px;
  box-sizing: border-box;
  padding: 0.24rem 0 0 0;
  display: flex;
  flex-wrap: wrap;
  overflow-x: auto;
  overflow-y: hidden;
  flex-shrink: 0;
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
.classify a img {
  width: 44px;
}
</style>
