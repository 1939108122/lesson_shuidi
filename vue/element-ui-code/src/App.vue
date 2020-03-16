<template>
  <div id="app">
    <!-- <el-button loading round  plain nativeType="submit" type="success" icon="el-icon-edit" @click="upload"> 
      编辑按钮
    </el-button>
    <el-button type="text"> 
      文本
    </el-button>
    <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i>
    </el-button> -->
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div>
      <!-- <el-button-group>
        <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
        <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
      </el-button-group>
      <el-button-group>
      <el-button type="primary" icon="el-icon-edit"></el-button>
      <el-button type="primary" icon="el-icon-share"></el-button>
      <el-button type="primary" icon="el-icon-delete"></el-button>
      </el-button-group> -->
      <el-badge :value="12" class="item"> 
        <el-button size= "small"> 评论 </el-button>
      </el-badge>
      <el-badge :value="101"  :max = "99" class="item"> 
        <el-button size= "small"> 评论 </el-button>
      </el-badge>
       <el-badge  type = "primary" value="new" class="item"> 
        <el-button size= "small"> 评论 </el-button>
      </el-badge>
       <el-badge is-dot :hidden="isHideDot" class="item"> 
        <el-button> 数据查询 </el-button>
      </el-badge>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
  import ElButton from './components/ElButton.vue'
  import ElButtonGroup from './components/ElButtonGroup.vue'
    import ElBadge from './components/ElBadge.vue'
export default {
  data() {
    return {
      isHideDot: false
    }
  },
  name: 'App',
  components: {
    // HelloWorld
    ElButton,
    ElButtonGroup,
    ElBadge
  },
  methods: {
    upload(evt) {
      console.log(evt)
    },
  },
  mounted() {
    setTimeout(() =>{
      this.isHideDot = true
    }, 3000)
  }
}
</script>

<style>
.item{
  margin-right: 30px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
