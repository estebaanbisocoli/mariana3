// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import api from './api/api'
Vue.use(Vuetify, { theme: {
  accent: '#f2efe8',
  secondary: '#dbe9d8',
  primary: '#263238',
  error: '#b71c1c',
  info: '#212121'
}})
let app
Vue.config.productionTip = false

/* eslint-disable no-new */
api.onAuthStateChanged()((user) => {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})
