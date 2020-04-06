<template>
  <div class="shopcar-container">
  <!-- 列表区域 -->
    <div class="goodslist">
      <div class="mui-card" v-for="(item, i) in goodslist" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch v-model="$store.getters.getSelected[item.id]"
						@change="selectedChanged( item.id, $store.getters.getSelected[item.id] )"></mt-switch>
						<img :src="item.thumb_path">
						<div class="info">
							<h1>{{ item.title }}</h1>
							<p>
								<span class="price">{{ item.sell_price }}</span>
								<numbox :initcount="$store.getters.getCount[item.id]" :goodsid="item.id"></numbox>
								<a href="#" class="a" @click.prevent="remove(item.id, i)">删除</a>
							</p>
						</div>
					</div>
				</div>
			</div>
    </div>
    <!-- 结算区域 -->
    <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner jiesuan">
						<div class="left">
							<p>总计（不含运费）</p>
							<p>已勾选商品 <span class="red">{{ $store.getters.getGoodsAndAmount.count }} 
							</span>件， 总价 <span class="red">￥ {{ $store.getters.getGoodsAndAmount.amount }}</span></p>
						</div>
						<mt-button type="danger">去结算</mt-button>
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
		},
		remove (id, index)
		{
			this.goodslist.splice(index, 1)
			this.$store.commit('removeFromCar', id)		
	},
	selectedChanged(id, val)
	{
		// 每当点击开关，把最新的开关状态同步到 store 中去
		this.$store.commit('updateGoodsSelected', { id, selected: val })
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
	.jiesuan{
		display: flex;
		justify-content: space-between;
		align-items: center;
		.red{
			color: red;
			font-weight: bold;
			font-size: 16px;
		}
	}
}
</style>