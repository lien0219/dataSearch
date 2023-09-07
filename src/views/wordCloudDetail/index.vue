<template>
  <div class="wordDetail">
    <h2>
      词云详情: {{ $route.query.wordCloudInfo }}---{{ $route.query.number }}
    </h2>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

let $route = useRoute()
</script>

<style scoped lang="scss">
.wordDetail {
  width: 100%;
  height: 1200px;
  background-color: rgb(248, 225, 229);
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 54px;
}
</style>
