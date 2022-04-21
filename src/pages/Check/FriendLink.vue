<!--
 * @Author: litfa
 * @Date: 2022-04-10 14:40:33
 * @LastEditTime: 2022-04-21 17:59:24
 * @LastEditors: litfa
 * @Description: 友链审核
 * @FilePath: /admin/src/pages/Check/FriendLink.vue
 * 
-->
<script lang="ts" setup>
import getFriendLinkApi from '@/apis/friendLink'
import setFriendLinkStatus from '@/apis/setFriendLinkStatus'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
const list = ref([])
const getFriendLink = async () => {
  const { data: res } = await getFriendLinkApi()
  list.value = res.data
}
getFriendLink()

const accept = async (id, accept) => {
  const { data: res } = await setFriendLinkStatus(accept, id)
  if (res.status == 1) {
    ElMessage.success('成功')
    list.value.splice(
      list.value.findIndex(e => e.id == id),
      1
    )
  } else {
    ElMessage.warning('失败')
  }
}
</script>

<template>
  <h1>友链审核</h1>
  <el-table :data="list" style="width: 100%">
    <el-table-column prop="name" label="网站名" width="180" />
    <el-table-column prop="desc" label="介绍" width="180" />
    <el-table-column prop="url" label="首页地址" width="180" />
    <el-table-column prop="icon" label="头像" />
    <el-table-column label="头像预览">
      <template v-slot:default="slotProps">
        <img :src="slotProps.row.icon" style="max-height: 100px;" />
      </template>
    </el-table-column>
    <el-table-column fixed="right" label="Operations" width="230">
      <template #default="data">
        <el-button type="primary" size="small">查看网站</el-button>
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