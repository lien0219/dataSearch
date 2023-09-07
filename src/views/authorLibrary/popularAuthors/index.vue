<template>
  <div class="popular_author">
    <span class="title_hot">热门作者</span>
    <div class="cart_container">
      <div class="item">
        <div class="cart_item_img">
          <img src="../../../assets/images/luxun.c1f67b4b.jpeg" alt="" />
        </div>
        <div class="cart_item_characters">
          <h5>鲁迅</h5>
          <p>现代文学奠基人、思想家</p>
        </div>
      </div>
      <div class="item">
        <div class="cart_item_img">
          <img src="../../../assets/images/guomoruo.81318266.png" alt="" />
        </div>
        <div class="cart_item_characters">
          <h5>郭沫若</h5>
          <p>著名诗人、美术家、文学家和革命家</p>
        </div>
      </div>
      <div class="item">
        <div class="cart_item_img">
          <img src="../../../assets/images/zhangailing.0b607c2d.jpeg" alt="" />
        </div>
        <div class="cart_item_characters">
          <h5>张爱玲</h5>
          <p>中国现代小说的代表人物，以爱情题材著称。</p>
        </div>
      </div>
      <div class="item">
        <div class="cart_item_img">
          <img src="../../../assets/images/maodun.41165678.jpeg" alt="" />
        </div>
        <div class="cart_item_characters">
          <h5>茅盾</h5>
          <p>新文化运动的代表作家，作品反映现实生活</p>
        </div>
      </div>
      <div class="item">
        <div class="cart_item_img">
          <img src="../../../assets/images/qianzhongshu.3a90bd40.jpeg" alt="" />
        </div>
        <div class="cart_item_characters">
          <h5>钱钟书</h5>
          <p>文学家、学者，代表作《围城》。</p>
        </div>
      </div>
      <div class="item">
        <div class="cart_item_img">
          <img src="../../../assets/images/hanhan.b9e3c4f0.jpeg" alt="" />
        </div>
        <div class="cart_item_characters">
          <h5>韩寒</h5>
          <p>网络作家、歌手、导演、演员、投资人，代表作《三重门》。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.popular_author {
  width: 100%;
  border: 1px solid rgb(228, 226, 226);
  margin-bottom: 20px;
  .title_hot {
    width: 100%;
    height: 65px;
    line-height: 65px;
    display: block;
    position: relative;
    // margin-bottom: 10px;
    color: black;
    padding-left: 25px;
    // padding-top: 12px;
    // padding-bottom: 15px;
    border-bottom: 1px solid rgb(228, 226, 226);
    border-top: 2px solid #aa381e;
    font-size: 22px;
    font-weight: 500;
  }
  .cart_container {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-top: -10px;

    .item {
      flex: 1;
      border-bottom: 1px solid rgb(228, 226, 226);
      padding-bottom: 10px;
      padding-top: 20px;
      padding-left: 10px;
      cursor: pointer;
      .cart_item_img {
        img {
          float: left;
          width: 130px;
          height: 165px;
          margin-right: 10px;
        }
      }
      .cart_item_characters {
        h5 {
          font-size: 14px;
          font-weight: 700;
          margin-top: 10px;
        }
        p {
          font-size: 14px;
          margin-top: 20px;
          color: rgba(0, 0, 0, 0.45);
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
    .item:hover {
      color: #aa381e;
      background-color: rgba(0, 0, 0, 0.02);
    }
  }
}
.cart_container .item:nth-child(6) {
  padding-bottom: 20px;
}
</style>
