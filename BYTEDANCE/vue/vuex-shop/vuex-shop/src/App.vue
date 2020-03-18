<template>
  <div id="app">
    <products/>
    <cart/>
    <!-- {{ this.$store.state.userInfo }}
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> 
    <router-view/>-->
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import ShoppingCart from '@/components/ShoppingCart.vue'
import ProductList from '@/components/ProductList.vue'
export default {
  components: {
    'products': ShoppingCart,
    'cart': ProductList
  },
  mounted() {
    // this.dispatch('')
    // console.log(this.$store.state.products.all)
    //  console.log(this.$store.state.cart.items)
  }
}
</script>