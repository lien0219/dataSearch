<template>
  <div class="tabs">
    <div class="con_left___2rES">
      <div
        class="menu_item___2vRdX"
        :class="[bColor == index ? 'active' : '']"
        v-for="(item, index) in dataCom"
        :key="index"
        @click="switchCom(item, index)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="reader_content___PdLul text_only___FyoUt">
      <transition name="fade" mode="out-in">
        <component :is="comId"></component>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, markRaw, shallowRef } from 'vue'
import CopiesA from '@/views/reader/tabs/list/copiesA.vue'
import CopiesB from '@/views/reader/tabs/list/copiesB.vue'
import CopiesC from '@/views/reader/tabs/list/copiesC.vue'

// 动态组件
const comId = shallowRef(CopiesA)
const bColor = ref(0)
const dataCom = reactive([
  { name: ' 周易上經泰傳第一', com: markRaw(CopiesA) },
  { name: ' 周易上經泰傳第二', com: markRaw(CopiesB) },
  { name: ' 周易上經泰傳第三', com: markRaw(CopiesC) },
])

const switchCom = (item: any, index: number) => {
  comId.value = item.com
  bColor.value = index
}
</script>

<style scoped lang="scss">
.tabs {
  height: 99.8%;
  .con_left___2rES {
    display: inline-block;
    width: 280px;
    height: 100%;
    background-color: #f3f0f0;
    border-right: 1px solid rgba(5, 5, 5, 0.06);
    overflow: auto;
    border: 1px solid green;
    .menu_item___2vRdX {
      cursor: pointer;
      line-height: 76px;
      color: #606065;
      font-size: 19px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding-left: 32px;
      position: relative;
    }
    .menu_item___2vRdX:hover {
      background-color: #ecebe6;
    }
    .active {
      color: #aa381e;
      background-color: rgba(246, 159, 83, 0.05);
    }
    .active::before {
      background: url(../../../assets/icons/act.png) no-repeat 0 0;
      background-size: 6px 100%;
      content: ' ';
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 6px;
    }
  }
  .reader_content___PdLul {
    display: inline-block;
    height: 100%;
    width: calc(100% - 280px);
    padding: 32px 48px;
    background-color: #f8f7f3;
    vertical-align: top;
    position: relative;
    border: 1px solid red;
  }
  .text_only___FyoUt {
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s;
  opacity: 0;
  transform: translateX(30px);
}
</style>
