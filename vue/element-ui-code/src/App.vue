<template>
  <div id="app">
    <el-button round  plain type="success" icon="el-icon-check"> <span slot="ddd"> 按钮 </span></el-button>
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
