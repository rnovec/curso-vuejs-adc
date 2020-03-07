import Vue from 'vue'
import VueRouter from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login'),
    meta: {
      public: true
    }
  },
  // otherwise redirect to home
  { path: '*', redirect: '/' }
]

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes
})

// const isAuthenticated = function () {
//   return window.localStorage.token
// }

// router.beforeEach((to, from, next) => {
//   if (!to.meta.public && !isAuthenticated()) {
//     return next({ name: 'Login' })
//   }

//   if (to.name === 'Login' && isAuthenticated()) {
//     return next({ name: 'Home' })
//   }

//   return next()
// })

export default router
