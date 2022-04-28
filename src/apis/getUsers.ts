/*
 * @Author: litfa
 * @Date: 2022-04-11 15:17:09
 * @LastEditTime: 2022-04-28 19:34:30
 * @LastEditors: litfa
 * @Description: 获取用户列表
 * @FilePath: /admin/src/apis/getUsers.ts
 * 
 */
import request from '@/utils/request'
export default () => {
  return request({
    url: '/getUsers/all',
    method: 'POST'
  })
}

export const getuserInfo = (id: number) => {
  return request({
    url: '/getUsers/getOne',
    method: 'POST',
    data: {
      id
    }
  })
}

export const setUser = (id: number, data: any) => {
  return request({
    url: '/getUsers/set',
    method: 'POST',
    data: {
      id, data
    }
  })
}