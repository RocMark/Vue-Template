import Vue from 'vue'
import Router from 'vue-router'

import baseRoutes from './routes/baseRoutes'
import exampleRoutes from './routes/exampleRoutes'

Vue.use(Router)


export default new Router({
  routes: [
    ...baseRoutes,
    ...exampleRoutes
  ],
})
