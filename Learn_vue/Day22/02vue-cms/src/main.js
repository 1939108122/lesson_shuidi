//入口文件 
import Vue from 'vue'
import app from './App.vue'
// import { Header,Swipe, SwipeItem, Button, Lazyload} from 'mint-ui';
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'
import VueRouter from 'vue-router'
import router from './router.js'
import VueResource from 'vue-resource'
import moment from 'moment'
import VuePreview from 'vue-preview'
import Vuex from 'vuex'
// Vue.use( Lazyload )
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VuePreview)
Vue.use(Vuex)
Vue.filter('dataFormat', function (dataStr, pattern="YYYY-MM-DD HH:mm:ss"){
   return moment(dataStr).format(pattern)
})
// 设置请求的根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005'
// 全局设置post请求 时候表单数据格式组织形式
Vue.http.options.emulateJSON = true

var car = JSON.parse( localStorage.getItem('car') || '[]' )

var store = new Vuex.Store({
    state:{
        car:car
    },
    mutations:{
        addToCar(state, goodsinfo)
        {
            // 如果购物车有该商品，则添加数量，否则加入购物车
            var flag = false 
            state.car.some(item=> {
                if(item.id === goodsinfo.id)
                {
                    item.count += parseInt(goodsinfo.count)
                    flag = true
                    return true
                }
            })
            if (!flag)
            {
                state.car.push(goodsinfo)
            }
            // 当更新 car之后， 把car数组存储到本地的 localStorage中去
            localStorage.setItem('car', JSON.stringify(state.car))
        }
    },
    getters:{
        getAllCount(state){
            var c = 0
            state.car.forEach(item=> {
                c = c + item.count
            })
            return c
        }
    }
})

var vm = new Vue({
    el: '#app',
    // render:function (createElements) {
    //     return createElements(app)
    // }
    render: c=>c(app),
    router,
    store
})