import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = () => import('@/views/Index')
const Error = () => import('@/views/Error')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PageIndex',
    component: Index
  },
  {
    path: '*',
    name: 'PageError',
    component: Error,
    meta: {
      slug: 'error'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  scrollBehavior() {
    return {
      x: 0, y: 0
    }
  },
  routes
})

export default router
