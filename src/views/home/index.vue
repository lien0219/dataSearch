<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#aa381e"
          text-color="hsla(0,0%,100%,.8)"
          active-text-color="#fff"
          @select="handleSelect"
          router
        >
          <el-menu-item index="/retrieval">
            <svg-icon class="imgSvg" name="logo3"></svg-icon>
          </el-menu-item>
          <el-sub-menu index="2">
            <template #title>近代专题库</template>
            <div class="ant-popover-inner">
              <div class="ant-popover-inner-content">
                <div class="sub_container">
                  <div
                    class="sub_item"
                    v-for="(item, index) in itemList"
                    :key="index"
                    @click="routerChange(item)"
                  >
                    <div class="ant-space-item">
                      <img :src="item.img" alt="example" />
                      <span>{{ item.tit }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-sub-menu>
          <el-menu-item index="/theCharts">排行榜</el-menu-item>
          <el-menu-item index="/authorLibrary">作者库</el-menu-item>
          <el-menu-item
            class="screen"
            style="padding-left: 0px; position: relative"
            index="/screen"
          >
            数据分析平台
          </el-menu-item>

          <el-menu-item>
            <div class="btn">
              <span @click="login">登陆</span>
              &nbsp;|&nbsp;
              <span @click="register">注册</span>
            </div>
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </transition>
        </router-view>
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Footer from '@/views/home/footer/index.vue'
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import type { item } from './index.ts'

import imga from '@/assets/images/item/itema.png'
import imgb from '@/assets/images/item/itemb.png'
import imgc from '@/assets/images/item/itemc.png'
import imgd from '@/assets/images/item/itemd.png'
import imge from '@/assets/images/item/iteme.png'
import imgf from '@/assets/images/item/itemf.png'
import imgg from '@/assets/images/item/itemg.png'
import imgh from '@/assets/images/item/itemh.png'
import imgi from '@/assets/images/item/itemi.png'

let $router = useRouter()

const activeIndex2 = ref('1')
const itemList = reactive([
  { img: imga, tit: '近代经济学文献数据库' },
  { img: imgb, tit: '近代教育学文献数据库' },
  { img: imgc, tit: '近代经济思想数据库' },
  { img: imgd, tit: '近代文学数据库' },
  { img: imge, tit: '近代建筑学数据库' },
  { img: imgf, tit: '历史考古学术数据库' },
  { img: imgg, tit: '当代中国学术史数据库' },
  { img: imgh, tit: '政治学学术数据库' },
  { img: imgi, tit: '文学艺术学术数据库' },
]) as { img: string; tit: string }[]
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const login = () => {
  $router.push('/login')
}
const register = () => {
  $router.push('/register')
}
const routerChange = (item: item) => {
  $router.push({
    path: '/topicLibrary',
    query: { pattern: item.tit },
  })
}
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}
.el-header {
  position: fixed;
  width: 100%;
  z-index: 1000;
}
.imgSvg {
  height: 60px;
  margin-left: 80px;
}
.el-menu--horizontal > .el-menu-item {
  border: none;
}
.el-menu--horizontal > .el-sub-menu .el-sub-menu__title {
  border: none;
}
.btn {
  position: relative;
  border: 1px solid white;
  width: 110px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  z-index: 10;
}
.btn span:nth-child(1) {
  padding-left: 15px;
}
.btn span:nth-child(1):hover {
  color: white;
  cursor: pointer;
}
.btn span:nth-child(2) {
  padding-right: 15px;
}
.btn span:nth-child(2):hover {
  color: white;
  cursor: pointer;
}
ul li:nth-child(6) {
  position: absolute;
  right: 90px;
}
ul li:nth-child(1):hover {
  background-color: unset !important;
}
ul li:nth-child(1):focus {
  background-color: unset !important;
}
ul li:nth-child(6):hover {
  background-color: unset !important;
}

ul li:nth-child(3):hover {
  color: white !important;
}
ul li:nth-child(4):hover {
  color: white !important;
}

ul li:nth-child(3) {
  margin-left: 20px;
  padding-left: 30px;
  padding-right: 30px;
  margin-right: 15px;
}
ul li:nth-child(4) {
  padding-left: 30px;
  padding-right: 30px;
}
ul li:nth-child(5) {
  position: fixed;
}

ul li:nth-child(5):focus {
  background: none !important;
}
ul li:nth-child(3)::before {
  content: '';
  position: absolute;
  top: 15px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  height: 30px;
  border-left: 2px solid hsla(0, 0%, 100%, 0.28);
}
ul li:nth-child(4)::before {
  content: '';
  position: absolute;
  top: 15px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  height: 30px;
  border-left: 2px solid hsla(0, 0%, 100%, 0.28);
}
.el-menu--horizontal.el-menu {
  border: none;
}
.ant-popover-inner {
  margin-top: -10px;
  margin-bottom: -10px;
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 2px;
  box-shadow:
    0 3px 6px -4px rgba(0, 0, 0, 0.12),
    0 6px 16px 0 rgba(0, 0, 0, 0.08),
    0 9px 28px 8px rgba(0, 0, 0, 0.05);
  .ant-popover-inner-content {
    padding: 12px 16px;
    color: rgba(0, 0, 0, 0.85);
    .sub_container {
      background: #f9f9f9;
      display: flex;
      justify-content: space-between;
      flex-flow: row wrap;
      min-width: 1000px;
      .sub_item {
        flex-basis: 22%;
        margin: 4px;
        padding: 12px;
        border-radius: 4px;
        cursor: pointer;
        transition:
          all 0.2s,
          border-color 0.2s;
        .ant-space-item {
          display: flex;
          align-items: center;
          img {
            width: 42px;
            height: 42px;
            vertical-align: middle;
            border-style: none;
            overflow: clip;
          }
          span {
            width: 144px;
            color: #836565;
            vertical-align: bottom;
            display: inline-block;
            max-width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 14px;
            margin-right: -100px;
            margin-left: 5px;
          }
        }
      }
      .sub_item:hover {
        box-shadow:
          0 1px 2px -2px #f5f5f5,
          0 2px 17px #f5f5f5,
          0 2px 8px 2px #dbd4ce;
      }
      .sub_item:hover span {
        color: #aa381e;
      }
    }
  }
}
.screen::before {
  content: '';
  position: absolute;
  top: 15px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  height: 30px;
  border-left: 2px solid hsla(0, 0%, 100%, 0.28);
}
.screen {
  margin-left: 15px;
}
</style>
