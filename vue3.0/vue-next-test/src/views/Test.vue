<template>
  <div class="test">
    <h1>test count: {{count}}</h1>
    <div>count * 2 = {{doubleCount}}</div>
    <div>state from vuex {{a}}</div>
    <button @click="add">add</button>
    <button @click="update">update a</button>
  </div>
</template>

<script>
  import { ref, computed, watch, getCurrentInstance } from 'vue'

  export default {
    setup () {
      const count = ref(0)
      const add = () => {
        count.value++
      }
      watch(() => count.value, val => {
        console.log(`count is ${val}`)
      })
      const doubleCount = computed(() => count.value * 2)
      const { ctx } = getCurrentInstance()
      console.log(ctx.$router.currentRoute.value)
      const a = computed(() => ctx.$store.state.test.a)
      const update = () => {
        ctx.$store.commit('setTestA', count)
      }
      return {
        count,
        doubleCount,
        add,
        a,
        update
      }
    }
  }
</script>
<style lang="less" scoped>
.test {
  color: red;
}
</style>
