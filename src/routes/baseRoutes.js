import HomePage from '@/views/HomePage.vue'
import TestPage from '@/views/TestPage.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    // redirect: '/',
  },
  {
    path: '/test',
    name: 'test',
    component: TestPage,
  },
  {
    path: '*',
    redirect: '/',
  }
]
