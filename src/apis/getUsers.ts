/*
 * @Author: litfa
 * @Date: 2022-04-11 15:17:09
 * @LastEditTime: 2022-04-11 15:26:40
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