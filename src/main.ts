/*
 * @Author: litfa
 * @Date: 2022-04-09 18:28:33
 * @LastEditTime: 2022-04-09 19:43:57
 * @LastEditors: litfa
 * @Description: main
 * @FilePath: /admin/src/main.ts
 * 
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'element-plus/dist/index.css'
createApp(App).use(router).mount('#app')
