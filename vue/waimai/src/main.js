import Vue from 'vue'
import App from './App.vue'
import router from './router'
import hawkui from 'hawkui'
import 'hawkui/lib/hawkui.css'
Vue.use(hawkui)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
