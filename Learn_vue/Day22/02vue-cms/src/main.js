//入口文件 
import Vue from 'vue'
import app from './App.vue'
import { Header,Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import VueRouter from 'vue-router'
import router from './router.js'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.component(Header.name, Header);
var vm = new Vue({
    el: '#app',
    // render:function (createElements) {
    //     return createElements(app)
    // }
    render: c=>c(app),
    router
})