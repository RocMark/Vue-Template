import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './scss/style.scss'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import globalMixins from './mixins/globalMixins.js'

Vue.mixin(globalMixins)

Vue.use(VueAxios, axios)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
