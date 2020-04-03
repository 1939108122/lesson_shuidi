<template>
<div class="goodsinfo-container">
  <!-- 商品轮播图区域 -->
  <transition
  @before-enter="beforeEnter"
  @enter="enter"
  @after-enter="afterEnter"
  >
    <div class="ball" v-show="ballflag" ref="ball"></div>
  </transition>

  <div class="mui-card">
		<div class="mui-card-content">
			<div class="mui-card-content-inner">
				<swiper :lunbotuList="lunbotu" :isfull="false"></swiper>
			</div>
		</div>
	</div>
  <!-- 商品购买区域 -->
  <div class="mui-card">
		<div class="mui-card-header">{{ goodsinfo.title }}</div>
		<div class="mui-card-content">
			<div class="mui-card-content-inner">
        <p class="price">
          市场价：<del>{{ goodsinfo.market_price }}</del>&nbsp;&nbsp;
          销售价：<span class="now_price">{{ goodsinfo.sell_price }}</span>
        </p>
        <p>购买数量:<numbox></numbox></p>
        <p>
          <mt-button type="primary" size="small">立即购买</mt-button>
          <mt-button type="danger" size="small" @click="addshopcar">加入购物车</mt-button>
        </p>
		  </div>
		</div>
	</div>

  <!-- 商品参数区域 -->
  <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
            <p>商品货号：{{ goodsinfo.goods_no }}</p>
            <p>库存情况：{{ goodsinfo.stock_quantity }}件</p>
            <p>上架时间：{{ goodsinfo.add_time | dataFormat }}</p>
					</div>
				</div>
				<div class="mui-card-footer">
          <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
          <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
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
      lunbotu:[],
      goodsinfo:[],
      ballflag:false
    }
  },
  components:{
    swiper,
    numbox
  },
  props:['lunbotuList'],
  created () {
    this.getLunbotu(),
    this.getGoodsInfo()
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
    },
    getGoodsInfo() {
      this.$http.get('api/goods/getinfo/' + this.id).then(result =>{
        if (result.body.status === 0)
          {
            this.goodsinfo = result.body.message[0]
          }
          else
          {
            Toast('获取信息失败！')
          }
      })
    },
    goDesc(id) {
      // 点击使用编程式导航跳转页面
      this.$router.push({ name: "goodsdesc", params: { id } })
    },
     goComment(id) {
      this.$router.push({ name: "goodscomment", params: { id } })
    },
    addshopcar() {
      this.ballflag = !this.ballflag
    },
    beforeEnter(el) {
      el.style.transform = 'translate(0, 0)'
    },
    enter(el,done) {
      
      el.offsetWidth
      // 获取小球在页面中的位置
      const ballPosition = this.$refs.ball.getBoundingClientRect()
      // 获取徽标在页面的位置（小小的使用一下DOM ^o^）
      const badgePosition = document
      .getElementById('badge')
      .getBoundingClientRect()
      const xDist = badgePosition.left - ballPosition.left
      const yDist = badgePosition.top - ballPosition.top
      el.style.transform = `translate(${xDist}px, ${yDist}px)`
      el.style.transition = 'all 1s cubic-bezier(.4, -0.3, 1, .68)'
      done()
    },
    afterEnter(el) {
      this.ballflag = !this.ballflag
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
    display: block;
    button{
      margin: 15px 0;
    }
  }
  .ball{
    height: 15px;
    width: 15px;
    background-color: red;
    border-radius: 50%;
    position: absolute;
    z-index: 99;
    top: 390px;
    left: 141px;
  }
}
</style>
