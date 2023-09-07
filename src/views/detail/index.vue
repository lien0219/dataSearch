<template>
  <div class="detail">
    <div class="ant-space">
      <div class="ant-space-item">
        <img src="../../assets/images/detail.jpeg" alt="" />
      </div>
      <div class="ant-space-item">
        <div>
          <div class="info_name___1Ibs8">{{ $route.query.id }}</div>
          <div class="info_intro___2yjZw">
            代表作有中山陵、雷峰塔等建筑代表作有中山陵、雷峰塔等建筑代表作有中山陵、雷峰塔等建筑代表作有中山陵、雷峰塔等建筑代表作有中山陵、雷峰塔等建筑代表作有中山陵、雷峰塔等建筑代表作有中山陵、雷峰塔等建筑代表作有中山陵、雷峰塔等建筑代表作有中山陵代表作有中山陵、雷峰塔等建筑代表作有中山陵、雷峰塔等建筑代表作有中山陵、雷峰塔等建筑代表作有中山陵、雷峰塔等建筑代表作有中山陵、雷峰塔等建筑代表作有中山陵、雷峰塔等建筑代表作有中山陵、雷峰塔等建筑代表作有中山陵、雷峰塔等建筑代表作有中山陵、雷峰塔等建筑代表作有中山陵、雷峰塔等建筑代表作有中山陵、雷峰塔等建筑、雷峰塔等建筑代表作有中山陵、雷峰塔等建筑代表作有中山陵、雷峰塔等建筑
          </div>
        </div>
      </div>
    </div>
    <div class="author_content">
      <div class="con_left">
        <div class="left_header">TA的作品</div>
        <div class="left_con">
          <div
            class="book_item"
            v-for="(item, index) in items"
            :key="index"
            @click="jumpBook"
          >
            <div class="img_wrapper">
              <img :src="item.img" alt="" />
            </div>
            <div class="book_info">{{ item.title }}</div>
          </div>
        </div>
      </div>
      <div class="con_right">
        <div class="right_header">相关推荐</div>
        <div class="right_con">
          <div
            class="a_book"
            v-for="(item, index) in list"
            :key="index"
            @click="jumpBook"
          >
            <div class="reco_item">
              <div
                class="reco_item_number"
                :class="
                  item.id === 1
                    ? 'bac1'
                    : item.id === 2
                    ? 'bac2'
                    : item.id === 3
                    ? 'bac3'
                    : ''
                "
              >
                {{ item.id }}
              </div>
              <div class="reco_info">{{ item.tit }}</div>
              <div class="type_icon">{{ item.btn }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import book from '@/assets/images/book.jpg'

let $route = useRoute()
let $router = useRouter()

const items = reactive([
  { img: book, title: '中国古代建筑史' },
  { img: book, title: '中国古代建筑史' },
  { img: book, title: '中国古代建筑史' },
])

const list = reactive([
  { id: 1, tit: '中国古代建筑史', btn: '图书' },
  { id: 2, tit: '中国建筑艺术史', btn: '图书' },
  { id: 3, tit: '中国古代建筑技术史', btn: '图书' },
  { id: 4, tit: '园林建筑学', btn: '图书' },
  { id: 5, tit: '中国现代建筑史', btn: '图书' },
  { id: 6, tit: '中国建筑史论', btn: '图书' },
  { id: 7, tit: '古建筑常识', btn: '图书' },
  { id: 8, tit: '中国建筑史大观', btn: '图书' },
  { id: 9, tit: '中国现代建筑100年', btn: '图书' },
  { id: 10, tit: '中国古代建筑史艺史', btn: '图书' },
  { id: 11, tit: '中国古代建筑史纲要', btn: '图书' },
  { id: 12, tit: '中国建筑艺术丛书', btn: '图书' },
  { id: 13, tit: '中国现代建筑设计研究', btn: '图书' },
  { id: 14, tit: '中国现代建筑设计研究', btn: '图书' },
  { id: 15, tit: '中国传统建筑风格', btn: '图书' },
  { id: 16, tit: '中国古代宫殿建筑', btn: '图书' },
])

const jumpBook = () => {
  $router.push('/book')
}
</script>

<style scoped lang="scss">
.detail {
  padding: 5%;
  border: 1px solid black;
  .ant-space {
    display: flex;
    margin-top: 60px;
    margin-bottom: 24px;
    align-items: flex-start;
    .ant-space-item {
      img {
        width: 220px;
        vertical-align: middle;
        border-style: none;
        margin-right: 25px;
      }
      .info_name___1Ibs8 {
        font-size: 20px;
        font-weight: 700;
        line-height: 20px;
        margin: 24px 0;
      }
      .info_intro___2yjZw {
        text-indent: 2em;
        font-size: 14px;
        color: #999;
        line-height: 22px;
      }
    }
  }
  .author_content {
    display: flex;
    min-height: 600px;
    .con_left {
      display: flex;
      flex-direction: column;
      width: 100%;
      flex: 1 1;
      margin-right: 24px;
      .left_header {
        font-size: 16px;
        background-color: #f9f9f7;
        padding: 16px 24px;
        color: #aa381e;
        border-left: 4px solid #aa381e;
      }
      .left_con {
        padding: 24px;
        border: 1px solid #f0f0f0;
        border-top: none;
        flex: 1 1;
        .book_item {
          display: inline-block;
          margin: 11px;
          cursor: pointer;
          .img_wrapper {
            width: 170px;
            height: 220px;
            overflow: hidden;
            img {
              width: 170px;
              height: 220px;
              transition: transform 0.3s ease;
            }
            img:hover {
              transform: scale(1.08);
            }
          }
          .book_info {
            color: #666;
            margin-top: 8px;
            text-align: center;
            font-size: 18px;
          }
        }
        .book_item:hover .book_info {
          color: #aa381e;
        }
      }
    }
    .con_right {
      width: 20%;
      max-width: 300px;
      display: flex;
      flex-direction: column;
      .right_header {
        font-size: 16px;
        background-color: #f9f9f7;
        padding: 16px 24px;
        border-top: 3px solid #aa381e;
      }
      .right_con {
        border: 1px solid #f0f0f0;
        border-top: none;
        flex: 1 1;
        .a_book {
          color: #aa381e;
          text-decoration: none;
          background-color: transparent;
          outline: none;
          cursor: pointer;
          transition: color 0.3s;
          -webkit-text-decoration-skip: objects;
          .reco_item {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding: 12px 24px;
            .reco_item_number {
              width: 20px;
              height: 20px;
              border-radius: 10px;
              text-align: center;
              background-color: #ccc;
              color: #f9f9f7;
              line-height: 20px;
              background-color: #ccc;
              font-size: 14px;
            }
            .reco_info {
              color: #666;
              margin: 0 12px;
              flex: 1 1;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-size: 14px;
            }
            .type_icon {
              background-color: #aa381e;
              color: #f9f9f7;
              font-size: 12px;
              line-height: 22px;
              padding: 0 6px;
              border-radius: 4px;
            }
          }
          .bac1 {
            background-color: rgb(223, 19, 19) !important;
          }
          .bac2 {
            background-color: rgb(245, 143, 43) !important;
          }
          .bac3 {
            background-color: rgb(245, 205, 43) !important;
          }
        }
      }
    }
  }
}
</style>
