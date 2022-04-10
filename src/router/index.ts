
/*
 * @Author: litfa
 * @Date: 2022-04-09 18:36:46
 * @LastEditTime: 2022-04-10 14:59:17
 * @LastEditors: litfa
 * @Description: router
 * @FilePath: /admin/src/router/index.ts
 * 
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/check',
    component: () => import('@/pages/Check/Check.vue'),
    children: [
      {
        path: 'friend-link',
        component: () => import('@/pages/Check/FriendLink.vue')
      },
      {
        path: 'comment',
        component: () => import('@/pages/Check/Comment.vue')
      },
      {
        path: 'user',
        component: () => import('@/pages/Check/User.vue')
      },
      {
        path: 'articles',
        component: () => import('@/pages/Check/Articles.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router