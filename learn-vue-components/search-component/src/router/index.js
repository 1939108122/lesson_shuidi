import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import SignUp from '../views/SignUp.vue'
import CheckPhone from '../components/SignUp/CheckPhone.vue'
import Info from '../components/SignUp/Info.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp,
    children: [
      {
        path: '/',
        name: 'index',
        component: CheckPhone
      },
      {
        path: 'CheckPhone',
        name: 'CheckPhone',
        component: CheckPhone
      },
      {
        path: 'Info',
        name: 'Info',
        component: Info
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
