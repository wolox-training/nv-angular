import Vue from 'vue'
import Router from 'vue-router'
import Register from './views/Register'
// import Login from './views/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/sign-up',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    }
  ]
})
