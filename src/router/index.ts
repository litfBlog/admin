
/*
 * @Author: litfa
 * @Date: 2022-04-09 18:36:46
 * @LastEditTime: 2022-04-27 17:25:04
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
      },
      {
        path: 'report',
        component: () => import('@/pages/Check/Report.vue')
      }
    ]
  },
  {
    path: '/articles',
    component: () => import('@/pages/Articles/Articles.vue')
  },
  {
    path: '/articles/details/:id',
    component: () => import('@/pages/Articles/Details.vue')
  },
  {
    path: '/users',
    component: () => import('@/pages/Users/Users.vue')
  },
  {
    path: '/friend-link',
    component: () => import('@/pages/FriendLink.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router