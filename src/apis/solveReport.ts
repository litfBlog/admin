/*
 * @Author: litfa
 * @Date: 2022-04-28 16:55:12
 * @LastEditTime: 2022-04-28 17:00:32
 * @LastEditors: litfa
 * @Description: 处理举报
 * @FilePath: /admin/src/apis/solveReport.ts
 * 
 */
import request from '@/utils/request'
export default (id: number, status: number) => {
  return request({
    url: '/audit/report/solve',
    method: 'POST',
    data: {
      id, status
    }
  })
} 