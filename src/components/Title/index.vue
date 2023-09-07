<template>
   <h1 class="title">{{ title }}</h1>
</template>

<script setup lang="ts">
import {PropsType} from 'vue'
defineProps({
    title: {
      type: String as PropType<string>,
      required: true,
    },
})
</script>

<style scoped lang="scss">
.title {
  // font-weight: bold;
}
</style>