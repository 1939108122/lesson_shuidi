<template>
  <div class="goods-list">
    <div class="goods-item" v-for="item in goodslist" :key="item.id">
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