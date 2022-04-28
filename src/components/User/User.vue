<!--
 * @Author: litfa
 * @Date: 2022-04-10 19:36:43
 * @LastEditTime: 2022-04-28 17:58:04
 * @LastEditors: litfa
 * @Description: 用户卡片
 * @FilePath: /admin/src/components/User/User.vue
 * 
-->
<script lang="ts" setup>
import propNames from './props'
import dayjs from 'dayjs'
const props = defineProps(propNames)
</script>

<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>{{ username }}</span>
        <a :href="`#/users/details/${author_id}`" target="_blank">
          <el-button class="button" type="text">用户详情</el-button>
        </a>
      </div>
    </template>
    <div>
      <span>id:</span>
      <span>{{ author_id }}</span>
    </div>
    <div>
      <span>状态:</span>
      <span>{{ author_status }}</span>
    </div>
    <div>
      <span>头像</span>
      <img :src="avatar" />
    </div>
    <div>
      <span>用户名:</span>
      <span>{{ username }}</span>
    </div>
    <div>
      <span>注册时间:</span>
      <span>{{ dayjs(registerDate).format('YYYY-MM-DD HH-MM-ss') }}</span>
    </div>
    <div>
      <span>权限等级:</span>
      <span>{{ permissions }}</span>
    </div>
    <div>
      <span>openid:</span>
      <span>{{ openid }}</span>
    </div>
    <div>
      <span>unionid:</span>
      <span>{{ unionid }}</span>
    </div>
  </el-card>
</template>

<style lang="less" scoped>
.el-card {
  display: inline-block;
  vertical-align: top;
  margin-left: 10px;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
.el-card__body {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  div {
    display: flex;
    line-height: 35px;
    span:first-child {
      width: 5em;
      text-align: right;
      margin-right: 10px;
      flex-shrink: 0;
    }
    img {
      width: 100px;
    }
  }
}
</style>