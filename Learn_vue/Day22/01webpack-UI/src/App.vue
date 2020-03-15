<template>
    <div>
        <h1>这是App组件</h1>
        <mt-button type="danger" size="small" icon ="back" @click="show"> default </mt-button>
        <mybtn> 12345 </mybtn>
        <button type="button" class="mui-btn mui-btn-royal">紫色</button>
        <router-link to="/account"> account </router-link>
        <router-link to="/goodslist"> goodslist </router-link>

        <router-view></router-view>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
    data() {
        return {
            toastIntance:null
        }
    },
    created() {
        this.getList()
    },
    methods:{
        getList() {
            this.show();
        //在数据获取之前 立即弹出 Toast 提示用户 正在加载数据
            setTimeout( ()=>{
                this.toastIntance.close()
            }, 3000)
        },
        show(){
            this.toastIntance = Toast({
                message:'这是信息',
                duration: -1,
                position:'top',
                iconClass:'glyphicon glyphicon-heart', //设置图标的类
                className: 'mytoast'  //自定义Toast的样式 需要自己提供一个类名

            })
        }
    }
}
</script>
<style>

</style>