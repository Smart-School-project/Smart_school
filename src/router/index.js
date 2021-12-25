import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import index  from '../layout/index.vue'
import info from '../views/info.vue'
import Schedule  from '../views/Schedule.vue'
import Leave  from '../views/leave.vue'
import calendar  from '../views/calendar.vue'
import homework  from '../views/homework.vue'
import listHomework  from '../components/list-homework.vue'
import Score  from '../views/score.vue'
import Grade  from '../views/grade.vue'

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
    component: Leave
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
    path: '/list-homework',
    name: 'listHomework',
    component: listHomework
  },
  {
    path: '/score',
    name: 'score',
    component: Score
  },
  {
    path: '/grade',
    name: 'grade',
    component: Grade
  },
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
