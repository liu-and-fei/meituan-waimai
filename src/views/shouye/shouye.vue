<template>
    <div>
      <nave></nave>
      <clss></clss>
      <!--  下拉菜单-->
      <colation></colation>
      <goodslist></goodslist>
    </div>
</template>
<script>
import nave from './nva.vue';
import clss from './class.vue';
import colation from '@/components/shouye/colation';
import goodslist from '@/components/shouye/goodslist';

export default {

  components: {
    nave,
    clss,
    colation,
    goodslist
  }
}
</script>

<style>

</style>
