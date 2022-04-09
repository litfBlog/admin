/*
 * @Author: litfa
 * @Date: 2022-04-09 18:36:46
 * @LastEditTime: 2022-04-09 18:38:18
 * @LastEditors: litfa
 * @Description: router
 * @FilePath: /admin/src/router/index.ts
 * 
 */
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'

const routes = [
  {
    path: '/',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router