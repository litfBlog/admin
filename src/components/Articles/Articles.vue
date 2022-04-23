<!--
 * @Author: litfa
 * @Date: 2022-04-10 20:04:22
 * @LastEditTime: 2022-04-23 16:53:40
 * @LastEditors: litfa
 * @Description: 文章详情
 * @FilePath: /admin/src/components/Articles/Articles.vue
 * 
-->
<script lang="ts" setup>
import Content from './Content.vue'
import propNames from './props'
const props = defineProps(propNames)
</script>

<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>{{ title }}</span>
        <!-- <el-button class="button" type="text">详情</el-button> -->
      </div>
    </template>
    <div>
      <span>id:</span>
      <span>{{ id }}</span>
    </div>
    <div>
      <span>状态:</span>
      <span>{{ desc }}</span>
    </div>
    <div>
      <span>封面:</span>
      <img :src="props.cover" />
    </div>
    <div>
      <span>简介:</span>
      <span>{{ desc }}</span>
    </div>
    <div>
      <span>点赞:</span>
      <span>{{ likes_count }}</span>
    </div>
  </el-card>
  <Content v-bind="props"></Content>
</template>

<style lang="less" scoped>
.el-card {
  display: inline-block;
  margin-left: 10px;
  margin-bottom: 10px;
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