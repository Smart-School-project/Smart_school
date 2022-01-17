import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import index  from '../layout/index.vue'
import info from '../views/info.vue'
import Schedule  from '../views/Schedule.vue'
import leave from '../views/leave.vue'
import calendar from '../views/calendar.vue'
import homework from '../views/homework.vue'
import submitleave from '../views/submitleave.vue'
import score_std from '../views/score_std.vue'
import grade_std from '../views/grade_std.vue'



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
  {
    path: '/leave',
    name: 'Leave',
    component: leave
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: calendar
  },
  {
    path: '/homework',
    name: 'homework',
    component: homework
  },
  {
    path: '/submitleave',
    name: 'submitleave',
    component: submitleave
  },
  {
    path: '/score_std',
    name: 'score_std',
    component: score_std
  },
  {
    path: '/grade_std',
    name: 'grade_std',
    component: grade_std
  },
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
