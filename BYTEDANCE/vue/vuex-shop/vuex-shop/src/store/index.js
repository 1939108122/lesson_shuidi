import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import cart from './modules/cart'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo:{
      uid:10001,
      username: '扎克拉文',

    }
  },
  mutations: {
  },
  actions: {
    
  },
  modules: {
    cart,
    products
  }
})
