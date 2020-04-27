import Vue from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'

import router from './router'
import store from './store'

import './assets/css/index.scss'


Vue.config.productionTip = false

Vue.use(VueLazyload, {
  loading: require('@/assets/images/loading.gif')
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

