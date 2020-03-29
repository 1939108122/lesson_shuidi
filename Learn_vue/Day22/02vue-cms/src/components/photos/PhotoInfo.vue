<template>
  <div class="photos-container">
    <h3>{{ photos.title }}</h3>
    <p class="subtitle">
      <span>发表时间： {{ photos.add_time | dataFormat }}</span>
      <span>点击； {{ photos.click }}次</span>
    </p>
    <hr>
    <!-- 缩略图区域 -->
    <!-- 图片内容区域 -->
    <div class="content" v-html="photos.content"></div>
    <!-- 评论区域 -->
    <cmt-box :id="id"></cmt-box>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
import comment from '../subcomponents/comment.vue'
export default {
  data () {
    return {
      id:this.$route.params.id,
      photos: [] 
    }
  },
  components: {
    'cmt-box':comment 
  },
  created() {
    this.getPhotoInfo()
  },
  methods: {
    getPhotoInfo () {
       this.$http.get('api/getimageInfo/' + this.id ).then( result=> {
         if(result.body.status === 0)
        {
            
            this.photos = result.body.message[0]
        }else{
          Toast('获取数据失败')
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.photos-container{
  padding: 3px;
  h3{
    color: #26A2FF;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;

  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
  .content{
    font-size: 13px;
    line-height: 30px;
  }
}
</style>