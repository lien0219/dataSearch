<template>
  <div class="bookRight">
    <div class="right_header">相关推荐</div>
    <div class="range_con___1HmdN">
      <a v-for="(item, index) in top" :key="index" @click="readerBtn(item)">
        <div class="reco_item___3Mhd1">
          <div class="reco_icon___K1g44">{{ item.id }}</div>
          <div class="reco_info___2i_di">{{ item.label }}</div>
          <div class="type_icon___ROb5U">{{ item.btn }}</div>
        </div>
      </a>
      <div
        class="ant-divider ant-divider-horizontal ant-divider-with-text ant-divider-with-text-left"
        role="separator"
      >
        <span class="ant-divider-inner-text">相关词</span>
      </div>
      <div style="width: 100%; height: 200px">
        <WordCloud chartId="chart1" :wordList="list"></WordCloud>
      </div>
      <div
        class="ant-divider ant-divider-horizontal ant-divider-with-text ant-divider-with-text-left"
        role="separator"
      >
        <span class="ant-divider-inner-text">人物</span>
      </div>
      <div style="width: 100%; height: 200px">
        <WordCloud
          chartId="chart2"
          :wordList="list2"
          shape="diamond"
        ></WordCloud>
      </div>
      <div
        class="ant-divider ant-divider-horizontal ant-divider-with-text ant-divider-with-text-left"
        role="separator"
      >
        <span class="ant-divider-inner-text">地点</span>
      </div>
      <div style="width: 100%; height: 200px">
        <WordCloud
          chartId="chart3"
          :wordList="list3"
          shape="triangle-forward"
        ></WordCloud>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

let $router = useRouter()

let top = reactive([
  {
    id: 1,
    label: '中国古代建筑史',
    btn: '图书',
  },
  {
    id: 2,
    label: '中国建筑艺术史',
    btn: '图书',
  },
  {
    id: 3,
    label: '中国古代建筑技术史',
    btn: '图书',
  },
  {
    id: 4,
    label: '园林建筑学',
    btn: '图书',
  },
  {
    id: 5,
    label: '中国现代建筑史',
    btn: '图书',
  },
  {
    id: 6,
    label: '中国建筑史论',
    btn: '图书',
  },
  {
    id: 7,
    label: '古建筑常识',
    btn: '图书',
  },
  {
    id: 8,
    label: '中国建筑史大观',
    btn: '图书',
  },
  {
    id: 9,
    label: '中国现代建筑100年',
    btn: '图书',
  },
  {
    id: 10,
    label: '中国古代建筑技艺史',
    btn: '图书',
  },
]) as { id: number; label: string; btn: string }[]
let list = reactive([
  { value: 67, name: '设计依据' },
  { value: 98, name: '环境心理学' },
  { value: 97, name: '建筑文脉' },
  { value: 100, name: '路基工程' },
  { value: 37, name: '施工图' },
  { value: 83, name: '建筑功能' },
  { value: 60, name: '园林道路' },
  { value: 42, name: '无障碍设计' },
  { value: 96, name: '园林规划说明' },
  { value: 54, name: '支撑垫石' },
  { value: 33, name: '模式语言' },
  { value: 84, name: '踏脚石' },
  { value: 86, name: '建筑主体' },
  { value: 43, name: '空间构图' },
  { value: 80, name: '抗震级别' },
  { value: 89, name: '建筑电气' },
  { value: 76, name: '室内装修' },
  { value: 63, name: '环境艺术' },
  { value: 28, name: '水刷石' },
  { value: 49, name: '建筑概况' },
]) as { value: number; name: string }[]
let list2 = reactive([
  { value: 67, name: '贝聿铭' },
  { value: 98, name: '张雷' },
  { value: 97, name: '林徽因' },
  { value: 100, name: '华黎' },
  { value: 37, name: '朱锫' },
  { value: 83, name: '刘家琨' },
  { value: 60, name: '梁思成' },
  { value: 42, name: '王澍' },
  { value: 96, name: '庄俊' },
  { value: 54, name: '童寯' },
  { value: 33, name: '杨廷宝' },
  { value: 84, name: '王钧' },
  { value: 86, name: '张轲' },
  { value: 43, name: '张永和' },
  { value: 80, name: '刘敦桢' },
]) as { value: number; name: string }[]
let list3 = reactive([
  { value: 67, name: '北京' },
  { value: 98, name: '上海' },
  { value: 97, name: '广州' },
  { value: 100, name: '深圳' },
  { value: 37, name: '合肥' },
  { value: 83, name: '河南' },
  { value: 60, name: '杭州' },
  { value: 42, name: '西安' },
  { value: 96, name: '玉林' },
  { value: 54, name: '云南' },
  { value: 33, name: '宁波' },
  { value: 84, name: '温州' },
  { value: 86, name: '天津' },
  { value: 43, name: '福建' },
  { value: 80, name: '三亚' },
  { value: 89, name: '沈阳' },
]) as { value: number; name: string }[]

const readerBtn = (item: any) => {
  $router.push({ path: '/reader', query: { readerInfo: item.label } })
}
</script>

<style scoped lang="scss">
.bookRight {
  .right_header {
    font-size: 22px;
    background-color: #f9f9f7;
    padding: 22px 30px;
    border-top: 3px solid #aa381e;
  }
  .range_con___1HmdN {
    border: 1px solid #f0f0f0;
    border-top: none;
    flex: 1 1;
    a {
      color: #aa381e;
      text-decoration: none;
      background-color: transparent;
      outline: none;
      cursor: pointer;
      transition: color 0.3s;
      -webkit-text-decoration-skip: objects;
      .reco_item___3Mhd1 {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 12px 24px;
        .reco_icon___K1g44 {
          width: 25px;
          height: 25px;
          border-radius: 15px;
          font-size: 16px;
          text-align: center;
          background-color: #ccc;
          color: #f9f9f7;
          line-height: 25px;
        }
        .reco_info___2i_di {
          color: #666;
          margin: 0 12px;
          flex: 1 1;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 17px;
        }
        .type_icon___ROb5U {
          background-color: #aa381e;
          color: #f9f9f7;
          font-size: 18px;
          line-height: 27px;
          padding: 1px 6px;
          border-radius: 4px;
        }
      }
    }
    .ant-divider-horizontal.ant-divider-with-text {
      display: flex;
      align-items: center;
      margin: 16px 0;
      color: rgba(0, 0, 0, 0.85);
      font-weight: 500;
      font-size: 16px;
      white-space: nowrap;
      text-align: center;
      border-top: 0;
      border-top-color: rgba(0, 0, 0, 0.06);
    }
    .ant-divider-horizontal {
      display: flex;
      clear: both;
      width: 100%;
      min-width: 100%;
      margin: 24px 0;
    }
    .ant-divider {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      color: rgba(0, 0, 0, 0.85);
      font-size: 14px;
      font-variant: tabular-nums;
      line-height: 1.5715;
      list-style: none;
      font-feature-settings: 'tnum', 'tnum';
      border-top: 1px solid rgba(0, 0, 0, 0.06);
    }
    .ant-divider-horizontal.ant-divider-with-text-left:before {
      width: 5%;
    }
    .ant-divider-horizontal.ant-divider-with-text:before {
      position: relative;
      width: 5%;
      border-top: 1px solid transparent;
      border-top-color: inherit;
      border-bottom: 0;
      transform: translateY(50%);
      content: '';
    }
    .ant-divider-inner-text {
      display: inline-block;
      padding: 0 1em;
      font-size: 22px;
    }
    .ant-divider-horizontal.ant-divider-with-text-left:after {
      width: 95%;
    }
    .ant-divider-horizontal.ant-divider-with-text:after {
      position: relative;
      width: 95%;
      border-top: 1px solid transparent;
      border-top-color: inherit;
      border-bottom: 0;
      transform: translateY(50%);
      content: '';
    }
  }
  .range_con___1HmdN a:nth-child(1) {
    .reco_icon___K1g44 {
      background-color: rgb(223, 19, 19);
    }
  }
  .range_con___1HmdN a:nth-child(2) {
    .reco_icon___K1g44 {
      background-color: rgb(245, 143, 43);
    }
  }
  .range_con___1HmdN a:nth-child(3) {
    .reco_icon___K1g44 {
      background-color: rgb(245, 205, 43);
    }
  }
}
</style>
