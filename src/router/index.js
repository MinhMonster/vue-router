import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from '@/layout/Admin.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/admin/login', name: 'admin.login', component: () => import('@/components/users/LoginUser.vue') },
  {
    path: '/admin/',
    name: 'admin',
    component: Admin,
    children: [
      { path: '', name: 'admin.home', component: () => import('@/components/product/ListProduct.vue') },
      // { path: 'login', name: 'admin.login', component: () => import('@/components/users/LoginUser.vue') },
      // { path: 'users', name: 'admin.users', component: () => import('@/components/users/ListUser.vue') },
      // { path: 'users/create', name: 'admin.users.create', component: () => import('@/components/users/CreateUser.vue') },
      // { path: 'users/edit/:id', name: 'admin.users.edit', component: () => import('@/components/users/CreateUser.vue') },
      {
        path: 'management/',
        name: 'admin.management',
        component: () => import('@/components/tester/TabMenu.vue'),
        children: [
          { path: 'login', name: 'admin.management.login', component: () => import('@/components/users/LoginUser.vue') },
          { path: 'users', name: 'admin.management.users', component: () => import('@/components/users/ListUser.vue') },
          { path: 'users/create', name: 'admin.management.users.create', component: () => import('@/components/users/CreateUser.vue') },
          { path: 'users/edit/:id', name: 'admin.management.users.edit', component: () => import('@/components/users/CreateUser.vue') },
          { path: 'products', name: 'admin.management.products', component: () => import('@/components/product/ListProduct.vue') },
          { path: 'products', name: 'admin.products', component: () => import('@/components/product/ListProduct.vue') },
          { path: 'products/create', name: 'admin.management.products.create', component: () => import('@/components/product/AddProduct.vue') },
          { path: 'products/edit/:id', name: 'admin.management.products.edit', component: () => import('@/components/product/AddProduct.vue') },
        ]
      },
    ],
  },
  // {
  //   path: '/:id',
  //   component: Home,
  //   children: [
  //     {
  //       // UserProfile will be rendered inside User's <router-view>
  //       // when /user/:id/profile is matched
  //       path: 'test2',
  //       component: () => import('@/components/tester/SearchTest.vue'),
  //     },
  //   ],
  // },


  // { path: '/', name: 'home', component: HomeView },
  // { path: '/', name: 'home', component: HeaderTest },
  // { path: '/about', name: 'about', component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue') },
  { path: '/test', name: 'TestRouter', component: () => import('@/components/TestRouter.vue') },
  { path: '/project-01', name: 'Project01', component: () => import('@/components/ProjectOne.vue') },


  // { path: '/admin/products', name: 'product.list', component: () => import('@/components/product/ListProduct.vue') },
  // { path: '/admin/products/create', name: 'products.create', component: () => import('@/components/product/AddProduct.vue') },
  // { path: '/admin/products/edit/:id', name: 'product.edit', component: () => import('@/components/product/AddProduct.vue') },

  { path: '/login', name: 'users.login', component: () => import('@/components/users/LoginUser.vue') }

  // { path: '/admin/users', name: 'users.list', component: () => import('@/components/users/ListUser.vue') },
  // { path: '/admin/users/create', name: 'users.create', component: () => import('@/components/users/CreateUser.vue') },
  // { path: '/admin/users/edit/:id', name: 'users.edit', component: () => import('@/components/users/CreateUser.vue') },




  // { path: '/test/search', name: 'test.search', component: () => import('@/components/tester/SearchTest.vue') }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
