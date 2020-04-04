// 入口文件
import Vue from 'vue'
// 配置vuex的步骤
// 1. 运行 cnpm i vuex -S 
// 2. 导入包
import Vuex from 'vuex'
// 3. 注册vuex到vue中
Vue.use(Vuex)

var store = new Vuex.Store({
  state: { //state就相当于组件中的data，专门用来存储数据的
    count:0
  },
  mutations: {  //注意 如果要操作 store 中的 state值, 只能通过调用mutation 提供的方法 才能操作对应的数据 不能直接操作
    increment(state) {
      state.count++
      // 如果组件想要调用 mutations 中的方法 只能使用 this.$store.commit('方法名')
    }
  },
})


import App from './App.vue'

const vm = new Vue({
  el: '#app',
  render: c => c(App),
  store // 5. 将 vuex 创建的 store 挂载到 VM 实例上， 只要挂载到了 vm 上，任何组件都能使用 store 来存取数据
})