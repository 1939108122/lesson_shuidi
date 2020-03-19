<template>
  <ul>
    <li 
      v-for="product in products"
      :key="product.id">
      {{product.title}} - {{product.price}} - {{product.inventory}}
      <br>
      <button
        :disabled="!product.inventory"
       @click="addProductToCart(product)">
        Add to cart
      </button>
    </li>
  </ul>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: mapState({
    products: (state) =>  state.products.all
  }),
  created() { // 比mounted 更早发生
    // console.log(this.$store.state.products)
    this.$store.dispatch('products/getAllProducts')
  },
  methods: mapActions('cart', [
    'addProductToCart'
  ])
}
</script>