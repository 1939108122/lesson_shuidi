<template>
  <div class="newsinfo-container">
    <h3 class="title">{{ newsinfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ newsinfo.add_time | dataFormat}}</span>
      <span>点击： {{ newsinfo.click }}次</span>
    </p>

    <hr>
    <div class="content" v-html="newsinfo.content">

    </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
  data() {
    return {
      id : this.$route.params.id,
      newsinfo: {}
    }
  },
  created() {
    this.getNewsInfo()
  },
  methods: {
    getNewsInfo() {
      this.$http.get('api/getnew/' + this.id).then(result => {
        if(result.body.status === 0)
        {
          this.newsinfo = result.body.message[0]
        }else{
          Toast('获取资料失败')
        }
      })
    }
  }

}
</script>
<style lang="scss">
.newsinfo-container{
  padding: 0 4px;
  .title{
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle{
    font-size: 13px;
    color: blue;
    display: flex;
    justify-content: space-between;
  }
  .content{
    img{
      width: 100%;
    }
  }
}
</style>