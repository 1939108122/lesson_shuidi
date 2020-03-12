import Vue from 'vue'
import App from './App.vue'
import hahakui from 'hahakui'
import 'hahakui/lib/hahakui.css'
Vue.use(hahakui)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
