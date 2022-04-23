/*
 * @Author: litfa
 * @Date: 2022-04-23 16:03:18
 * @LastEditTime: 2022-04-23 16:03:53
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