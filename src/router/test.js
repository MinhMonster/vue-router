import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import HeaderTest from '../components/incfiles/HeaderTest.vue'


Vue.use(VueRouter)

const routes = [


  { path: '/test/search', name: 'test.search', component: () => import('@/components/tester/SearchTest.vue') }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
