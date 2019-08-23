import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

// const userRequest = axios.create({
//   baseURL: 'http://localhost:3000',
//   headers: { 'Content-Type': 'application/json', },
// })

export default new Vuex.Store({
  getters: {
  },
  state: {
  },
  // actions function 首個變數為 context 請勿省略
  actions: {
    // actionsFunc(context, data){    }
    // getUsers() { return userRequest.get('/users') },
  },
  mutations: {

  },
  strict: process.env.NODE_ENV !== 'production',
})
