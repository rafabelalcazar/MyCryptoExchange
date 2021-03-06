import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Error from '../views/Error.vue'
import CoinDetail from '@/views/CoinDetail.vue'
// import Eventos from '../views/Eventos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/coin/:id',
    name: 'coin-detail',
    component: CoinDetail
  },
  {
    path: '*',
    name: 'Error',
    component: Error
  },
  // {
  //   path:'/eventos',
  //   name:'Eventos',
  //   component: Error
  // }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
