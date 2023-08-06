<template>
  <h1>App</h1>
  <div>
    <el-button type="primary" :icon="Plus">Primary</el-button>
    <el-button type="success" :icon="Edit">Success</el-button>
  </div>
  <Test></Test>
  <TestAxios></TestAxios>
</template>
<script setup lang="ts">
// 引入图标组件
// @ts-ignore
import { Plus, Edit } from '@element-plus/icons-vue'
import Test from '@/components/Test.vue'
import TestAxios from '@/components/TestAxios.vue'
</script>
<style scoped></style>
