/*
 * @Author: litfa
 * @Date: 2022-04-09 18:48:19
 * @LastEditTime: 2022-04-09 19:27:58
 * @LastEditors: litfa
 * @Description: store
 * @FilePath: /admin/src/store/index.ts
 * 
 */
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    }
  }
})