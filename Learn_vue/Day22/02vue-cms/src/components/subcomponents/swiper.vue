<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.img">
        <img :src="item.img" alt="" :class="{'full':isfull}">
      </mt-swipe-item>
    </mt-swipe>
  </div>
  <!-- 首页轮播图使用了宽度100% 商品详情页需要使用图片宽度为 自适应 ，怎么做到两全其美 需要定义一个属性传值过去为width100%是为真还是假 -->
</template>
<script>
export default {
  data() {
    return {

    }
  },
  props: ['lunbotuList','isfull']
}
</script>
<style lang="scss" scoped>
.mint-swipe{
    height: 200px;
    .mint-swipe-item{
      text-align: center;
      img{
        // width: 100%;
        height: 100%;
      }
    }
}
.full{
  width: 100%;
}
</style>