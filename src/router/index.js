import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import index  from '../layout/index.vue'
import info from '../views/info.vue'
import Schedule  from '../views/Schedule.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/index',
    name: 'Index',
    component: index
  },
  {
    path: '/infomation',
    name: 'Infomation',
    component: info
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: Schedule
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
