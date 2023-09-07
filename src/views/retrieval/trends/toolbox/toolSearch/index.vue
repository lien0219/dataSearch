<template>
  <div class="content">
    <div class="searchBar">
      <div class="icon" @click="toggleSearchBarWidth">
        <el-icon><Search /></el-icon>
      </div>
      <div class="textInput">
        <el-input
          class="inp"
          v-model="inpValue"
          placeholder="请输入搜索关键字"
        />
        <button type="button" class="goBtn">go</button>
        <div class="clear" @click="clearInput">
          <el-icon><Close /></el-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let inpValue = ref('')

const toggleSearchBarWidth = () => {
  const searchBar = document.querySelector('.searchBar')
  searchBar?.classList.toggle('changeWidth')
}
const clearInput = () => {
  inpValue.value = ''
}
</script>

<style scoped lang="scss">
.content {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .searchBar {
    width: 400px;
    height: 60px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    border-radius: 60px;
    position: relative;
    overflow: hidden;
    transition: 0.5s;
    .icon {
      width: 60px;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      i {
        color: dodgerblue;
        font-size: 30px;
      }
    }
    .textInput {
      width: 320px;
      height: 60px;
      position: absolute;
      top: 0;
      left: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      .el-input {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        font-size: 18px;
      }
      .inp {
      }
      .goBtn {
        width: 12%;
        height: 60%;
        position: absolute;
        top: 20%;
        right: 0;
        border-radius: 8px;
        outline: none;
        border: none;
        color: #fff;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
        background: linear-gradient(skyblue, deepskyblue);
        cursor: pointer;
      }
      .clear {
        width: 15px;
        height: 15px;
        position: absolute;
        right: 22%;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        i {
          color: #999;
        }
      }
    }
  }
  .searchBar {
    width: 60px;
  }
  .changeWidth {
    width: 400px;
  }
}
</style>
