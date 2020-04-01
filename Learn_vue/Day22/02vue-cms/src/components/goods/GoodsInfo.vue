<template>
<div class="goodsinfo-container">
  <!-- 商品轮播图区域 -->
  <div class="mui-card">
		<div class="mui-card-content">
			<div class="mui-card-content-inner">
				<swiper :lunbotuList="lunbotu" :isfull="false"></swiper>
			</div>
		</div>
	</div>
  <!-- 商品购买区域 -->
  <div class="mui-card">
		<div class="mui-card-header">页眉</div>
		<div class="mui-card-content">
			<div class="mui-card-content-inner">
        <p class="price">
          市场价：<del>￥2199</del>&nbsp;&nbsp;销售价：<span class="now_price">￥2099</span>
        </p>
        <p>购买数量</p>
        <p>
          <mt-button type="primary" size="small">加入购物车</mt-button>
          <mt-button type="primary" size="small">立即购买</mt-button>
          <numbox></numbox>
        </p>
		  </div>
		</div>
	</div>

  <!-- 商品参数区域 -->
  <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
            <p>商品货号：</p>
            <p>库存情况：</p>
            <p>上架时间：</p>
					</div>
				</div>
				<div class="mui-card-footer">
          <mt-button type="primary" size="large" plain>图文介绍</mt-button>
          <mt-button type="danger" size="large" plain>商品评论</mt-button>
        </div>
			</div>
</div>
</template>
<script>
import { Toast } from 'mint-ui'
import swiper from '../subcomponents/swiper.vue'
import numbox from '../subcomponents/goodsinfo_numbox.vue'
export default {
  data() {
    return{
      id: this.$route.params.id,
      lunbotu:[]
    }
  },
  components:{
    swiper,
    numbox
  },
  props:['lunbotuList'],
  created () {
    this.getLunbotu()  
  },

  methods: {
    getLunbotu() {
      this.$http.get('api/getthumimages/' + this.id).then(result => {
        if(result.body.status === 0) {
          // 先循环轮播图数组的每一项 为item添加 img属性 因为轮播图组件中只认识 item.img 不认识item.src
          result.body.message.forEach( item=>{
            item.img = item.src
          })
          this.lunbotu = result.body.message
        }
        else{
          Toast('获取信息失败')
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.goodsinfo-container{
  background-color: #eee;
  overflow: hidden;
  .now_price{
    color: red;
    font-size: 16px;
    font-weight: bold;
  }
  .mui-card-footer{
    flex: block;
  }
}
</style>
