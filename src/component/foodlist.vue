<template>
  <div>
    <!-- {{foodlist}} -->
    <ul
      v-for="(variety,index) in foodlist.categoryList"
      :key="variety.tag"
      :index="index">
      <h1>{{variety.categoryName}}</h1>
      <!-- <li
        v-for="goods in variety.supList"
        :key="goods.supId">
        <img :src="goods.bigImageUrl">
      </li> -->
      <goods :goodsList="variety.spuList"></goods>
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
ul h1{
  display: block;
  margin-left: 10px;
  font-size: 12px;
  line-height: 36px
}
</style>
