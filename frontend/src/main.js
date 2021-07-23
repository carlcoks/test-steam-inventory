import Vue from 'vue'
import App from './App.vue'

import './assets/styles/main.scss'

import router from './router'
import store from './store'

import './plugins/global-components'
import './plugins/vue-axios'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
