<template>
  <div class="photos-container">
    <h3>{{ photos.title }}</h3>
    <p class="subtitle">
      <span>发表时间： {{ photos.add_time | dataFormat }}</span>
      <span>点击； {{ photos.click }}次</span>
    </p>
    <hr>
    <!-- 缩略图区域 -->
    <div class="thumbs">
      <vue-preview :slides="list" class="imgPrev"></vue-preview>
  </div>
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
      photos: {},
      list: []
    }
  },
  components: {
    'cmt-box':comment 
  },
  created() {
    this.getPhotoInfo(),
    this.getThumbs()
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
    },
    getThumbs() {
         this.$http.get('api/getthumimages/' + this.id ).then( result=> {
         if(result.body.status === 0)
        {
            // 循环每个图片数据 补全图片的宽和高
            result.body.message.forEach(item=> {
              item.w = 600
              item.h = 400
              item.src = item.src;  //大图
              item.msrc = item.src;  //小图
            })
            this.list = result.body.message
        }else{
          Toast('获取数据失败')
        }
      })
    }
  }
}
</script>
<style lang="scss">
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
.thumbs{
.imgPrev{
.my-gallery{
figure{
display: inline-block;
margin: 8px;
}
img{
width: 100px;
height: 80px;
}
}
}
}
</style>