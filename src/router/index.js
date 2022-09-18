import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import HeaderTest from '../components/incfiles/HeaderTest.vue'


Vue.use(VueRouter)

const routes = [
  // { path: '/', name: 'home', component: HomeView },
  // { path: '/', name: 'home', component: HeaderTest },
  // { path: '/about', name: 'about', component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue') },
  { path: '/test', name: 'TestRouter', component: () => import('@/components/TestRouter.vue') },
  { path: '/project-01', name: 'Project01', component: () => import('@/components/ProjectOne.vue') },


  { path: '/admin/products', name: 'product.list', component: () => import('@/components/product/ListProduct.vue') },
  { path: '/admin/products/create', name: 'products.create', component: () => import('@/components/product/AddProduct.vue') },
  { path: '/admin/products/edit/:id', name: 'product.edit', component: () => import('@/components/product/AddProduct.vue') },

  { path: '/login', name: 'users.login', component: () => import('@/components/users/LoginUser.vue') },

  { path: '/admin/users', name: 'users.list', component: () => import('@/components/users/ListUser.vue') },
  { path: '/admin/users/create', name: 'users.create', component: () => import('@/components/users/CreateUser.vue') },
  { path: '/admin/users/edit/:id', name: 'users.edit', component: () => import('@/components/users/CreateUser.vue') },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
