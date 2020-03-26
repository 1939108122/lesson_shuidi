<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="最多允许你BB 120个字" maxlength="120"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, i) in comments" :key="item.add_time">
        <div class="cmt-title">第{{ i +1 }}楼&nbsp;&nbsp;&nbsp;用户:{{ item.user_name}}&nbsp;&nbsp;
          发表时间：{{ item.add_time | dataFormat }}</div>
        <div class="cmt-body">{{ item.content === 'undefined'? '此用户很懒，什么都没留下':item.content }}</div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain>加载更多</mt-button>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
    data() {
      return {
        comments:[],
        pageIndex: 1
      }
    },
    created() {
      this.getComments()
    },
    methods: {
      getComments() {
        this.$http.get("api/getcomments/"+ this.id +"?pageindex=" + this.pageIndex ).then(result=>{
          if(result.body.status === 0)
          {
            this.comments = result.body.message
          }
          else{
            Toast('获取内容失败')
          }
          // console.log(result.body)
        })
      }
    },
    props:['id']
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