<template>
  <div>
    <input type="button" value="减少" @click="remove">
    <input type="button" value="增加" @click="add">
    <br>
    <input type="text" v-model="$store.state.count">
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {
    add() {
      // 千万不要这么做 不符合vuex设计理念
      // this.$store.state.count++
      this.$store.commit('increment')
    },
    remove() {
       this.$store.commit('substrut',{c:3, d:1})
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
