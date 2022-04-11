<!--
 * @Author: litfa
 * @Date: 2022-04-10 20:48:18
 * @LastEditTime: 2022-04-11 14:49:59
 * @LastEditors: litfa
 * @Description: 内容
 * @FilePath: /admin/src/components/Articles/Content.vue
 * 
-->
<script lang="ts" setup>
import { nextTick, onMounted, ref } from 'vue'
import propNames from './props'
import Editior from '@/components/Editior/Editior.vue'
const props = defineProps(propNames)
const editior = ref<null | HTMLElement>(null)
onMounted(() => {
  nextTick(() => {
    document.querySelector('textarea').disabled = true
  })
})
</script>

<template>
  <component
    v-bind:is="Editior"
    v-model="content"
    left-toolbar=" "
    :disabled-menus="[]"
    ref="editior"
  ></component>
</template>

<style lang="less" scoped>
</style>