/*
* @Author: litfa
* @Date: 2022-04-10 18:40:45
 * @LastEditTime: 2022-04-10 18:56:21
 * @LastEditors: litfa
* @Description: 获取文章列表
 * @FilePath: /admin/src/apis/getArticles.ts
* 
*/
import request from '@/utils/request'
export default () => {
  return request({
    url: '/getList/all',
    method: 'POST'
  })
}