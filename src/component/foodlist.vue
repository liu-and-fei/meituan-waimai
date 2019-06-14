<template>
  <div>
    <!-- {{foodlist}} -->
    <ul
      v-for="(variety,index) in foodlist.categoryList"
      :key="variety.tag"
      :index="index"
      class="food-list"
      >
      <h1>{{variety.categoryName}}</h1>
      <goods :goodsList="variety.spuList" class="spulist"></goods>
    </ul>
  </div>
</template>
<script>
import goods from '@/component/goods.vue'
export default {
  props: {
    foodlist: Object
  },
  components: {
    goods
  }
}
</script>
<style>
ul{
  width: 100%;
}
ul h1{
  display: block;
  margin-left: 10px;
  font-size: 12px;
  line-height: 36px
}
</style>
