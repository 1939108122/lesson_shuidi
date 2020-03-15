<template>
    <div>
      <button class="el-button"
      :type="nativeType"
      @click="handleClick" 
      :class="[type ? 'el-button--' + type:'', 
      {
          'is-round': round,
          'is-plain': plain,
          'is-loading': loading
      }
      ]" >
        <!-- ElButton -->
        <i class= "el-icon-loading" v-if="loading"></i>
        <i :class="icon" v-if="icon && !loading" ></i>
        <span v-if="$slots.default"><slot></slot></span>
      </button>
    </div>
</template>
<script>
export default {
    props: {
        loading:Boolean,
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
        nativeType:{
            type: String,
            default: 'button'
        },
        icon: String
    },
    methods: {
        handleClick( evt ) {
            this.$emit('click', evt)
        }
    }
    
}
</script>
<style>

</style>