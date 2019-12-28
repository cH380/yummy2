import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/details',
    name: 'Details',
    component: () => import( '@/views/yummy2/other/details')
  },
  {
    path: '/movie',
    name: 'Movie',
    component: () => import( '@/views/yummy2/other/movie')
  },
  {
    path: '/app',
    name: 'App',
    component: () => import( '@/views/yummy2/app')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import( '@/views/yummy2/home')
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
