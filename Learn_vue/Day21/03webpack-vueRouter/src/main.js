
import Vue from 'vue'
import app from './App.vue'
import router from './router.js'  //导入自定义路由模块
import VueRouter from 'vue-router'
Vue.use(VueRouter)
var vm = new Vue({
    el: '#app',
    render:c => c(app), // render 会把el指定的容器中会清空 覆盖  
    router //将路由对象挂载到vm上
})
//注意  App组件是通过 VM实例render 函数 渲染出来的
// Account 和GoodsList组件 是通过路由匹配监听到的 