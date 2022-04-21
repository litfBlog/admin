<!--
 * @Author: litfa
 * @Date: 2022-04-21 18:38:22
 * @LastEditTime: 2022-04-21 20:18:37
 * @LastEditors: litfa
 * @Description: 修改友链
 * @FilePath: /admin/src/components/EditFriendLink/EditFriendLink.vue
 * 
-->
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import propNames from './props'
import { setData } from '@/apis/friendLink'
import { ElMessage } from 'element-plus'
const props = defineProps(propNames)

const formInline = reactive({
  id: props.id || undefined,
  name: props.name || '',
  desc: props.desc || '',
  status: props.status || 0,
  url: props.url || '',
  icon: props.icon || '',
  view_in_home: props.view_in_home || false,
  user_id: props.user_id || 0,
  date: props.date || Date.now()
})

const dialogVisible = ref(false)
const onSubmit = async () => {
  const { data: res } = await setData(formInline)
  if (res.status == 1) {
    ElMessage.success('提交成功')
    dialogVisible.value = false
    reSetForm()
  } else {
    ElMessage.error('提交失败')
  }
}

// 清空表单
const reSetForm = () => {
  formInline.id = undefined
  formInline.name = ''
  formInline.desc = ''
  formInline.status = 0
  formInline.url = ''
  formInline.icon = ''
  formInline.view_in_home = false
  formInline.user_id = 0
  formInline.date = Date.now()
}
</script>

<template>
  <h4 v-if="formInline.id !== undefined">
    修改 {{ formInline.name }}
    <el-button @click="reSetForm">取消修改</el-button>
  </h4>
  <el-form :inline="true" :model="formInline">
    <el-form-item label="网站名">
      <el-input v-model="formInline.name" placeholder="网站名" />
    </el-form-item>
    <el-form-item label="介绍">
      <el-input v-model="formInline.desc" placeholder="desc" />
    </el-form-item>
    <el-form-item label="状态">
      <el-select v-model="formInline.status" placeholder="介绍">
        <el-option label="未审核" :value="0" />
        <el-option label="正常" :value="1" />
        <el-option label="封禁" :value="2" />
      </el-select>
    </el-form-item>
    <el-form-item label="首页地址">
      <el-input v-model="formInline.url" placeholder="首页地址" />
    </el-form-item>
    <el-form-item label="icon">
      <el-input v-model="formInline.icon" placeholder="icon" />
    </el-form-item>
    <el-form-item label="用户id">
      <el-input v-model="formInline.user_id" placeholder="id" />
    </el-form-item>
    <el-form-item label="首页展示">
      <el-switch v-model="formInline.view_in_home" />
    </el-form-item>
    <el-form-item label="首页展示">
      <el-date-picker v-model="formInline.date" type="datetime" placeholder="Select date and time" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="dialogVisible = true">提交</el-button>
    </el-form-item>
  </el-form>

  <el-dialog v-model="dialogVisible" title="请确认数据" width="30%">
    <span style="color: red;">管理系统未校验表单数据，请确认数据正确</span>
    <div class="dialog">
      <div v-for="(item, index) in  formInline" :key="index" class="item">
        <div class="key">{{ index }}：</div>
        <div>{{ item }}</div>
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="onSubmit()">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style lang="less" scoped>
.dialog {
  display: flex;
  flex-direction: column;
  .item {
    display: flex;
    .key {
      width: 6em;
      flex-shrink: 0;
      text-align: right;
      margin-right: 15px;
      word-break: keep-all;
      word-wrap: normal;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>