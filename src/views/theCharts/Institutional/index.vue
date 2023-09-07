<template>
  <div class="instit_ready">
    <div class="ready_top">
      <div class="title_left">
        <Title title="机构阅读排行" />
      </div>
      <div class="much_right">更多&nbsp;》</div>
    </div>
    <div class="container_ready">
      <div class="item">
        <img src="../../../assets/images/323-600x200.jpg" alt="Image 1" />
        <div class="triangle">
          <span>1</span>
        </div>
      </div>
      <div class="item">
        <img src="../../../assets/images/323-600x200 (1).jpg" alt="Image 2" />
        <div class="triangle">
          <span>2</span>
        </div>
      </div>
      <div class="item">
        <img src="../../../assets/images/浙江大学.png" alt="Image 1" />
        <div class="triangle">
          <span>3</span>
        </div>
      </div>
      <div class="item">
        <img src="../../../assets/images/浙江传媒学院.png" alt="Image 2" />
        <div class="triangle">
          <span>4</span>
        </div>
      </div>
      <div class="item">
        <img src="../../../assets/images/绍兴文理学院.png" alt="Image 1" />
        <div class="triangle">
          <span>5</span>
        </div>
      </div>
      <div class="item">
        <img src="../../../assets/images/淮阴师范学院.png" alt="Image 2" />
        <div class="triangle">
          <span>6</span>
        </div>
      </div>
      <div class="item">
        <img src="../../../assets/images/湖南科技学院.png" alt="Image 1" />
        <div class="triangle">
          <span>7</span>
        </div>
      </div>
      <div class="item">
        <img src="../../../assets/images/中国计量大学.jpg" alt="Image 2" />
        <div class="triangle">
          <span>8</span>
        </div>
      </div>
      <div class="item">
        <img src="../../../assets/images/金陵科技学院.png" alt="Image 1" />
        <div class="triangle">
          <span>9</span>
        </div>
      </div>
      <div class="item">
        <img src="../../../assets/images/浙江海洋学院.png" alt="Image 2" />
        <div class="triangle">
          <span>10</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.instit_ready {
  .ready_top {
    margin-top: 60px;
    .title_left {
      float: left;
      font-size: 22px;
      color: black;
      margin-top: 25px;
      margin-bottom: 65px;
    }
    .much_right {
      float: right;
      font-size: 14px;
      color: #c7cad0;
      cursor: pointer;
      margin-top: 28px;
      margin-right: -5px;
    }
    .much_right:hover {
      color: #4096ff;
    }
  }
  .container_ready {
    width: 1620px;
    display: flex;
    flex-wrap: wrap;
    margin: auto;
    .item {
      flex-basis: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      img {
        height: 100px;
        width: 320px;
        padding: 4px;
        margin-top: 16px;
        cursor: pointer;
      }
      .triangle {
        width: 0;
        height: 0;
        border-right: 28px solid transparent;
        border-top: 30px solid #df1313;
        position: absolute;
        left: 6px;
        top: 20px;
        span {
          position: absolute;
          top: 13px;
          left: -1px;
          transform: translate(4px, -42px);
          color: white;
          font-size: 16px;
        }
      }
    }
  }
  .container_ready .item:nth-child(2) {
    .triangle {
      width: 0;
      height: 0;
      border-right: 28px solid transparent;
      border-top: 30px solid #f58f2b;
      position: absolute;
      left: 6px;
      top: 20px;
      span {
        position: absolute;
        top: 13px;
        left: -1px;
        transform: translate(4px, -42px);
        color: white;
        font-size: 15px;
      }
    }
  }
  .container_ready .item:nth-child(3) {
    .triangle {
      width: 0;
      height: 0;
      border-right: 28px solid transparent;
      border-top: 30px solid #f5cd2b;
      position: absolute;
      left: 5.5px;
      top: 20px;
      span {
        position: absolute;
        top: 13px;
        left: -1px;
        transform: translate(4px, -42px);
        color: white;
        font-size: 15px;
      }
    }
  }
  .container_ready .item:nth-child(4) {
    .triangle {
      width: 0;
      height: 0;
      border-right: 28px solid transparent;
      border-top: 30px solid #aa381e;
      position: absolute;
      left: 6px;
      top: 20px;
      span {
        position: absolute;
        top: 13px;
        left: -1px;
        transform: translate(4px, -42px);
        color: white;
        font-size: 15px;
      }
    }
  }
  .container_ready .item:nth-child(5) {
    .triangle {
      width: 0;
      height: 0;
      border-right: 28px solid transparent;
      border-top: 30px solid #aa381e;
      position: absolute;
      left: 6px;
      top: 20px;
      span {
        position: absolute;
        top: 13px;
        left: -1px;
        transform: translate(4px, -42px);
        color: white;
        font-size: 15px;
      }
    }
  }
  .container_ready .item:nth-child(6) {
    .triangle {
      width: 0;
      height: 0;
      border-right: 28px solid transparent;
      border-top: 30px solid #aa381e;
      position: absolute;
      left: 6px;
      top: 20px;
      span {
        position: absolute;
        top: 13px;
        left: -1px;
        transform: translate(4px, -42px);
        color: white;
        font-size: 15px;
      }
    }
  }
  .container_ready .item:nth-child(7) {
    .triangle {
      width: 0;
      height: 0;
      border-right: 28px solid transparent;
      border-top: 30px solid #aa381e;
      position: absolute;
      left: 6px;
      top: 20px;
      span {
        position: absolute;
        top: 13px;
        left: -1px;
        transform: translate(4px, -42px);
        color: white;
        font-size: 15px;
      }
    }
  }
  .container_ready .item:nth-child(8) {
    .triangle {
      width: 0;
      height: 0;
      border-right: 28px solid transparent;
      border-top: 30px solid #aa381e;
      position: absolute;
      left: 6px;
      top: 20px;
      span {
        position: absolute;
        top: 13px;
        left: -1px;
        transform: translate(4px, -42px);
        color: white;
        font-size: 15px;
      }
    }
  }
  .container_ready .item:nth-child(9) {
    .triangle {
      width: 0;
      height: 0;
      border-right: 28px solid transparent;
      border-top: 30px solid #aa381e;
      position: absolute;
      left: 6px;
      top: 20px;
      span {
        position: absolute;
        top: 13px;
        left: -1px;
        transform: translate(4px, -42px);
        color: white;
        font-size: 15px;
      }
    }
  }
  .container_ready .item:nth-child(10) {
    .triangle {
      width: 0;
      height: 0;
      border-right: 28px solid transparent;
      border-top: 30px solid #aa381e;
      position: absolute;
      left: 6px;
      top: 20px;
      span {
        position: absolute;
        top: 14px;
        left: -5px;
        transform: translate(4px, -42px);
        color: white;
        font-size: 14px;
      }
    }
  }
}
</style>
