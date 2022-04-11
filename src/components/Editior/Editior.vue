<!--
 * @Author: litfa
 * @Date: 2022-04-10 20:46:36
 * @LastEditTime: 2022-04-10 20:46:56
 * @LastEditors: litfa
 * @Description: 编辑器
 * @FilePath: /admin/src/components/Editior/Editior.vue
 * 
-->
<script lang="ts" setup>
// 编辑器
import VMdEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'

// Prism
import Prism from 'prismjs'
// highlight code
import 'prismjs/components/prism-json'

VMdEditor.use(vuepressTheme, {
  Prism
})
const getHTML = (content: string) => {
  return VMdEditor.vMdParser.themeConfig.markdownParser.render(content)
}
defineExpose({ getHTML })
</script>

<template>
  <VMdEditor></VMdEditor>
</template>

<style lang="less" scoped>
</style>