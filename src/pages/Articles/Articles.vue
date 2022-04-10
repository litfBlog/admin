<!--
 * @Author: litfa
 * @Date: 2022-04-10 18:32:52
 * @LastEditTime: 2022-04-10 19:21:14
 * @LastEditors: litfa
 * @Description: 文章管理
 * @FilePath: /admin/src/pages/Articles/Articles.vue
 * 
-->
<script lang="ts" setup>
import type { TableColumnCtx } from 'element-plus/es/components/table/src/table-column/defaults'
import getArticlesApi from '@/apis/getArticles'
import { ref } from 'vue'
import dayjs from 'dayjs'
const articlesList = ref([])
const getArticles = async () => {
  const { data: res } = await getArticlesApi()
  articlesList.value = res.list
}
getArticles()

const formetDate = (row) => {
  return dayjs(Number(row.createDate)).format('YYYY-MM-DD HH:MM:ss')
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
      <template #default>
        <el-button type="text" size="small">详情</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>