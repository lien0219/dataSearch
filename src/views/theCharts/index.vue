<template>
  <div class="theCharts">
    <div class="theCharts_son son_flex">
      <!-- 资源热度 -->
      <div class="son_flex_coontainer">
        <div class="top_container">
          <div class="left">
            <Title title="资源热度总排行" />
          </div>
          <div class="right">
            <Btn @click="handleButtonClick">图书</Btn>
            <Btn>音频</Btn>
            <Btn>视频</Btn>
          </div>
        </div>
        <div class="bottom_container">
          <div class="bottom_child">
            <div class="one_child">
              <ul>
                <li>
                  <span>1</span>
                  <p>中国古代建筑史</p>
                </li>
                <li>
                  <span>2</span>
                  <p>中国建筑艺术史</p>
                </li>
                <li>
                  <span>3</span>
                  <p>中国古代建筑技术史</p>
                </li>
                <li>
                  <span>4</span>
                  <p>园林建筑学</p>
                </li>
                <li>
                  <span>5</span>
                  <p>中国现代建筑史</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="bottom_child">
            <ul>
              <li>
                <span>6</span>
                <p>中国建筑史论</p>
              </li>
              <li>
                <span>7</span>
                <p>古建筑常识</p>
              </li>
              <li>
                <span>8</span>
                <p>中国建筑史大观</p>
              </li>
              <li>
                <span>9</span>
                <p>中国现代建筑100年</p>
              </li>
              <li>
                <span>10</span>
                <p>中国古代建筑技艺史</p>
              </li>
            </ul>
          </div>
          <div class="bottom_child">
            <ul>
              <li>
                <span>11</span>
                <p>中国古代建筑史纲要</p>
              </li>
              <li>
                <span>12</span>
                <p>中国建筑艺术论丛</p>
              </li>
              <li>
                <span>13</span>
                <p>中国现代建筑设计研究</p>
              </li>
              <li>
                <span>14</span>
                <p>中国现代建筑设计研究</p>
              </li>
              <li>
                <span>15</span>
                <p>中国传统建筑风格</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 机构阅读 -->
      <div class="son_flex_coontainer">
        <Institutional></Institutional>
      </div>
    </div>
    <!-- 收藏排行 -->
    <div class="theCharts_son">
      <Collect></Collect>
    </div>
  </div>
</template>

<script setup lang="ts">
import Institutional from '@/views/theCharts/Institutional/index.vue'
import Collect from '@/views/theCharts/collect/index.vue'
const handleButtonClick = () => {
  console.log(11)
}
</script>

<style scoped lang="scss">
.theCharts {
  width: 1700px;
  margin: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 80px;
  .theCharts_son {
    flex: 1;
  }
  .son_flex {
    display: flex;
    flex-direction: column;
    .son_flex_coontainer {
      flex: 1;
      // height: 26vh;
      .top_container {
        margin-top: 33px;
        .left {
          float: left;
          font-size: 22px;
          color: black;
        }
        .right {
          float: right;
          .el-button {
            // font-size: 26px;
            width: 68px;
            height: 35px;
            margin-top: -2px;
            margin-left: 5px;
            border-radius: 2px;
          }
          .el-button:hover {
            background: white;
            color: #852311;
            border-color: #852311;
          }
          .el-button:focus {
            background-color: #852311 !important;
            color: white !important;
          }
        }
      }
      .bottom_container {
        display: flex;
        width: 100%;
        margin-top: 130px;
        // height: 78%;
        .bottom_child {
          flex: 1;
          .one_child {
            display: flex;
            align-items: center;
            ul {
              display: flex;
              flex-direction: column;
              margin-left: 30px;
              li {
                margin: 5px;
              }
            }
            ul li:nth-child(1) span {
              background: red;
            }
            ul li:nth-child(2) span {
              background-color: rgb(245, 143, 43) !important;
            }
            ul li:nth-child(3) span {
              background-color: rgb(245, 205, 43);
            }
          }
          ul {
            display: flex;
            flex-direction: column;
            margin-left: 30px;
            li {
              margin: 5px;
              cursor: pointer;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              line-height: 20px;
              span {
                float: left;
                width: 25px;
                height: 25px;
                line-height: 25px;
                text-align: center;
                background-color: rgb(155, 102, 84);
                color: white;
                margin-right: 6px;
                font-size: 14px;
              }
              p {
                font-size: 15px;
                color: #852311;
                display: inline-block;
                padding-top: 2px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
