<template>
  <div class="search_wrapper">
    <div class="ant-pro">
      <div class="mt-4">
        <el-input
          v-model="inputValue"
          placeholder="输入检索关键词"
          class="input-with-select"
          clearable
        >
          <template #append>
            <el-button :icon="Search" />
          </template>
          <template #prepend>
            <el-select
              v-model="select"
              placeholder="任意词"
              style="width: 115px"
            >
              <el-option label="任意词" value="1" />
              <el-option label="书名" value="2" />
              <el-option label="作者" value="3" />
              <el-option label="关键词" value="4" />
              <el-option label="全文" value="5" />
              <el-option label="出版社" value="6" />
            </el-select>
          </template>
        </el-input>
      </div>
    </div>
    <div class="ant-space">
      <div class="ant-space-item">
        <a class="search_more">重新检索</a>
      </div>
      <div class="ant-space-item">
        <a class="search_more">结果中检索</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

const inputValue = ref('')
const select = ref('')
</script>

<style scoped lang="scss">
.search_wrapper {
  height: 50px;
  display: flex;
  align-items: center;
  background-color: #aa381e;
  border-radius: 8px;
  padding: 0 20px 0 8px;
  box-shadow:
    0 1px 2px -2px rgba(0, 0, 0, 0.1607843137254902),
    0 3px 6px rgba(0, 0, 0, 0.12156862745098039),
    0 5px 12px 4px rgba(0, 0, 0, 0.09019607843137255);
  .ant-pro {
    .mt-4 {
      .el-input {
        ::v-deep .el-input-group__prepend {
          font-size: 14px;
          margin-right: 8px;
          border-radius: 8px;
        }
        ::v-deep .el-input__wrapper {
          width: 320px;
          border-radius: 3px;
          margin-right: 10px;
          font-size: 14px;
        }
        ::v-deep .el-input-group__append {
          .el-button {
            width: 48px;
            font-size: 30px;
            padding: 0px;
            background: #aa381e;
            border-radius: 0px;
            color: white;
          }
        }
      }
    }
  }
  .ant-space {
    display: flex;
    align-items: center;
    width: 200px;
    .ant-space-item {
      flex: 1;
      white-space: nowrap;
      margin-left: 6px;
      font-size: 16px;
      color: hsla(0, 0%, 100%, 0.8);
      cursor: pointer;
      text-align: center;
    }
    .ant-space-item :hover {
      color: white;
    }
  }
}
.el-select-dropdown__item.selected {
  color: black;
  background-color: #caada7;
}
</style>
