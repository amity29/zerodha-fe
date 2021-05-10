import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import JsonCSV from 'vue-json-csv'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.component('downloadCsv', JsonCSV)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
