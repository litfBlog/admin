/*
 * @Author: litfa
 * @Date: 2022-04-10 19:47:10
 * @LastEditTime: 2022-04-10 19:47:46
 * @LastEditors: litfa
 * @Description: 获取文章详细信息
 * @FilePath: /admin/src/apis/getArticlesDetails.ts
 * 
 */
import request from '@/utils/request'
export default (id: number) => {
  return request({
    url: '/details',
    method: 'POST',
    data: {
      id
    }
  })
}