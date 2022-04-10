<!--
 * @Author: litfa
 * @Date: 2022-04-10 18:32:52
 * @LastEditTime: 2022-04-10 20:17:19
 * @LastEditors: litfa
 * @Description: 文章管理
 * @FilePath: /admin/src/pages/Articles/Articles.vue
 * 
-->
<script lang="ts" setup>
import getArticlesApi from '@/apis/getArticles'
import { ref } from 'vue'
import dayjs from 'dayjs'
import { useRouter } from 'vue-router'
const router = useRouter()
const articlesList = ref([])
const getArticles = async () => {
  const { data: res } = await getArticlesApi()
  articlesList.value = res.list
}
getArticles()

const formetDate = (row) => {
  return dayjs(Number(row.createDate)).format('YYYY-MM-DD HH:MM:ss')
}

const click = (e) => {
  console.log(e)
  router.push(`/articles/details/${e.row.id}`)

}
</script>

<template>
  <el-table
    :data="articlesList"
    :default-sort="{ prop: 'date', order: 'descending' }"
    style="width: 100%; "
    max-height="80vh"
  >
    <el-table-column prop="id" label="id" sortable width="180" />
    <el-table-column prop="title" label="标题" />
    <el-table-column prop="username" label="作者" />
    <el-table-column prop="date" label="日期" sortable :formatter="formetDate" />
    <el-table-column prop="desc" label="简介" />
    <el-table-column fixed="right" label="操作" width="70">
      <template #default="scope">
        <el-button type="text" size="small" @click.prevent="click(scope)">详情</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>