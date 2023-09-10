<template>
  <div class="bgimg">
    <div class="retrieval">
      <!-- 搜索 -->
      <Search></Search>
      <!-- 卡片 -->
      <Card title="数据资产披露">
        <p>在建数据库数量&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10</p>
        <p>建成数据库数量&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2</p>
        <p>PDF书籍总数量 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10,419</p>
        <p>PDF书籍总页数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p>OCR识别总字数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4,081,811</p>
        <p>PDF书籍总页数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p>OCR识别总字数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4,081,811</p>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import Search from './search/index.vue'
</script>

<style scoped lang="scss">
.bgimg {
  margin-top: -200px;
  background-image: url('../../assets/images/bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  .retrieval {
    height: 120vh;
    padding-top: 260px;
    .el-card {
      width: 320px;
      margin-top: -50px;
      margin-left: 1480px;
      box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.4);
      color: #9b6654;
      font-size: 16px;
      .el-card__body {
        p {
          padding-top: 20px;
          font-size: 14px;
          color: rgba(0, 0, 0, 0.45);
        }
      }
    }
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .text {
      font-size: 14px;
    }

    .item {
      margin-bottom: 18px;
    }

    .box-card {
      width: 320px;
    }
  }
}
</style>
