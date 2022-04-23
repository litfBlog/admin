<!--
 * @Author: litfa
 * @Date: 2022-04-21 18:09:56
 * @LastEditTime: 2022-04-22 14:35:27
 * @LastEditors: litfa
 * @Description: 友链管理
 * @FilePath: /admin/src/pages/FriendLink.vue
 * 
-->
<script lang="ts" setup>
import { getAllLinks } from '@/apis/friendLink'
import setFriendLinkStatus from '@/apis/setFriendLinkStatus'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import EditFriendLink from '@/components/EditFriendLink/EditFriendLink.vue'
const list = ref([])
const getFriendLink = async () => {
  const { data: res } = await getAllLinks()
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

const tagType = (status): 'success' | 'warning' | '' => {
  if (status == 1) {
    return 'success'
  } else if (status == 2) {
    return 'warning'
  } else if (status == 0) {
    return ''
  }
}

const tagText = (status: number): string => {
  if (status == 1) {
    return '正常'
  } else if (status == 2) {
    return '封禁'
  } else if (status == 0) {
    return '未审核'
  }
}

const filterTag = (value: string, row: any) => {
  return row.status == value
}

const editProps = ref<any>({})
const showEdit = ref(false)
const editKey = ref(Math.random())
const editRow = (row) => {
  editProps.value = {
    id: row.id,
    name: row.name,
    desc: row.desc,
    status: row.status,
    url: row.url,
    icon: row.icon,
    view_in_home: Boolean(row.view_in_home),
    user_id: row.user_id,
    date: Number(row.date)
  }
  editKey.value = Math.random()
}
</script>

<template>
  <h1>友链管理</h1>
  <edit-friend-link :key="editKey" v-bind="editProps"></edit-friend-link>
  <el-table :data="list" style="width: 100%">
    <el-table-column prop="id" label="id" width="50" />
    <el-table-column
      prop="status"
      label="状态"
      width="100"
      :filters="[
        { text: '未审核', value: '0' },
        { text: '正常', value: '1' },
        { text: '封禁', value: '2' },
      ]"
      :filter-method="filterTag"
      filter-placement="bottom-end"
    >
      <template #default="scope">
        <el-tag
          :type="tagType(scope.row.status)"
          disable-transitions
        >{{ tagText(scope.row.status) }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column prop="view_in_home" label="首页展示" />
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
        <a :href="data.row.url" target="_black" style="margin-right: 5px;">
          <el-button type="primary" size="small">查看网站</el-button>
        </a>
        <el-button type="primary" size="small" @click="editRow(data.row)">修改</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<style lang="less" scoped>
</style>