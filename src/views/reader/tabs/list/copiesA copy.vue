<template>
  <div class="listA">
    <div
      v-for="(item, index) in 3"
      :key="index"
      v-show="activeContent === item"
      class="reader_content___PdLul pdf_only___bIj3S"
    >
      A内容区域{{ item }}
      <!-- <div class="pdf_con___35T-n">
        <img src="../../../../assets/book/1.png" />
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const activeContent = inject('activeContent')
</script>

<style scoped lang="scss">
.listA {
  .reader_content___PdLul {
    display: inline-block;
    height: 100%;
    width: 100%;
    padding: 32px 48px;
    background-color: #f1f0eb;
    vertical-align: top;
    position: relative;
    border: 1px solid red;
    .pdf_con___35T-n {
      background-color: #f3f2ec;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 750px;
        height: 750px;
      }
    }
  }
  .pdf_only___bIj3S {
  }
}
</style>
