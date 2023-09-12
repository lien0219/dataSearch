<template>
  <div class="screenBig">
    <div class="three">
      <el-card style="background: none; border: none">
        <Search></Search>
        <!-- <Trends /> -->
      </el-card>
      <el-button @click="changeEarth">3D地球</el-button>
      <el-button @click="changePanorama">3D全景场景</el-button>
      <el-button @click="changeModel">模型点击&&天空盒子</el-button>
      <el-button @click="changeEvent">模型交互</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import Search from '@/views/screen/toolSearch/index.vue'
import Trends from '@/views/screen/Trends/index.vue'

let $router = useRouter()

const changeEarth = () => {
  $router.push('/earth')
}
const changePanorama = () => {
  $router.push('/panorama')
}
const changeModel = () => {
  $router.push('/model')
}
const changeEvent = () => {
  $router.push('/modelInteraction')
}
</script>

<style scoped lang="scss">
.screenBig {
  height: 1200px;
  background-color: palevioletred;
  //   margin: 80px;
  background-image: url('../../assets/screen.gif');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  .three {
    position: absolute;
    margin-top: 180px;
  }
}
</style>
