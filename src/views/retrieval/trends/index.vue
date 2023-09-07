<template>
  <div class="trends">
    <el-card class="box-card">
      <Toolbox></Toolbox>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import Toolbox from '@/views/retrieval/trends/toolbox/index.vue'
</script>

<style scoped lang="scss">
.trends {
  .box-card {
    background: none;
    border: none;
  }
}
</style>
