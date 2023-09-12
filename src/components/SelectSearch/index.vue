<template>
  <el-input
    v-model="searchKeyword"
    placeholder="请输入关键字"
    class="input-with-select"
  >
    <template #prepend>
      <el-select
        v-model="selectedOption"
        placeholder="请选择"
        style="width: 115px"
      >
        <el-option
          v-for="option in filteredOptions"
          :key="option.value"
          :label="option.value"
          :value="option.value"
        />
      </el-select>
    </template>
    <template #append>
      <el-button @click="search" :icon="Search" />
    </template>
  </el-input>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, computed } from 'vue'

const emit = defineEmits()
const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
})

const selectedOption = ref('')
const searchKeyword = ref('')

const filteredOptions = computed(() => {
  return props.options.filter((option) =>
    option.value.includes(searchKeyword.value),
  )
})

const search = () => {
  emit('search', selectedOption.value, searchKeyword.value)
}
/* 父组件使用


  <SelectSearch :options="options" @search="handleSearch"></SelectSearch>


import { ref } from 'vue'

let options = ref([
  { value: 'option1', label: '选项1' },
  { value: 'option2', label: '选项2' },
  { value: 'option3', label: '选项3' },
])

const handleSearch = (selectedOption: string, searchKeyword: string) => {
  console.log(selectedOption, searchKeyword)
}
*/
</script>

<style scoped></style>
