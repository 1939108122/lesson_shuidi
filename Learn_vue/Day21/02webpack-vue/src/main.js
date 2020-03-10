// console.log('ok')
// import Vue from '../node_modules/vue/dist/vue.js'
import Vue from 'vue'
// var login = {
//     template:'<h1>这是登录组件</h1>'
// }
import login from './login.vue' //默认webpack无法打包 .vue 文件 需要安装相关的loader：cnpm i vue-loader vue-template-compiler -D
import m1, { title as title123, hhh}from './test.js'
console.log(m1)
console.log(title123+'---' + hhh)
var vm = new Vue({
    el:'#app',
    data:{
        msg:'123'
    },
    // components: {
    //     login
    // }
    // render: function (createElements) {  //在webpack中， 如果想要通过 vue， 把一个组件放到页面中去展示 vm实例中的render函数可以实现
    //     return createElements(login)
    // }
    render: c => c(login)  //上面的代码可简写成这样
})