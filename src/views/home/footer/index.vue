<template>
  <div class="footer_flex">
    <div class="column">
      <div class="column_container">
        <div class="row">
          <svg-icon name="logo" height="0.16rem"></svg-icon>
        </div>
        <div class="row">
          Copyright 越读（浙江）数字科技有限公司 All Rights Reserevd.
        </div>
        <div class="row">工信部备案号：浙ICP备2021016853号-7</div>
        <div class="row">
          <img src="../../../assets/images/ercode-01.jpg" alt="" />
          <img src="../../../assets/images/ercode-02.jpg" alt="" />
        </div>
        <div class="row">
          <p>微信公众号</p>
          <p>官方客服</p>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="column_right">
        <div class="right_row">
          <h1 class="link">友情链接</h1>
          <a href="http://www.zj-yuesheng.com/">》浙江越生文化传媒集团&nbsp;</a>
          <a href="http://www.xilingbook.com/">》西冷印社出版社&nbsp;</a>
          <a href="http://www.hep.com.cn/">》高等教育出版社&nbsp;</a>
          <a href="https://zjjy.zjcbcm.com/">》浙江教育出版社</a>
        </div>
        <div class="right_row">
          <h1 class="about">关于我们</h1>
          <ul>
            <li>公司地址：浙江省绍兴市越城区元城大厦</li>
            <li>公司邮箱：jdwxk@yuedukejizj.com</li>
            <li>数据库联系方式：(0575) 8805 0928 工作日 8：30 —— 17：00</li>
            <li>电子书联系方式：(0575) 8805 0928 工作日 8：30 —— 17：00</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.footer_flex {
  display: flex;
  background: rgb(170, 56, 30);
  .column {
    // height: $base-el-header-column-height;
    flex: 1;
    padding: 10px;
    .column_container {
      display: flex;
      flex-direction: column;
      color: rgba(255, 255, 255, 0.7);
      margin-left: 60px;
      font-size: 12px;
      .row {
        flex: 1;
        padding: 6px;
        svg {
          margin-left: -50px;
        }
      }
      .row img:nth-child(1) {
        width: 120px;
      }
      .row img:nth-child(2) {
        width: 120px;
        margin-left: 20px;
      }
      .row p {
        display: inline-block;
      }
      .row p:nth-child(1) {
        // float: left;
        margin-left: 20px;
      }
      .row p:nth-child(2) {
        // float: left;
        margin-left: 60px;
      }
    }
    .column_right {
      display: flex;
      flex-direction: column;
      color: rgba(255, 255, 255, 0.7);
      margin-top: 5px;
      .right_row {
        flex: 1;
        .link {
          width: 850px;
          font-size: 20px;
          border-bottom: 1px solid white;
          padding-bottom: 5px;
          margin-bottom: 10px;
        }
        a {
          color: rgba(255, 255, 255, 0.7);
          font-size: 12px;
          text-decoration: none;
        }
        a:hover {
          color: white;
        }
        .about {
          width: 850px;
          font-size: 20px;
          border-bottom: 1px solid white;
          padding-bottom: 5px;
          margin-top: 14px;
        }
        ul li {
          // font-size: 0.06rem;
          padding-top: 15px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
