import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue') },
  { path: '/test', name: 'TestRouter', component: () => import('@/components/TestRouter.vue') },
  { path: '/project-01', name: 'Project01', component: () => import('@/components/ProjectOne.vue') },
  { path: '/product', name: 'product.list', component: () => import('@/components/product/ListProduct.vue') },
  { path: '/add-product', name: 'product.add', component: () => import('@/components/product/AddProduct.vue') }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
