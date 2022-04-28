<!--
 * @Author: litfa
 * @Date: 2022-04-28 19:32:41
 * @LastEditTime: 2022-04-28 20:26:11
 * @LastEditors: litfa
 * @Description: 设置用户
 * @FilePath: /admin/src/components/SetUser/SetUser.vue
 * 
-->
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { setUser } from '@/apis/getUsers'
import { ElMessage } from 'element-plus'

const props = defineProps({
  data: Object
})

const dialogVisible = ref(false)

// do not use same name with ref
const form = reactive({
  status: props.data.status,
  username: props.data.username,
  avatar: props.data.avatar,
  registerDate: props.data.registerDate,
  permissions: props.data.permissions,
  openid: props.data.openid,
  unionid: props.data.unionid
})

const onSubmit = async () => {
  dialogVisible.value = false
  const { data: res } = await setUser(props.data.id, form)
  if (res.status == 1) {
    ElMessage.success('成功')
  } else {
    ElMessage.error('失败')
  }
}
</script>

<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="用户名">
      <el-input v-model="form.username" />
    </el-form-item>
    <el-form-item label="头像">
      <el-input v-model="form.avatar" />
    </el-form-item>
    <el-form-item label="状态">
      <el-select v-model="form.status" placeholder="please select">
        <el-option label="正常" :value="1" />
        <el-option label="封禁" :value="2" />
      </el-select>
    </el-form-item>
    <el-form-item label="权限">
      <el-select v-model="form.permissions" placeholder="please select">
        <el-option label="用户" :value="1" />
        <el-option label="admin" :value="15" />
      </el-select>
    </el-form-item>
    <el-form-item label="注册时间">
      <el-col :span="11">
        <el-date-picker
          v-model="form.registerDate"
          type="date"
          placeholder="设置时间"
          style="width: 100%"
        />
      </el-col>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="dialogVisible = true">提交</el-button>
    </el-form-item>
  </el-form>

  <el-dialog v-model="dialogVisible" title="请确认信息" width="30%">
    <div class="alert">
      <span style="color: red;">管理系统未检验表单，请确认数据准确</span>
      <div>
        <span>状态：</span>
        {{ form.status }}
      </div>
      <div>
        <span>用户名</span>
        {{ form.username }}
      </div>
      <div>
        <span>头像</span>
        {{ form.avatar }}
      </div>
      <div>
        <span>注册时间</span>
        {{ form.registerDate }}
      </div>
      <div>
        <span>权限</span>
        {{ form.permissions }}
      </div>
      <div>
        <span>openid</span>
        {{ form.openid }}
      </div>
      <div>
        <span>unionid</span>
        {{ form.unionid }}
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style lang="less" scoped>
.alert {
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    align-items: center;
    margin: 4px 0;
    span {
      display: inline-block;
      flex-shrink: 0;
      width: 6em;
    }
  }
}
</style>