/*
 * @Author: litfa
 * @Date: 2022-04-09 18:28:33
 * @LastEditTime: 2022-05-02 19:22:12
 * @LastEditors: litfa
 * @Description: 
 * @FilePath: /admin/src/env.d.ts
 * 
 */
// / <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly VITE_ApiBaseurl: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}