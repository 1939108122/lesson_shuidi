import Vue from 'vue'
import App from './App.vue'
import router from './router'
import hanhankui from 'hanhankui'
import 'hanhankui/lib/hanhankui.css'
Vue.use(hanhankui)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
