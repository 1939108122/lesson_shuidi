<template>
  <div class="goods-list">
    <div class="goods-item">
      <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1584946103.92249512.jpg" alt="">
      <h1 class="title">小米（MI）小米NOte 16G双网通版</h1>
      <div class="info">
        <p class="price">
          <span class="now"> ￥2399</span>
          <span class="old"> ￥2199</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余20架</span>
        </p>
      </div>
    </div>
     <div class="goods-item">
      <img src="https://img.alicdn.com/imgextra/i4/782731205/O1CN01xg9ijO1KlvkkpYngv_!!782731205.jpg_430x430q90.jpg" alt="">
      <h1 class="title">尼康（NIkon）D3300套机（18-55mm f/3.5-5.6G VRII）（黑色） </h1>
      <div class="info">
        <p class="price">
          <span class="now"> ￥2399</span>
          <span class="old"> ￥2199</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余20架</span>
        </p>
      </div>
    </div>
    <div class="goods-item">
      <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1584946103.92249512.jpg" alt="">
      <h1 class="title">小米（MI）小米NOte 16G双网通版</h1>
      <div class="info">
        <p class="price">
          <span class="now"> ￥2399</span>
          <span class="old"> ￥2199</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余20架</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
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