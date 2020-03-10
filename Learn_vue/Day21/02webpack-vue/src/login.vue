<template>
    <div>
        这是登录组件----{{ msg }}
    </div>
</template>
<script>
export default {
    data() { //组件中的data必须是function
        return{
            msg : '123'
        }
    },
    methods: {
        show() {
            console.log('调用了login.vue 中的 show方法')
        }
    }
}
</script>
<style>

</style>