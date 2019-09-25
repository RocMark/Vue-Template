import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Encrypt from '@/mixins/encrypt.js'

Vue.use(Vuex)

// 區域型 Mixins 要加上 .methods.
const encryptHeader = Encrypt.methods.encryptBody()

const testApi = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    ...encryptHeader,
  },
})

export default {
  // states 屬於 模組內 區域變數
  // mutation, action, getter 屬於全域變數 (同名會衝突，所以要用namespaced)

  // 取得 ModulesA 中的 products & others Getters
  // ...mapGetters('ModulesA',['products','others']);

  namespaced: true, // 必加避免衝突

  state: {
    exampleApiTestStr: 'Vuex Module Success',
  },

  mutations: {
    // setBlogs(context, data) { this.state.exampleApi.blogs = data },
  },

  actions: {
    // getBlogs(context, { data,  }) { context.commit('setBlogs', data ) },
  },
  strict: process.env.NODE_ENV !== 'production',
}
