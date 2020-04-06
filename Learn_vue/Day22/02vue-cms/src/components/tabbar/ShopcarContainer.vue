<template>
  <div class="shopcar-container">
  <!-- 列表区域 -->
    <div class="goodslist">
      <div class="mui-card" v-for="item in goodslist" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch></mt-switch>
						<img :src="item.thumb_path">
						<div class="info">
							<h1>{{ item.title }}</h1>
							<p>
								<span class="price">{{ item.sell_price }}</span>
								<numbox :initcount="$store.getters.getCount[item.id]" :goodsid="item.id"></numbox>
								<a href="#" class="a">删除</a>
							</p>
						</div>
					</div>
				</div>
			</div>
    </div>
    <!-- 结算区域 -->
    <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
					</div>
				</div>
			</div>

  </div>
</template>
<script>
import numbox from '../subcomponents/shopcar_numbox.vue'
import { Toast } from 'mint-ui'
export default {
	components: {
		numbox
	},
	data(){ 
		return {
			goodslist: []
		}
	},
	created() {
		this.getGoodsList()
	},
	methods: {
		getGoodsList() {
			var idArr = []
			this.$store.state.car.forEach(item=> idArr.push(item.id) )
			// 购物车没有商品 则返回 不许请求接口要不然会报错
			if(idArr.length <=0)
			{
				return;
			}
			this.$http.get('api/goods/getshopcarlist/' + idArr.join(',')).then(result=> {
				if (result.body.status === 0)
				{
					this.goodslist = result.body.message
				}
				else{
					Toast('获取信息失败！')
				} 
			})
		}
	}
}
</script>
<style lang="scss" scoped>
.shopcar-container{
	background-color: #eee;
	overflow: hidden;
	.goodslist{
		.mui-card-content-inner{
			display: flex;
		}
		img{
			width: 60px;
			height: 60px;
		}
		h1{
			font-size: 13px;
		}
		.info{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.price{
				color: red;
				font-weight: bold;
			}
			.a{
				font-size: 12px;
			}

		}
	}
}
</style>