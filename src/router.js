import Vue from 'vue'
import Router from 'vue-router'
import Register from './views/Register'
import Login from './views/Login'
import Home from './views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sign-up',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/books/:id',
      name: 'book-detail',
      component: () => import(/* webpackChunkName: "book-detail" */ './views/BookDetail.vue')
    }
  ]
})
