<!--
 * @Author: litfa
 * @Date: 2022-04-09 18:28:33
 * @LastEditTime: 2022-04-09 20:17:30
 * @LastEditors: litfa
 * @Description: App
 * @FilePath: /admin/src/App.vue
 * 
-->
<script lang="ts" setup>
import { User } from '@icon-park/vue-next'
import Header from '@/components/Header/Header.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-scrollbar>
            <el-menu :default-openeds="['1', '3']">
              <el-sub-menu index="1">
                <template #title>
                  <el-icon>
                    <user theme="outline" size="24" fill="#333" :strokeWidth="3" />
                  </el-icon>用户管理
                </template>
                <el-menu-item-group>
                  <template #title>用户管理</template>
                  <el-menu-item index="1-1">用户列表</el-menu-item>
                  <el-menu-item index="1-2">Option 2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Group 2">
                  <el-menu-item index="1-3">Option 3</el-menu-item>
                </el-menu-item-group>
              </el-sub-menu>
            </el-menu>
          </el-scrollbar>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="less" scoped>
.common-layout {
  width: 100%;
  height: 100vh;
  :deep(.el-container) {
    height: 100vh;
  }
  .el-header {
    padding: 0;
  }
}
</style>
