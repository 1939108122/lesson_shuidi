<template>
    <div>
      <button class="el-button" 
      :class="[type ? 'el-button--' + type:'', 
      {
          'is-round': round,
          'is-plain': plain
      }
      ]" >
        <!-- ElButton -->
        <i :class="icon" v-if="icon" ></i>
        <span v-if="$slots.default"><slot name="ddd"></slot></span>
      </button>
    </div>
</template>
<script>
export default {
    props: {
        type:{
            type: String,
            default: 'default'
        },
        round:{
            type: Boolean,
            default: false
        },
        plain:{
            type: Boolean,
            default: false
        },
        icon: String
    }
    
}
</script>
<style>

</style>