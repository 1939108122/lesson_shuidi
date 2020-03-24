<template>
  <div>
    <ul class="mui-table-view">
     <li class="mui-table-view-cell mui-media">
          <a href="javascript:;">
            <img class="mui-media-object mui-pull-right" src="https://123p3.sogoucdn.com/imgu/2020/02/20200210192152_359.jpg">
            <div class="mui-media-body">
              <h1>幸福</h1>
              <p class='mui-ellipsis'>
               <span>发表时间：2020-02-02 14:02</span>
                <span> 点击0次 </span>
              </p>
            </div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media">
          <a href="javascript:;">
            <img class="mui-media-object mui-pull-right" src="https://123p3.sogoucdn.com/imgu/2020/02/20200210192152_359.jpg">
            <div class="mui-media-body">
              <h1>幸福</h1>
              <p class='mui-ellipsis'>
                <span>发表时间：2020-02-02 14:02</span>
                <span> 点击0次 </span>
              </p>
            </div>
          </a>
        </li>
         <li class="mui-table-view-cell mui-media">
          <a href="javascript:;">
            <img class="mui-media-object mui-pull-right" src="https://123p3.sogoucdn.com/imgu/2020/02/20200210192152_359.jpg">
            <div class="mui-media-body">
              <h1>幸福</h1>
              <p class='mui-ellipsis'>
               <span>发表时间：2020-02-02 14:02</span>
                <span> 点击0次 </span>
              </p>
            </div>
          </a>
        </li>
    </ul>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
   data() {
      return {
        newslist: []
      }
    },
    created() {
      this.getNewsList() 
      
    },
    methods: {
      getNewsList() {
        this.$http.get('api/getnewslist').then(result=> {
          // console.log(result.body);
          if(result.body.status === 0)
          {
            this.getnewslist = result.body.message
          }
          else{
            Toast('加载轮播图失败')
          }
        })
      }
    }
}
</script>
<style lang="scss" scoped>
  .mui-table-view{
    li{
      h1{font-size: 14px;}
    }
    .mui-ellipsis{
      font-size: 12px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }

  }

</style>