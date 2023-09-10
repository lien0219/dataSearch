<template>
  <div class="reader">
    <div class="header___2LNJ3">
      <div class="info___3m0-y">
        <div class="name___29z1R">《晏子春秋（晏子）》</div>
        <div class="author___2Xy4C">晏嬰 撰</div>
      </div>
      <div class="operate___3IlX0">
        <div class="ant-radio-group ant-radio-group-outline">
          <label @click="showContent(1)" class="ant-radio-button-wrapper">
            <span class="ant-radio-button">
              <input type="radio" class="ant-radio-button-input" value="pdf" />
              <span class="ant-radio-button-inner"></span>
            </span>
            <span>图像阅读</span>
          </label>
          <label @click="showContent(2)" class="ant-radio-button-wrapper">
            <span class="ant-radio-button">
              <input type="radio" class="ant-radio-button-input" value="text" />
              <span class="ant-radio-button-inner"></span>
            </span>
            <span>文本阅读</span>
          </label>
          <label
            @click="showContent(3)"
            class="ant-radio-button-wrapper ant-radio-button-wrapper-checked"
          >
            <span class="ant-radio-button ant-radio-button-checked">
              <input type="radio" class="ant-radio-button-input" value="both" />
              <span class="ant-radio-button-inner"></span>
            </span>
            <span>图文对照</span>
          </label>
        </div>
      </div>
    </div>
    <div class="content___2b8Xw">
      <Tabs></Tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'
import Tabs from '@/views/reader/tabs/index.vue'

const activeContent = ref(1)
const showContent = (contentNumber: number) => {
  activeContent.value = contentNumber
}
provide('activeContent', activeContent)
</script>

<style scoped lang="scss">
.reader {
  height: 1100px;
  margin-top: 60px;
  padding: 0 5%;
  background-color: #edece8;
  border: 1px solid red;
  .header___2LNJ3 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 24px;
    line-height: 32px;
    background-color: #edece8;
    .info___3m0-y {
      display: flex;
      .name___29z1R {
        font-size: 20px;
        font-weight: 500;
        margin-right: 16px;
      }
      .author___2Xy4C {
        color: rgba(0, 0, 0, 0.45);
        font-size: 20px;
      }
    }
    .operate___3IlX0 {
      .ant-radio-group {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: rgba(0, 0, 0, 0.85);
        font-size: 14px;
        font-variant: tabular-nums;
        line-height: 50px;
        list-style: none;
        font-feature-settings: 'tnum', 'tnum';
        display: inline-block;
        font-size: 0;
        .ant-radio-button-wrapper {
          margin-left: 24px;
          color: rgba(0, 0, 0, 0.45) !important;
          position: relative;
          display: inline-block;
          height: 45px;
          margin: 0 15px;
          padding: 0 20px;
          font-size: 18px;
          line-height: 45px;
          background: #fff;
          border-color: #d9d9d9;
          border-style: solid;
          border-width: 1.02px 1px 1px 0;
          cursor: pointer;
          transition:
            color 0.3s,
            background 0.3s,
            border-color 0.3s,
            box-shadow 0.3s;
          .ant-radio-button {
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            width: 100%;
            height: 100%;
            .ant-radio-button-input {
              width: 0;
              height: 0;
              opacity: 0;
              pointer-events: none;
              box-sizing: border-box;
              padding: 0;
              touch-action: manipulation;
              overflow: visible;
            }
            .ant-radio-button-inner {
            }
          }
          span {
          }
        }
        .ant-radio-button-wrapper:focus-within {
          box-shadow: 0 0 0 3px rgba(172, 48, 20, 0.12);
        }
        .ant-radio-button-wrapper {
          .ant-radio-button {
            .ant-radio-button-input {
            }
            .ant-radio-button-inner {
            }
          }
          span {
          }
        }
        .ant-radio-button-wrapper {
          .ant-radio-button {
            .ant-radio-button-input {
            }
            .ant-radio-button-inner {
            }
          }
          .ant-radio-button-checked {
          }
          span {
          }
        }
        .ant-radio-button-wrapper-checked {
        }
      }
      .ant-radio-group-outline {
      }
    }
  }
  .content___2b8Xw {
    height: 1000px;
    border: 1px solid black;
  }
}
</style>
