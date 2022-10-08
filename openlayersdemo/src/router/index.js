import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '首页',
    component: () => import('../views/index/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
