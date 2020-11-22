import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {dollarFilter,percentFilter} from '@/filters'
import store from './store'
import "./assets/css/tailwind.css"

Vue.filter('dollar',dollarFilter)
Vue.filter('percent',percentFilter)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
