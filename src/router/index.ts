import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/article/class',
    name: 'artitle_class',
    component: () => import('@/views/article/Class.vue')
  },
  {
    path: '/article/list',
    name: 'artitle_list',
    component: () => import('@/views/article/List.vue')
  },

]

const router = createRouter({
  // hash 模式
  history: createWebHashHistory(),
  routes
})

export default router