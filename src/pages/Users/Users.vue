<!--
 * @Author: litfa
 * @Date: 2022-04-11 15:15:35
 * @LastEditTime: 2022-04-11 16:54:55
 * @LastEditors: litfa
 * @Description: 用户列表
 * @FilePath: /admin/src/pages/Users/Users.vue
 * 
-->
<script lang="ts" setup>
import getUsersApi from '@/apis/getUsers'
import { ref } from 'vue'
import dayjs from 'dayjs'
import { useRouter } from 'vue-router'
const router = useRouter()
const usersList = ref([])
const getUsers = async () => {
  const { data: res } = await getUsersApi()
  usersList.value = res.list
}
getUsers()

const formetDate = (row) => {
  return dayjs(Number(row.registerDate)).format('YYYY-MM-DD HH:MM:ss')
}

const click = (e) => {
  console.log(e)
  router.push(`/users/details/${e.row.id}`)

}
</script>

<template>
  <el-table
    :data="usersList"
    :default-sort="{ prop: 'date', order: 'descending' }"
    style="width: 100%; "
    max-height="80vh"
  >
    <el-table-column prop="id" label="id" sortable width="180" />
    <el-table-column prop="username" label="用户名" />
    <el-table-column prop="registerDate" label="注册日期" sortable :formatter="formetDate" />
    <el-table-column prop="unionid" label="unionid" width="300" />
    <el-table-column prop="openid" label="openid" width="300" />
    <el-table-column fixed="right" label="操作" width="80">
      <template #default="scope">
        <el-button type="text" size="small" @click.prevent="click(scope)">详情</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<style lang="less" scoped>
</style>