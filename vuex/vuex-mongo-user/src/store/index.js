import Vue from 'vue'
import Vuex, { mapActions } from 'vuex'
import api from '@/api/index.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users:[
      // {
      //   "address": {
      //     "city": "Los Angeles",
      //     "state": 'california',
      //     "pincode": "123"
      //   },
      //   "tags": [
      //     "music",
      //     "blogs",
      //     "cricket"
      //   ],
      //   "name": "Tom Benzamin"
      // },
      // {
      //   "address": {
      //     "city": "抚州",
      //     "state": '江西',
      //     "pincode": "33100"
      //   },
      //   "tags": [
      //     "coding",
      //     "blogs"
      //   ],
      //   "name": "塔图姆"
      // },
      // {
      //   "address": {
      //     "city": "九江",
      //     "state": '江西',
      //     "pincode": "33100"
      //   },
      //   "tags": [
      //     "coding",
      //     "blogs"
      //   ],
      //   "name": "刘子民"
      // },
      // {
      //   "address": {
      //     "city": "赣州",
      //     "state": '江西',
      //     "pincode": "33100"
      //   },
      //   "tags": [
      //     "coding",
      //     "games"
      //   ],
      //   "name": "衷从海"
      // }
    ]
  },
  mutations: {
    setUsers(state, payload) { //对数据的写操作唯一地方
      state.users = payload
    }
  },
  actions: {  //写入状态的第一步
    // 负责api通信的地方
    fetchUsers( context ) {
      api
      .fetchUsers((users) =>{
          // console.log(users);
          context.commit('setUsers', users)
        })
    },
   
  },
  modules: {
  },
  getters: {  //state 相当于computed函数
    getUsers(state) {    //得到state 读操作
      return state.users.map((user, index) =>{
        user.id = user.address.pincode
        return user
      })
    }
  }
})
