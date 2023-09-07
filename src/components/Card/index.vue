<template>
 <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>{{ title }}</span>
      </div>
    </template>
    <slot></slot>
  </el-card>
</template>

<script setup lang="ts">
defineProps({
    title:{
        type:String,
    },
    width:{
        type:String,
        default:''
    },
    height:{
        type:String,
        default:''
    }
})
</script>

<style scoped>

</style>


