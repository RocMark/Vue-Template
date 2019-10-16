import Vue from 'vue'
import axios from 'axios'
import moment from 'moment'
import VueAxios from 'vue-axios'
import { sync } from 'vuex-router-sync'
import App from './App.vue'
import router from './router'
import store from './store'
import globalMixins from './mixins/globalMixins.js'
import './scss/style.scss'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const unsync = sync(store, router) // done. Returns an unsync callback fn
Vue.prototype.moment = moment
Vue.mixin(globalMixins)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
