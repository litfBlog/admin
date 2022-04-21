/*
 * @Author: litfa
 * @Date: 2022-04-21 17:33:12
 * @LastEditTime: 2022-04-21 17:47:27
 * @LastEditors: litfa
 * @Description: 审核友链
 * @FilePath: /admin/src/apis/setFriendLinkStatus.ts
 * 
 */
import request from '@/utils/request'
export default (accept: boolean, id: number) => {
  return request({
    url: '/audit/friend/set',
    method: 'POST',
    data: {
      accept, id
    }
  })
}