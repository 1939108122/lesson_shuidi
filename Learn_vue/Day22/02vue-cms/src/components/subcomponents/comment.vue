<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="最多允许你BB 120个字" maxlength="120"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">第一楼&nbsp;&nbsp;&nbsp;用户&nbsp;&nbsp;匿名用户&nbsp;&nbsp;发表时间：2017-01-02</div>
        <div class="cmt-body">锄禾日当午</div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain>加载更多</mt-button>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.cmt-container{
  h3{
    font-size: 18px;
  }
  textarea{
    height: 85px;
    margin: 0;
    font-size: 14px;
  }
  .cmt-list{
    margin: 5px 0;
    .cmt-item{
      font-size: 13px;
      .cmt-title{
        line-height: 30px;
        background-color: #ccc;

      }
      .cmt-body{
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>