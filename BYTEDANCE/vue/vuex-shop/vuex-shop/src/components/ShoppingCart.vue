<template>
  <div class="cart">
    <!-- <hr/> -->
    <h2>Your Cart</h2>
    <!-- <div>{{this.$store.state.cart.items}}</div> -->
    <p v-show="!products.length"><i>Please add some products to cart</i></p>
    <ul>
      <li 
        v-for="product in products"
        :key="product.id">
        {{product.title}} - {{product.price}} x {{product.quantity}}
      </li>
    </ul>
    <p>Total: {{ total }}</p>
    <p>
      <button :disabled="!products.length"
       @click="checkout(products)">Checkout</button>
    </p>
    <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}</p>
  </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex'
export default {
  // 更详细的购物车商品数据
  created() {
    console.log(this.$store.state.cart, this.$store.state.products);
  },
  computed:{
    ...mapState({
      checkoutStatus: state => state.cart.checkoutStatus
    }),
    ...mapGetters('cart', {
      products: 'cartProducts',
      total: 'cartTotalPrice'
    })
  },
  methods: {
    checkout(products) {
      // console.log(products);
      this.$store.dispatch('cart/checkout', products);
    }
  }
}
</script>