import Vue from 'vue'
import Vuex from 'vuex'

import exampleApi from './store/api/exampleApi'
// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    exampleApi,
  },
  getters: {},
  state: {
    rootTest: 'global Vuex State',
  },
  // actions & mutation 首變數為 context 勿省略，次變數為 data 多參傳物件 { }
  mutations: {},
  actions: {
    // getUsers(context, data){ context.commit('mutationName', data ) }
  },
  strict: process.env.NODE_ENV !== 'production',
})
