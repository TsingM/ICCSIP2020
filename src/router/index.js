import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/organization',
    name: 'Organization',
    component: () => import('../views/Organization.vue')
  },
  {
    path: '/submissions',
    name: 'Submissions',
    component: () => import('../views/Submissions.vue')
  },
  {
    path: '/program',
    name: 'Program',
    component: () => import('../views/Program.vue')
  },
  {
    path: '/travel',
    name: 'Travel',
    component: () => import('../views/Travel.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
