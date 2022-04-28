<!--
 * @Author: litfa
 * @Date: 2022-04-27 17:24:50
 * @LastEditTime: 2022-04-28 17:26:06
 * @LastEditors: litfa
 * @Description: 举报
 * @FilePath: /admin/src/pages/Check/Report.vue
 * 
-->
<script lang="ts" setup>
import getReportApi from '@/apis/getReport'
import { ref } from 'vue'
import formatDate from '@/utils/formatDate'
import solveReport from '@/apis/solveReport'
import { ElMessage } from 'element-plus'
const list = ref([])
const getReport = async () => {
  const { data: res } = await getReportApi()
  list.value = res.data
}
getReport()

const causeToString = (key: number) => {
  switch (key) {
    case 0:
      return '其他'
    case 1:
      return '色情低俗'
    case 2:
      return '违法犯罪'
    case 3:
      return '造谣传谣'
    case 4:
      return '垃圾广告'
    case 5:
      return '非原创内容'
    case 6:
      return '骚扰'
    case 7:
      return '人身攻击'
    case 8:
      return '引战'
    case 9:
      return '诈骗'
    default:
      return key
  }
}

const typeToString = (key: string) => {
  switch (key) {
    case 'articles':
      return '文章'
    case 'user':
      return '用户'
    case 'comment':
      return '评论'
    default:
      return key
  }
}

const viewUrl = (type: string, id: number): string => {
  return `#/${type}/details/${id}`
}

const solve = async (status: number, id: number) => {
  const { data: res } = await solveReport(id, status)
  if (res.status == 1) {
    ElMessage.success('成功')
    getReport()
  }
}
</script>

<template>
  <el-table :data="list" style="width: 100%">
    <el-table-column prop="originator_id" label="举报人id" />
    <el-table-column prop="report_id" label="被举报内容id" />
    <el-table-column label="举报类型">
      <template #default="scope">{{ typeToString(scope.row.type) }}</template>
    </el-table-column>
    <el-table-column label="举报原因">
      <template #default="scope">{{ causeToString(scope.row.cause) }}</template>
    </el-table-column>
    <el-table-column prop="note" label="举报内容" />
    <el-table-column label="举报时间">
      <template #default="scope">{{ formatDate(scope.row.date) }}</template>
    </el-table-column>
    <el-table-column fixed="right" label="操作" width="230">
      <template #default="data">
        <el-popover placement="left" :width="200" trigger="hover">
          <template #reference>
            <el-button size="small">查看详情</el-button>
          </template>
          <a :href="viewUrl(data.row.type, data.row.id)">
            <el-button>查看被举报内容</el-button>
          </a>
          <!-- <a :href="viewUrl(data.row.type, data.row.id)">
            <el-button>查看被举报用户</el-button>
          </a>-->
          <a :href="viewUrl('user', data.row.originator_id)">
            <el-button>查看举报用户</el-button>
          </a>
        </el-popover>
        <el-popover placement="left" :width="200" trigger="hover">
          <template #reference>
            <el-button type="primary" size="small" @click="1">处理</el-button>
          </template>
          <el-button type="danger">确认内容有违规</el-button>
          <el-button type="success" @click="solve(2, data.row.id)">举报内容无违规</el-button>
          <el-button type="warning">内容无违规，并处理举报者</el-button>
        </el-popover>
      </template>
    </el-table-column>
  </el-table>
</template>

<style lang="less" scoped>
h1 {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  color: red;
  text-align: center;
  font-size: 200px;
  z-index: 100000;
  background-color: #fff;
}

.el-button {
  margin: 5px;
}
</style>