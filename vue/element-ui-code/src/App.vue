<template>
  <div id="app">
    <el-button loading round  plain nativeType="submit" type="success" icon="el-icon-edit" @click="upload"> 
      编辑按钮
    </el-button>
    <el-button type="text"> 
      文本
    </el-button>
    <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i>
    </el-button>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
  import ElButton from './components/ElButton.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld
    ElButton
  },
  methods: {
    upload(evt) {
      console.log(evt)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
