<!--
 * @Author: litfa
 * @Date: 2022-04-10 19:21:48
 * @LastEditTime: 2022-04-10 21:01:37
 * @LastEditors: litfa
 * @Description: 文章详情
 * @FilePath: /admin/src/pages/Articles/Details.vue
 * 
-->
<script lang="ts" setup>
import User from '@/components/User/User.vue'
import Articles from '@/components/Articles/Articles.vue'
import { useRoute } from 'vue-router'
import getArticlesDetailsApi from '@/apis/getArticlesDetails'
import { ref } from 'vue'
const route = useRoute()
const data: any = ref({})
const getArticlesDetails = async () => {
  const { data: res } = await getArticlesDetailsApi(Number(route.params.id))
  data.value = res.data[0]
}
getArticlesDetails()
</script>

<template>
  <User
    v-bind="{
      author_id: data.author_id,
      author_status: data.author_status,
      username: data.username,
      avatar: data.avatar,
      registerDate: data.registerDate,
      permissions: data.permissions
    }"
  ></User>
  <Articles
    v-bind="{
      content: data.content,
      cover: data.cover,
      id: data.id,
      desc: data.desc,
      likes_count: data.likes_count,
      status: data.status,
      title: data.title,
      uuid: data.uuid
    }"
  ></Articles>
</template>

<style lang="less" scoped>
</style>