/*
 * @Author: litfa
 * @Date: 2022-04-21 18:53:42
 * @LastEditTime: 2022-04-21 19:35:16
 * @LastEditors: litfa
 * @Description: props
 * @FilePath: /admin/src/components/EditFriendLink/props.ts
 * 
 */
export default {
  id: {
    type: Number
  },
  name: {
    type: String
  },
  desc: {
    type: String
  },
  status: {
    validator(value) {
      // 这个值必须与下列字符串中的其中一个相匹配
      return [0, 1, 2].includes(value)
    }
  },
  url: {
    type: String
  },
  icon: {
    type: String
  },
  view_in_home: {
    type: Boolean
  },
  user_id: {
    type: Number
  },
  date: {
    type: Number
  }
}