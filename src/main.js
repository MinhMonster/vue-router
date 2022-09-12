import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSweetslert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import './assets/css/mms-style.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueSweetslert2)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAxios, { $request: axios })
