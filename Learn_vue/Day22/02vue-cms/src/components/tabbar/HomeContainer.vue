<template>
    <div>
      <swiper :lunbotuList="lunbotuList"></swiper>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
            <span class="mui-icon mui-icon-home"></span>
            <div class="mui-media-body">新闻资讯</div></router-link></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to= "/home/photolist">
            <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
            <div class="mui-media-body">图片分享</div></router-link></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
            <span class="mui-icon mui-icon-chatbubble"></span>
            <div class="mui-media-body">商品购买</div></router-link></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <span class="mui-icon mui-icon-location"></span>
            <div class="mui-media-body">留言反馈</div></a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <span class="mui-icon mui-icon-search"></span>
            <div class="mui-media-body">查找</div></a></li>
          <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <span class="mui-icon mui-icon-phone"></span>
            <div class="mui-media-body">手机</div></a></li>
        </ul> 
    </div>
</template>
<script>
import { Toast } from 'mint-ui'
import swiper from '../subcomponents/swiper.vue'
export default {
    data() {
      return {
        lunbotuList: []
      }
    },
    components:{
      swiper
    },
    created() {
      this.getLunbotu()
    },
    methods: {
      getLunbotu() {
        this.$http.get('api/getlunbo').then(result=> {
          // console.log(result.body);
          if(result.body.status === 0)
          {
            this.lunbotuList = result.body.message
          }
          else{
            Toast('加载轮播图失败')
          } 
        })
      }
    }
}
</script>
<style lang="scss">

</style>