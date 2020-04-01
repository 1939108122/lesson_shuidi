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
						包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
		  </div>
		</div>
	</div>

  <!-- 商品参数区域 -->
  <div class="mui-card">
				<div class="mui-card-header">页眉</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						包含页眉页脚的卡片，页眉常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）
					</div>
				</div>
				<div class="mui-card-footer">页脚</div>
			</div>
</div>
</template>
<script>
import { Toast } from 'mint-ui'
import swiper from '../subcomponents/swiper.vue'
export default {
  data() {
    return{
      id: this.$route.params.id,
      lunbotu:[]
    }
  },
  components:{
    swiper
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
}
</style>
