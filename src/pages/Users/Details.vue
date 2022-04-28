<!--
 * @Author: litfa
 * @Date: 2022-04-11 16:55:11
 * @LastEditTime: 2022-04-28 17:57:26
 * @LastEditors: litfa
 * @Description: 用户详情
 * @FilePath: /admin/src/pages/Users/Details.vue
 * 
-->
<script lang="ts" setup>
import User from '@/components/User/User.vue'
import { getuserInfo as getuserInfoApi } from '@/apis/getUsers'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
const route = useRoute()

const data: any = ref({})

const getuserInfo = async () => {
  const { data: res } = await getuserInfoApi(Number(route.params.id))
  data.value = res.data
}
getuserInfo()
</script>

<template>
  <User
    :author_id="data.id"
    :author_status="data.status"
    :username="data.username"
    :avatar="data.avatar"
    :registerDate="data.register_date"
    :permissions="data.permissions"
    :openid="data.openid"
    :unionid="data.unionid"
  ></User>
</template>

<style lang="less" scoped>
</style>