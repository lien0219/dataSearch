<template>
  <el-button
    :type="type"
    :plain="plain"
    :round="round"
    :disanled="disabled"
    :loading="loading"
    :size="size"
    @click="handleClick"
  >
    <slot></slot>
  </el-button>
</template>

<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: 'default',
  },
  plain: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['click'])
const handleClick = () => {
  emit('click')
}
</script>

<style scoped lang="scss"></style>
