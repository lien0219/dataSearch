<template>
  <div class="top_librasry">
    <div class="library_search">
      <div class="searchConent">
        <div class="title">{{ $route.query.pattern }}</div>
        <Search></Search>
      </div>
    </div>
    <div class="library_content">
      <div class="contentTitle">
        <div class="bef___21Ulr"></div>
        分类浏览
      </div>
      <div class="views">
        <div class="item___3JMkI viewsItem___1I2vu">
          <div class="viewsContent___cZh3i">散文</div>
        </div>
        <div class="item___3JMkI viewsItem___1I2vu">
          <div class="viewsContent___cZh3i">诗歌</div>
        </div>
        <div class="item___3JMkI viewsItem___1I2vu">
          <div class="viewsContent___cZh3i">小说</div>
        </div>
        <div class="item___3JMkI viewsItem___1I2vu">
          <div class="viewsContent___cZh3i">戏剧</div>
        </div>
        <div class="item___3JMkI viewsItem___1I2vu">
          <div class="viewsContent___cZh3i">文学研究</div>
        </div>
        <div class="item___3JMkI viewsItem___1I2vu">
          <div class="viewsContent___cZh3i">汉译文学</div>
        </div>
      </div>
      <div class="contentTitle">
        <div class="bef___21Ulr"></div>
        新书上架
      </div>
      <div class="news___2Xij">
        <div class="item___3JMkI">
          <img
            class="newsImage___3orOw"
            src="https://bookcover.yuewen.com/qdbimg/349573/1024905854/180"
            width="120"
            height="160"
          />
          <div class="bookName___3wkcg">了不起的盖茨比</div>
          <div class="bookAuthor___1I9xP">菲茨杰拉德</div>
        </div>
        <div class="item___3JMkI">
          <img
            class="newsImage___3orOw"
            src="https://bookcover.yuewen.com/qdbimg/349573/1024905854/180"
            width="120"
            height="160"
          />
          <div class="bookName___3wkcg">了不起的盖茨比</div>
          <div class="bookAuthor___1I9xP">菲茨杰拉德</div>
        </div>
        <div class="item___3JMkI">
          <img
            class="newsImage___3orOw"
            src="https://bookcover.yuewen.com/qdbimg/349573/1024905854/180"
            width="120"
            height="160"
          />
          <div class="bookName___3wkcg">了不起的盖茨比</div>
          <div class="bookAuthor___1I9xP">菲茨杰拉德</div>
        </div>
        <div class="item___3JMkI">
          <img
            class="newsImage___3orOw"
            src="https://bookcover.yuewen.com/qdbimg/349573/1024905854/180"
            width="120"
            height="160"
          />
          <div class="bookName___3wkcg">了不起的盖茨比</div>
          <div class="bookAuthor___1I9xP">菲茨杰拉德</div>
        </div>
        <div class="item___3JMkI">
          <img
            class="newsImage___3orOw"
            src="https://bookcover.yuewen.com/qdbimg/349573/1024905854/180"
            width="120"
            height="160"
          />
          <div class="bookName___3wkcg">了不起的盖茨比</div>
          <div class="bookAuthor___1I9xP">菲茨杰拉德</div>
        </div>
        <div class="item___3JMkI">
          <img
            class="newsImage___3orOw"
            src="https://bookcover.yuewen.com/qdbimg/349573/1024905854/180"
            width="120"
            height="160"
          />
          <div class="bookName___3wkcg">了不起的盖茨比</div>
          <div class="bookAuthor___1I9xP">菲茨杰拉德</div>
        </div>
        <div class="item___3JMkI">
          <img
            class="newsImage___3orOw"
            src="https://bookcover.yuewen.com/qdbimg/349573/1024905854/180"
            width="120"
            height="160"
          />
          <div class="bookName___3wkcg">了不起的盖茨比</div>
          <div class="bookAuthor___1I9xP">菲茨杰拉德</div>
        </div>
      </div>
      <div class="contentTitle">
        <div class="bef___21Ulr"></div>
        教育大家
      </div>
      <div class="master___zydDk">
        <div class="swiper_container___1gtpc">
          <div class="swiper-container-initialized">
            <swiper @swiper="onSwiper" :slides-per-view="4">
              <swiper-slide>
                <router-link
                  class="router-link-active"
                  :to="{
                    path: '/authorLibrary/detail',
                    query: { id: '梁思成' },
                  }"
                >
                  <div class="slide_wrapper_4___1Uzoe">
                    <div class="content_wrapper_4___2EvI-">
                      <img src="../../assets/images/icon.png" alt="" />
                      <span class="author_name">梁思成</span>
                      <span class="author_year">1889-2009</span>
                      <span class="author_info">
                        提出“中国古典园林是中国艺术的瑰宝”
                      </span>
                    </div>
                  </div>
                </router-link>
              </swiper-slide>
              <swiper-slide>
                <router-link
                  class="router-link-active"
                  :to="{
                    path: '/authorLibrary/detail',
                    query: { id: '梁思成' },
                  }"
                >
                  <div class="slide_wrapper_4___1Uzoe">
                    <div class="content_wrapper_4___2EvI-">
                      <img src="../../assets/images/icon.png" alt="" />
                      <span class="author_name">梁思成</span>
                      <span class="author_year">1889-2009</span>
                      <span class="author_info">
                        提出“中国古典园林是中国艺术的瑰宝”
                      </span>
                    </div>
                  </div>
                </router-link>
              </swiper-slide>
              <swiper-slide>
                <router-link
                  class="router-link-active"
                  :to="{
                    path: '/authorLibrary/detail',
                    query: { id: '梁思成' },
                  }"
                >
                  <div class="slide_wrapper_4___1Uzoe">
                    <div class="content_wrapper_4___2EvI-">
                      <img src="../../assets/images/icon.png" alt="" />
                      <span class="author_name">梁思成</span>
                      <span class="author_year">1889-2009</span>
                      <span class="author_info">
                        提出“中国古典园林是中国艺术的瑰宝”
                      </span>
                    </div>
                  </div>
                </router-link>
              </swiper-slide>
              <swiper-slide>
                <router-link
                  class="router-link-active"
                  :to="{
                    path: '/authorLibrary/detail',
                    query: { id: '梁思成' },
                  }"
                >
                  <div class="slide_wrapper_4___1Uzoe">
                    <div class="content_wrapper_4___2EvI-">
                      <img src="../../assets/images/icon.png" alt="" />
                      <span class="author_name">梁思成</span>
                      <span class="author_year">1889-2009</span>
                      <span class="author_info">
                        提出“中国古典园林是中国艺术的瑰宝”
                      </span>
                    </div>
                  </div>
                </router-link>
              </swiper-slide>
              <swiper-slide>
                <router-link
                  class="router-link-active"
                  :to="{
                    path: '/authorLibrary/detail',
                    query: { id: '梁思成' },
                  }"
                >
                  <div class="slide_wrapper_4___1Uzoe">
                    <div class="content_wrapper_4___2EvI-">
                      <img src="../../assets/images/icon.png" alt="" />
                      <span class="author_name">梁思成</span>
                      <span class="author_year">1889-2009</span>
                      <span class="author_info">
                        提出“中国古典园林是中国艺术的瑰宝”
                      </span>
                    </div>
                  </div>
                </router-link>
              </swiper-slide>
              <swiper-slide>
                <router-link
                  class="router-link-active"
                  :to="{
                    path: '/authorLibrary/detail',
                    query: { id: '梁思成' },
                  }"
                >
                  <div class="slide_wrapper_4___1Uzoe">
                    <div class="content_wrapper_4___2EvI-">
                      <img src="../../assets/images/icon.png" alt="" />
                      <span class="author_name">梁思成</span>
                      <span class="author_year">1889-2009</span>
                      <span class="author_info">
                        提出“中国古典园林是中国艺术的瑰宝”
                      </span>
                    </div>
                  </div>
                </router-link>
              </swiper-slide>
              <swiper-slide>
                <router-link
                  class="router-link-active"
                  :to="{
                    path: '/authorLibrary/detail',
                    query: { id: '梁思成' },
                  }"
                >
                  <div class="slide_wrapper_4___1Uzoe">
                    <div class="content_wrapper_4___2EvI-">
                      <img src="../../assets/images/icon.png" alt="" />
                      <span class="author_name">梁思成</span>
                      <span class="author_year">1889-2009</span>
                      <span class="author_info">
                        提出“中国古典园林是中国艺术的瑰宝”
                      </span>
                    </div>
                  </div>
                </router-link>
              </swiper-slide>
              <swiper-slide>
                <router-link
                  class="router-link-active"
                  :to="{
                    path: '/authorLibrary/detail',
                    query: { id: '梁思成' },
                  }"
                >
                  <div class="slide_wrapper_4___1Uzoe">
                    <div class="content_wrapper_4___2EvI-">
                      <img src="../../assets/images/icon.png" alt="" />
                      <span class="author_name">梁思成</span>
                      <span class="author_year">1889-2009</span>
                      <span class="author_info">
                        提出“中国古典园林是中国艺术的瑰宝”
                      </span>
                    </div>
                  </div>
                </router-link>
              </swiper-slide>
              <swiper-slide>
                <router-link
                  class="router-link-active"
                  :to="{
                    path: '/authorLibrary/detail',
                    query: { id: '梁思成' },
                  }"
                >
                  <div class="slide_wrapper_4___1Uzoe">
                    <div class="content_wrapper_4___2EvI-">
                      <img src="../../assets/images/icon.png" alt="" />
                      <span class="author_name">梁思成</span>
                      <span class="author_year">1889-2009</span>
                      <span class="author_info">
                        提出“中国古典园林是中国艺术的瑰宝”
                      </span>
                    </div>
                  </div>
                </router-link>
              </swiper-slide>
              <swiper-slide>
                <router-link
                  class="router-link-active"
                  :to="{
                    path: '/authorLibrary/detail',
                    query: { id: '梁思成' },
                  }"
                >
                  <div class="slide_wrapper_4___1Uzoe">
                    <div class="content_wrapper_4___2EvI-">
                      <img src="../../assets/images/icon.png" alt="" />
                      <span class="author_name">梁思成</span>
                      <span class="author_year">1889-2009</span>
                      <span class="author_info">
                        提出“中国古典园林是中国艺术的瑰宝”
                      </span>
                    </div>
                  </div>
                </router-link>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRaw } from 'vue'
import { useRoute } from 'vue-router'
import Search from '@/views/search/index.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

let $route = useRoute()

let swiperNew: any
const onSwiper = (swiper: any) => {
  swiperNew = toRaw(swiper)
}
</script>

<style scoped lang="scss">
.top_librasry {
  width: 100%;
  margin-top: 60px;
  background-color: #fefefe;
  .library_search {
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url('../../assets/images/item/bg.png') no-repeat 50%;
    background-size: cover;
    .searchConent {
      .title {
        font-size: 36px;
        font-weight: 700;
        height: 42px;
        line-height: 42px;
        margin-bottom: 20px;
        text-shadow: 1px 1px #989797;
        font-weight: 400;
        width: 100%;
        text-align: center;
      }
    }
  }
  .library_content {
    width: 80%;
    margin: 20px auto 0;
    .contentTitle {
      padding: 12px 0;
      font-size: 21px;
      display: flex;
      align-items: center;
      .bef___21Ulr {
        display: inline-block;
        width: 5px;
        height: 30px;
        margin-right: 8px;
        background-color: #aa381e;
        font-size: 21px;
      }
    }
    .views {
      display: flex;
      grid-gap: 32px;
      gap: 32px;
      font-size: 14px;
      // margin-right: 20px;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-start;
      margin-top: 10px;
      margin-bottom: 10px;
      .item___3JMkI {
        flex-basis: 8%;
        padding: 10px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        .viewsContent___cZh3i {
          width: 90%;
          height: 40px;
          line-height: 40px;
          text-align: center;
          background-color: hsla(0, 0%, 93.3%, 0.9333333333333333);
          border-radius: 8px;
        }
      }
    }
    .news___2Xij {
      display: flex;
      grid-gap: 2%;
      gap: 2%;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-start;
      .item___3JMkI {
        flex-basis: 15%;
        padding: 10px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        .newsImage___3orOw {
          border-radius: 3px;
          box-shadow: 6px 1px #b0b0b0;
        }
        .bookName___3wkcg {
          font-size: 20px;
          height: 21px;
          line-height: 21px;
          margin: 8px 0;
        }
        .bookAuthor___1I9xP {
          text-align: center;
          height: 14px;
          line-height: 16px;
          font-size: 16px;
        }
      }
    }
    .master___zydDk {
      margin-top: 30px;
      margin-bottom: 150px;
      display: flex;
      grid-gap: 2%;
      gap: 2%;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-start;
      .swiper_container___1gtpc {
        position: relative;
        width: 87%;
        margin: 24px auto;
        .swiper-container-initialized {
          touch-action: pan-y;
          margin-left: auto;
          margin-right: auto;
          position: relative;
          overflow: hidden;
          list-style: none;
          padding: 0;
          z-index: 1;
          padding-bottom: 10px;
          .swiper {
            position: relative;
            height: 100%;
            z-index: 1;
            display: flex;
            transition-property: transform;
            box-sizing: content-box;
            width: 890px;
            .swiper-slide {
              width: 185px;
              flex-shrink: 0;
              position: relative;
              transition-property: transform;
              cursor: pointer;
              .slide_wrapper_4___1Uzoe {
                width: 180px;
                height: 260px;
                display: flex;
                align-items: flex-end;
                margin: auto;
                .content_wrapper_4___2EvI- {
                  height: 230px;
                  position: relative;
                  padding: 30px 20px 20px;
                  background-color: #fff;
                  border-radius: 6px;
                  box-shadow:
                    0 1px 2px -2px #f5f5f5,
                    0 2px 17px #f5f5f5,
                    0 2px 8px 2px #dbd4ce;
                  text-align: center;
                  img {
                    width: 60px;
                    height: 60px;
                    position: absolute;
                    left: calc(50% - 30px);
                    top: -30px;
                    border-radius: 50%;
                  }
                  .author_name {
                    font-size: 16px;
                    font-weight: 700;
                    margin-top: 8px;
                    display: block;
                    color: #852311;
                  }
                  .author_year {
                    margin: 12px 0 24px;
                    text-align: center;
                    display: block;
                    color: #852311;
                    font-size: 16px;
                  }
                  .author_info {
                    font-size: 12px;
                    color: #999;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
.router-link-active {
  text-decoration: none;
}
</style>
