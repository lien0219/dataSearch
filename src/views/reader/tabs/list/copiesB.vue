<template>
  <div class="listA">
    <div v-if="activeContent === 1">B内容区域1</div>
    <div v-if="activeContent === 2">B内容区域2</div>
    <div v-if="activeContent === 3">B内容区域3</div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const activeContent = inject('activeContent')
</script>

<style scoped lang="scss"></style>
