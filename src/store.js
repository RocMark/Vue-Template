import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const userRequest = axios.create({
  baseURL: 'http://localhost:3000',
  headers: { 'Content-Type': 'application/json' },
})

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    getUsers() {
      return userRequest.get('/users')
    },
  },
})
