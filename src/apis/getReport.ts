/*
 * @Author: litfa
 * @Date: 2022-04-27 17:59:31
 * @LastEditTime: 2022-04-27 18:00:00
 * @LastEditors: litfa
 * @Description: 获取待审核文章
 * @FilePath: /admin/src/apis/getReport.ts
 * 
 */
import request from '@/utils/request'
export default () => {
  return request({
    url: '/audit/report/get',
    method: 'POST'
  })
}