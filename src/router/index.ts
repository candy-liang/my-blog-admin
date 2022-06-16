import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue') 
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/views/Blog.vue') 
  },
  
]

const router = createRouter({
  // hash 模式
  history: createWebHashHistory(),
  routes
})

export default router