import Vue from 'vue'
import VueRouter from 'vue-router'
import Start from '../views/start/Start.vue'
import Home from '../views/home/Home.vue'
import Cinema from '../views/cinema/Cinema.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'start',
    component: Start
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/cinema',
    name: 'cinema',
    component: Cinema
  }
  // {
  //   path: '/home',
  //   name: 'Home',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  // }
]

const router = new VueRouter({
  mode:"history",
  routes
})

export default router
