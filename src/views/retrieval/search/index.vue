<template>
  <div class="search">
    <div class="search_box">
      <el-input
        v-model="inputValue"
        placeholder="请输入你要检索的关键词"
        class="input-with-select"
        clearable
      >
        <template #prepend>
          <el-select v-model="select" placeholder="书名" style="width: 70px">
            <el-option label="责任人" value="1" />
            <el-option label="出版者" value="2" />
            <el-option label="任意词" value="3" />
          </el-select>
        </template>
        <template #append>
          <el-select
            v-model="select"
            filterable
            placeholder="请选择"
            style="width: 70px"
            class="select_el"
          >
            <el-option label="责任人" value="1" />
            <el-option label="出版者" value="2" />
            <el-option label="任意词" value="3" />
          </el-select>
        </template>
      </el-input>
      <el-button class="iconSearch" :icon="Search"></el-button>
      <el-popover width="34.5%" :visible="visible" placement="bottom-end">
        <div class="ant-popover-inner">
          <div class="ant-popover-inner-content">
            <!-- 表单 -->
            <el-form ref="form" :model="formdata" label-width="auto">
              <el-form-item label="文件类型：">
                <el-button
                  class="form_btn"
                  :class="{ active: index === activeIndex }"
                  v-for="(item, index) in btnList"
                  :key="item.id"
                  @click="allChange(index)"
                >
                  {{ item.tit }}
                </el-button>
              </el-form-item>
              <el-form-item label="书名：">
                <el-input
                  v-model="formdata.bookName"
                  placeholder="请输入"
                  clearable
                />
              </el-form-item>
              <el-form-item label="作者：">
                <el-input
                  v-model="formdata.author"
                  placeholder="请输入"
                  clearable
                />
              </el-form-item>
              <el-form-item label="出版者：">
                <el-input
                  v-model="formdata.publisher"
                  placeholder="请输入"
                  clearable
                />
              </el-form-item>
              <el-form-item label="关键字：">
                <el-input
                  v-model="formdata.keywords"
                  placeholder="请输入"
                  clearable
                />
              </el-form-item>
              <el-form-item label="全文：">
                <el-input
                  v-model="formdata.fullText"
                  placeholder="请输入"
                  clearable
                />
              </el-form-item>
              <el-form-item label="出版年份:">
                <div class="demo-date-picker">
                  <div class="block">
                    <el-date-picker
                      v-model="formdata.data"
                      type="daterange"
                      start-placeholder="请选择开始时间"
                      end-placeholder="请选择结束时间"
                      :default-time="defaultTime"
                    />
                  </div>
                </div>
              </el-form-item>
              <div class="sub_data">
                <el-button type="primary" @click="onSubmit">重置</el-button>
                <el-button>检索</el-button>
              </div>
            </el-form>
          </div>
        </div>
        <template #reference>
          <el-button class="heughtBtn" @click="visibleClick">
            {{ btnText }}
          </el-button>
        </template>
      </el-popover>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Search } from '@element-plus/icons-vue'
const inputValue = ref('')
const select = ref('')
const visible = ref<boolean>(false)
const btnText = ref<string>('高级检索')

const visibleClick = () => {
  visible.value = !visible.value
  btnText.value = visible.value ? '普通检索' : '高级检索'
}

const formdata = reactive({
  bookName: '',
  author: '',
  publisher: '',
  keywords: '',
  fullText: '',
  data: '',
})
let activeIndex = ref<number>(0)
const btnList = ref([
  {
    tit: '全部',
    id: 1,
  },
  {
    tit: '图书',
    id: 2,
  },
  {
    tit: '音频',
    id: 3,
  },
  {
    tit: '视频',
    id: 4,
  },
] as { tit: string; id: number }[])
const defaultTime = ref<[Date, Date]>([
  new Date(2000, 1, 1, 0, 0, 0),
  new Date(2000, 2, 1, 23, 59, 59),
])
const onSubmit = () => {
  formdata.bookName = ''
  formdata.author = ''
  formdata.publisher = ''
  formdata.keywords = ''
  formdata.fullText = ''
  formdata.data = ''
}
const allChange = (index: number) => {
  activeIndex.value = index
}
</script>

<style scoped lang="scss">
.search {
  width: 680px;
  background: #aa381e;
  height: 50px;
  margin-top: 170px;
  margin-left: 100px;
  padding-left: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  .search_box {
    width: 732px;
    height: 50px;
    line-height: 50px;
    .el-input {
      width: 500px;
    }
    .el-button {
      background-color: #aa381e;
      border: none;
    }

    .iconSearch {
      color: white;
      font-size: 30px;
    }

    .heughtBtn {
      width: 90px;
      color: #e2dfdf;
      font-size: 16px;
      margin-left: 5px;
    }

    .heughtBtn:hover {
      color: white;
    }
  }
}

.file_type {
  p {
    display: inline;
  }
}
::v-deep .el-input-group__prepend {
  margin-right: 10px;
  width: 150px;
}
::v-deep .el-input-group__append {
  margin-left: 10px;
  width: 150px;
}
::v-deep .el-input__wrapper {
  width: 600px;
}
.ant-popover-inner {
  background-color: #fff;
  background-clip: padding-box;
  border-radius: 2px;
  .ant-popover-inner-content {
    padding: 12px 16px;
    color: rgba(0, 0, 0, 0.85);
  }
}
::v-deep .el-form-item__label-wrap {
  width: 120px;
  text-align: center !important;
  background-color: #aa381e;
  margin-left: 0px !important;
}
::v-deep .el-form-item__label {
  color: white;
  padding: 0px !important;
  margin: auto;
  font-size: 14px;
}
.el-form-item {
  margin-bottom: 8px;
}
.form_btn {
  font-size: 15px;
  width: 58px;
  height: 34px;
  border: 1px solid #e2dfdf;
  background-color: #fff;
  cursor: pointer;
}
.form_btn:hover {
  color: #aa381e !important;
}
.form_btn:focus {
  color: #aa381e !important;
  border: 1px solid #aa381e;
  box-shadow: 0 0 8px rgba(211, 93, 93, 0.3);
}
.form_btn:focus-within {
  color: #aa381e !important;
  border: 1px solid #aa381e;
}
.form_btn.active {
  border: 1px solid #aa381e;
  color: #aa381e;
}
::v-deep .demo-date-picker {
  width: 100% !important;
}
::v-deep .el-range-input {
  font-size: 14px;
}
::v-deep .el-date-editor--daterange {
  width: 100% !important;
}
.sub_data {
  text-align: center;
  margin-bottom: 10px;
}
.sub_data .el-button:nth-child(1) {
  background-color: #fff;
  color: black;
  font-size: 14px;
  border: 1px solid #e2dfdf;
}
.sub_data .el-button:nth-child(1):hover {
  color: #aa381e;
  border: 1px solid #aa381e;
}
.sub_data .el-button:nth-child(2) {
  background-color: #aa381e;
  color: white;
  font-size: 14px;
}
.sub_data .el-button:nth-child(2):hover {
  color: #fff;
  background: #b8593e;
}
::v-deep .el-input__wrapper {
  border: 1px solid #e2dfdf;
}
::v-deep .el-input__wrapper:hover {
  box-shadow: 0 0 2px rgba(235, 40, 6, 0.5);
  border: 1px solid #aa381e;
}
::v-deep .el-input__wrapper.is-focus:active {
  box-shadow: 0 0 2px rgba(235, 40, 6, 0.5) !important;
  border: 1px solid #aa381e !important;
}
::v-deep .el-select {
  .el-input__wrapper {
    padding: 0px;
  }
}
</style>
