/*
 * @Author: litfa
 * @Date: 2022-04-23 16:03:18
 * @LastEditTime: 2022-04-23 16:35:56
 * @LastEditors: litfa
 * @Description: 审核文章
 * @FilePath: /admin/src/apis/articles.ts
 *
 */
import request from '@/utils/request'
export const get = () => {
  return request({
    url: '/audit/articles/get',
    method: 'POST'
  })
}
export const set = (accept: boolean, id: number) => {
  return request({
    url: '/audit/articles/set',
    method: 'POST',
    data: {
      accept, id
    }
  })
}