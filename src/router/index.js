import Vue from 'vue'
import VueRouter from 'vue-router'
import Flow from '../views/flow/flow.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Flow
  },
  {
    path: '/flow',
    name: 'Flow',
    component: Flow
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
