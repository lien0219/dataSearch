<template>
  <div class="tool">
    <div class="menu">
      <div class="btn">
        <el-icon>
          <Plus />
        </el-icon>
      </div>
      <span style="--i: 0">
        <el-icon>
          <House />
        </el-icon>
      </span>
      <span style="--i: 1">
        <el-icon>
          <Menu />
        </el-icon>
      </span>
      <span style="--i: 2">
        <el-icon>
          <Goods />
        </el-icon>
      </span>
      <span style="--i: 3">
        <el-icon>
          <Setting />
        </el-icon>
      </span>
      <span style="--i: 4">
        <el-icon><Message /></el-icon>
      </span>
      <span style="--i: 5">
        <el-icon><ShoppingCart /></el-icon>
      </span>
      <span style="--i: 6">
        <el-icon><Coin /></el-icon>
      </span>
      <span style="--i: 7">
        <el-icon><Star /></el-icon>
      </span>
    </div>
    <div class="search">
      <ToolSearch></ToolSearch>
    </div>
  </div>
</template>

<script setup lang="ts">
import ToolSearch from '@/views/retrieval/trends/toolbox/toolSearch/index.vue'
</script>

<style scoped lang="scss">
.tool {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  .menu {
    position: relative;
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    .btn {
      position: absolute;
      z-index: 100;
      width: 100px;
      height: 100px;
      background-color: #444a54;
      color: #fff;
      border: 2px solid #fff;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: all 1.25s;
      i {
        font-size: 32px;
      }
    }
    span {
      width: 50px;
      height: 50px;
      background-color: #303640;
      color: #01bdab;
      border: 2px solid #01bdab;
      position: absolute;
      left: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      cursor: pointer;
      transform-origin: 100px;
      transition: 0.5s;
      transition-delay: calc(0.1s * var(--i));
      transform: rotate(0deg) translateX(80px);
    }
  }
  .menu:hover span {
    transform: rotate(calc(360deg / 8 * var(--i)));
  }
  .search {
    // float: right;
    margin-left: 0px;
  }
}
</style>
