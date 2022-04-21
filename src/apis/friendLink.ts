/*
 * @Author: litfa
 * @Date: 2022-04-21 16:00:24
 * @LastEditTime: 2022-04-21 18:12:17
 * @LastEditors: litfa
 * @Description: 友链
 * @FilePath: /admin/src/apis/friendLink.ts
 * 
 */
import request from '@/utils/request'
export default () => {
  return request({
    url: '/audit/friend/get',
    method: 'POST'
  })
}

export const getAllLinks = () => {
  return request({
    url: '/audit/friend/getAll',
    method: 'POST'
  })
}