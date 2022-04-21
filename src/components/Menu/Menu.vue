<!--
 * @Author: litfa
 * @Date: 2022-04-10 14:16:58
 * @LastEditTime: 2022-04-21 18:08:43
 * @LastEditors: litfa
 * @Description: 左侧菜单
 * @FilePath: /admin/src/components/Menu/Menu.vue
 * 
-->
<script lang="ts" setup>
import { ref } from 'vue'
import { User, BalanceTwo, Word, MenuFoldOne, MenuUnfoldOne, LinkTwo } from '@icon-park/vue-next'
const isCollapse = ref(false)
</script>
<template>
  <el-menu :default-openeds="['check']" router :collapse="isCollapse">
    <el-sub-menu index="check">
      <template #title>
        <el-icon>
          <balance-two theme="outline" size="24" fill="#333" :strokeWidth="3" />
        </el-icon>
        <span>内容审核</span>
      </template>
      <el-menu-item index="/check/articles">文章审核</el-menu-item>
      <el-menu-item index="/check/comment">评论审核</el-menu-item>
      <el-menu-item index="/check/friend-link">友链审核</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="users">
      <template #title>
        <el-icon>
          <user theme="outline" size="24" fill="#333" :strokeWidth="3" />
        </el-icon>
        <span>用户管理</span>
      </template>
      <el-menu-item index="/users">用户列表</el-menu-item>
      <!-- <el-menu-item-group>
        <template #title>用户管理</template>
      </el-menu-item-group>-->
    </el-sub-menu>
    <el-sub-menu index="articles">
      <template #title>
        <el-icon>
          <word theme="outline" size="24" fill="#333" :strokeWidth="3" />
        </el-icon>
        <span>文章管理</span>
      </template>
      <el-menu-item index="/articles">文章列表</el-menu-item>
      <!-- <el-menu-item-group>
        <template #title>用户管理</template>
      </el-menu-item-group>-->
      <!-- <el-menu-item-group title="Group 2">
        <el-menu-item index="3-3">Option 3</el-menu-item>
      </el-menu-item-group>-->
    </el-sub-menu>
    <el-sub-menu index="friend">
      <template #title>
        <el-icon>
          <link-two theme="outline" size="24" fill="#333" />
        </el-icon>
        <span>友链管理</span>
      </template>
      <el-menu-item index="/friend-link">友链管理</el-menu-item>
    </el-sub-menu>
  </el-menu>
  <menu-fold-one
    v-if="isCollapse"
    @click="isCollapse = !isCollapse"
    theme="outline"
    size="24"
    fill="#333"
    :strokeWidth="3"
  />
  <menu-unfold-one
    v-else
    @click="isCollapse = !isCollapse"
    theme="outline"
    size="24"
    fill="#333"
    :strokeWidth="3"
  />
</template>

<style lang="less" scoped>
.el-menu {
  --el-aside-width: auto;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>