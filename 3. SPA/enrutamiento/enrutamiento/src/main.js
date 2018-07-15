import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {rutas} from './rutas'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)
var enrutador = new VueRouter({
  routes: rutas,
  mode: 'history'
})

new Vue({
  el: '#app',
  router: enrutador,
  render: h => h(App)
})
