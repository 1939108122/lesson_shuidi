<template>
  <div>
    <!-- <h3>当前数量为： {{ $store.state.count }}</h3> -->
    <h3> {{ this.$store.getters.getCount }}</h3>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>

</style>
