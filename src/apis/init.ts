/*
 * @Author: litfa
 * @Date: 2022-04-10 18:17:28
 * @LastEditTime: 2022-04-10 18:20:31
 * @LastEditors: litfa
 * @Description: 获取初始状态
 * @FilePath: /admin/src/apis/init.ts
 * 
 */
import request from '@/utils/request'

export default (): any => {
  return request({
    url: '/',
    method: 'GET'
  })
}