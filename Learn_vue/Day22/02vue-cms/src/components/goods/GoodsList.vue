<template>
  <div class="goods-list">
    <!-- <router-link class="goods-item" v-for="item in goodslist" :key="item.id" :to="'/home/goodsinfo/' + item.id">
      <img :src="item.img_url" tag="div">
      <h1 class="title">{{ item.title }}</h1>
      <div class="info">
        <p class="price">
          <span class="now"> {{ item.sell_price}}</span>
          <span class="old"> {{ item.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余{{ item.stock_quantity }}架</span>
        </p>
      </div>
    </router-link> -->
    <!-- 在网页中 有两种跳转方式 1 使用a标签  2  使用window.location.href 的形式 叫做编程式导航 -->
        <div class="goods-item" v-for="item in goodslist" :key="item.id" @click="goDetail(item.id)">
      <img :src="item.img_url">
      <h1 class="title">{{ item.title }}</h1>
      <div class="info">
        <p class="price">
          <span class="now"> {{ item.sell_price}}</span>
          <span class="old"> {{ item.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余{{ item.stock_quantity }}架</span>
        </p>
      </div>
    </div>
    <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'

export default {
  data() {
    return {
      pageindex:1,
      goodslist:[]
    }
  },
  created() {
    this.getGoodsList()
  },
  methods: {
    getGoodsList() {
      // 获取商品列表
        this.$http.get("api/getgoods?pageindex=" + this.pageindex).then(result=>{
          if(result.body.status === 0)
          {
            
            this.goodslist = this.goodslist.concat(result.body.message)
          }
          else{
            Toast('获取内容失败')
          }
          
        })
    },
      getMore() {
    this.pageindex++,
    this.getGoodsList()
  },
  goDetail(id) {
    // 使用js的形式进行路由导航

    // 一定要区分 this.$route 和 this.$router 其中 this.$route 为路由参数对象 params query都属于他 
    // this.$router  是一个路由导航对象 用它可以方便的使用 JS代码实现路由的前进、后退 跳转到新的 URL地址 
    // this.$router.push('/home/goodsinfo/' + id )
    // 传递对象
    // this.$router.push({path:'/home/goodsinfo/' + id })
      this.$router.push({name:'goodsinfo', params:{id}})
  }
  },

}
</script>
<style lang="scss" scoped>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
  justify-content: space-between;
  .goods-item{
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 3px 0;
    padding: 2px;
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    min-height: 293px;

    img{
      width: 100%;
    }
    .title{
      font-size: 14px;
    }
    .info{
      background-color: #eee;
      p{
        margin: 0;
        padding: 5px;
      }
      .price{
        .now{
          color:red;
          font-weight: bold;
          font-size: 16px;
        }
        .old{
          text-decoration: line-through;
          font-size: 12px;
          margin: 10px;
        }
      }
      .sell{
        display: flex;
        justify-content: space-between;
        font-size: 14px;
      }
    }
  }
}
</style>