<!--
 * @Author: litfa
 * @Date: 2022-04-10 14:46:17
 * @LastEditTime: 2022-04-23 16:27:06
 * @LastEditors: litfa
 * @Description: 文章审核
 * @FilePath: /admin/src/pages/Check/Articles.vue
 * 
-->
<script lang="ts" setup>
import { get } from '@/apis/articles'
import { ref } from 'vue'
const articles = ref([])
const getArticles = async () => {
  const { data: res } = await get()
  articles.value = res.data
}
getArticles()

const accept = (id: number, accept: boolean) => {
  // 
}
</script>

<template>
  <el-table :data="articles" style="width: 100%">
    <el-table-column prop="id" label="id" width="180" />
    <el-table-column prop="title" label="标题" width="180" />
    <el-table-column prop="desc" label="简介" />
    <el-table-column prop="username" label="用户" />
    <el-table-column label="封面">
      <template v-slot:default="slotProps">
        <img :src="slotProps.row.cover" style="max-height: 100px;" />
      </template>
    </el-table-column>
    <el-table-column fixed="right" label="Operations" width="230">
      <template #default="data">
        <a :href="`#/articles/details/${data.row.id}`" target="_black" style="margin-right: 5px;">
          <el-button type="primary" size="small">查看详情</el-button>
        </a>
        <el-button type="success" size="small" @click="accept(data.row.id, true)">通过</el-button>
        <el-popconfirm title="确定要拒绝吗?" @confirm="accept(data.row.id, false)">
          <template #reference>
            <el-button type="warning" size="small">拒绝</el-button>
          </template>
        </el-popconfirm>
      </template>
    </el-table-column>
  </el-table>
</template>

<style lang="less" scoped>
</style>