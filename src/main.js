import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'

import './assets/main.css'
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
