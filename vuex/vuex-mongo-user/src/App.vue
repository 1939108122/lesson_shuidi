<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <div v-for="(user, index) in this.$store.state.users" :key="index"> -->
      <div v-for="(user, index) in getUsers" :key="index">
       {{ user.id }}{{ user.name }}
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import {mapGetters, mapActions} from 'vuex'
export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data() {
    return {
      users: [
      // {
      //   "address": {
      //     "city": "Los Angeles",
      //     "state": 'california',
      //     "poncode": "123"
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
      //     "poncode": "33100"
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
      //     "poncode": "33100"
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
      //     "poncode": "33100"
      //   },
      //   "tags": [
      //     "coding",
      //     "games"
      //   ],
      //   "name": "衷从海"
      // }
      ]
    }
  },
  methods: {
    ...mapActions(['fetchUsers'])
  },
  mounted() {  //使用生命周期取数据
  // 派遣一个动作
    // this.$store.dispatch('fetchUsers')
    this.fetchUsers();
  },
  computed: {
    ...mapGetters(['getUsers'])
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
