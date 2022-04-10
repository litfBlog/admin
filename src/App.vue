<!--
 * @Author: litfa
 * @Date: 2022-04-09 18:28:33
 * @LastEditTime: 2022-04-10 14:44:28
 * @LastEditors: litfa
 * @Description: App
 * @FilePath: /admin/src/App.vue
 * 
-->
<script lang="ts" setup>
import Header from '@/components/Header/Header.vue'
import Menu from '@/components/Menu/Menu.vue'
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
            <Menu></Menu>
          </el-scrollbar>
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
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
