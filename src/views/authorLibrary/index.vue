<template>
  <div class="authorLibrary">
    <!-- 热门作者 -->
    <div class="left-col">
      <PopularAuthors></PopularAuthors>
    </div>
    <!-- 检索 -->
    <div class="right-col">
      <div class="content_search">
        <!-- 搜索 -->
        <div class="search_result">
          <span>结果中搜索:</span>
          <el-dropdown>
            <el-button :autofocus="true">
              <p>姓名</p>
              <el-icon><ArrowDown /></el-icon>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>暂无数据</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <el-input v-model="input" placeholder="请输入内容" />
          <el-button class="retrieval">检索</el-button>
          <el-button class="empty" @click="empty">清空</el-button>
        </div>
        <!-- 筛选 -->
        <div class="search_screen">
          <span>首字母筛选：</span>
          <button
            class="all"
            @click="showAll"
            :class="{ active: selectedLetter === '' }"
          >
            全部
          </button>
          <button
            class="letter"
            v-for="(letter, index) in letters"
            :key="index"
            @click="fitterLetter(letter)"
            :class="{ active: selectedLetter === letter }"
          >
            {{ letter }}
          </button>
        </div>
      </div>
      <ul class="ant_row">
        <li v-for="(item, index) in filteredNames" :key="index">
          <router-link
            class="router-link-active"
            :to="{ path: '/authorLibrary/detail', query: { id: item.title } }"
          >
            <div class="img_tit">
              <div class="mask">
                <img :src="item.img" alt="" />
                <div class="overlay">
                  <div class="auth_intro___3RiZv">
                    <p>简介:</p>
                    <span>代表作有北京清华大学校园规划</span>
                  </div>
                </div>
              </div>
              <p>{{ item.title }}</p>
            </div>
          </router-link>
        </li>
      </ul>
      <div class="swiper_container___1gtpc">
        <div class="swiper-container-initialized">
          <swiper @swiper="onSwiper" :slides-per-view="4">
            <swiper-slide>
              <router-link
                class="router-link-active"
                :to="{ path: '/authorLibrary/detail', query: { id: '梁思成' } }"
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
                :to="{ path: '/authorLibrary/detail', query: { id: '梁思成' } }"
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
                :to="{ path: '/authorLibrary/detail', query: { id: '梁思成' } }"
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
                :to="{ path: '/authorLibrary/detail', query: { id: '梁思成' } }"
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
                :to="{ path: '/authorLibrary/detail', query: { id: '梁思成' } }"
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
                :to="{ path: '/authorLibrary/detail', query: { id: '梁思成' } }"
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
                :to="{ path: '/authorLibrary/detail', query: { id: '梁思成' } }"
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
                :to="{ path: '/authorLibrary/detail', query: { id: '梁思成' } }"
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
                :to="{ path: '/authorLibrary/detail', query: { id: '梁思成' } }"
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
                :to="{ path: '/authorLibrary/detail', query: { id: '梁思成' } }"
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
</template>

<script setup lang="ts">
import { ref, computed, toRaw, Ref } from 'vue'
import PopularAuthors from '@/views/authorLibrary/popularAuthors/index.vue'
import img from '../../assets/images/people.jpg'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

let swiperNew: any
const onSwiper = (swiper: any) => {
  swiperNew = toRaw(swiper)
}

const input = ref<string>('')
const selectedLetter = ref<string>('')
const filteredNames = computed(() => {
  if (selectedLetter.value === '') {
    return items.value
  } else {
    return items.value.filter((item) => item.id === selectedLetter.value)
  }
})
const letters = ref([
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]) as Ref<string[]>
const items = ref([
  { img: img, title: '张廷浩', id: 'Z' },
  { img: img, title: '张廷浩', id: 'Z' },
  { img: img, title: '鲁迅', id: 'L' },
  { img: img, title: '王羲之', id: 'W' },
  { img: img, title: '茅盾', id: 'M' },
  { img: img, title: '张爱玲', id: 'Z' },
]) as Ref<{ img: string; title: string; id: string }[]>
const showAll = () => {
  selectedLetter.value = ''
}
const fitterLetter = (letter: string) => {
  selectedLetter.value = letter
}
// 清空
const empty = () => {
  input.value = ''
}
</script>

<style scoped lang="scss">
.authorLibrary {
  display: flex;
  width: 1700px;
  margin: auto;
  margin-top: 80px;
  .left-col {
    flex-basis: 22%;
    height: 100%;
  }
  .right-col {
    flex-basis: 78%;
    margin-left: 15px;
    height: 100%;
    .content_search {
      padding: 10px 0;
      background-color: #f9f9f8;
      .search_result {
        display: flex;
        align-items: center;
        padding: 10px 20px;
        span {
          // width: 93px;
          line-height: 34px;
          font-size: 14px;
          color: #b0b0b0;
          white-space: nowrap;
        }
        .el-input {
          float: left;
          width: 900px;
          margin-bottom: 0;
          text-align: inherit;
          height: 40px;
        }

        .el-dropdown {
          .el-button {
            width: 150px !important;
            height: 40px;
            p {
              margin-left: 55px;
              padding-right: 45px;
              color: #b0b0b0;
            }
          }
          .el-button:active {
            background-color: white;
            border-color: #b0b0b0;
            color: #b0b0b0;

            outline: 0px solid var(--el-button-outline-color);
            outline-offset: 0px;
          }
          .el-button:hover {
            background-color: white;
            border-color: #b0b0b0;
            color: #b0b0b0;

            outline: 0px solid var(--el-button-outline-color);
            outline-offset: 0px;
          }
          .el-button:focus {
            background-color: white;
            border-color: #b0b0b0;
            color: #b0b0b0;
            outline: 0px solid var(--el-button-outline-color);
            outline-offset: 0px;
          }
        }
        .retrieval {
          margin-left: 15px;
          color: #fff;
          border-color: #aa381e;
          background: #aa381e;
          text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
          box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
          border-radius: 0px;
          height: 40px;
        }

        .retrieval:hover {
          color: #fff;
          border-color: #b8593e;
          background: #b8593e;
        }
        .retrieval:focus {
          outline: 0px solid var(--el-button-outline-color);
          outline-offset: 0px;
        }
        .empty {
          color: black;
          height: 40px;
        }
        .empty:hover {
          border-color: #aa381e;
          color: #aa381e;
        }
        .empty:focus {
          border-color: #aa381e;
          color: #aa381e;
        }
      }
      .search_screen {
        display: flex;
        align-items: center;
        padding: 10px 20px;
        span {
          // width: 93px;
          line-height: 34px;
          font-size: 14px;
          color: #b0b0b0;
          white-space: nowrap;
        }
        .all {
          width: 58px;
          height: 42px;
          text-align: center;
          color: black;
          background-color: #f9f9f8;
          border: none;
          cursor: pointer;
          font-size: 18px;
        }
        .all:hover {
          color: #aa381e;
        }
        .all:active {
          color: #fff;
          background: #852311;
          border-color: #852311;
        }
        .all:focus {
          color: #fff;
          background: #852311;
          border-color: #852311;
          box-shadow: 0 0 0 3px rgba(170, 56, 30, 0.12);
        }
        .letter {
          width: 40px;
          height: 42px;
          text-align: center;
          background-color: #f9f9f8;
          border: none;
          margin-right: 4.3px;
          font-size: 18px;
        }
        .letter:hover {
          color: #aa381e;
        }
        .letter:active {
          color: #fff;
          background: #852311;
          border-color: #852311;
          box-shadow: 0 0 0 3px rgba(170, 56, 30, 0.12);
        }
        .letter:focus {
          color: #fff;
          background: #852311;
          border-color: #852311;
          box-shadow: 0 0 0 3px rgba(170, 56, 30, 0.12);
        }

        .active {
          background: #852311;
          color: #fff;
        }
      }
    }
    .ant_row {
      display: flex;
      flex-flow: row wrap;
      min-width: 0;
      li {
        display: block;
        flex: 0 0 25%;
        max-width: 25%;
        .img_tit {
          width: 285px;
          height: 320px;
          padding: 20px;
          border: 1px solid #ebebeb;
          color: #aa381e;
          text-decoration: none;
          background-color: transparent;
          outline: none;
          cursor: pointer;

          .mask {
            width: 100%;
            height: 250px;
            position: relative;
            overflow: hidden;
            margin-bottom: 20px;
            img {
              width: 100%;
              height: 250px;
              text-align: center;
              overflow: hidden;
              position: relative;
            }
            .overlay {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 250px;
              text-align: center;
              background-color: rgba(0, 0, 0, 0.6);
              opacity: 0;
              transform: translateY(100%);
              transition:
                opacity 0.3s,
                transform 0.3s;
              p {
                margin-top: 20px;
                margin-left: 10px;
                margin-bottom: 15px;
                text-align: left;
                color: #fff;
                font-size: 12px;
              }
              span {
                text-align: center;
                color: #fff;
                font-size: 12px;
              }
            }
          }
          .mask:hover .overlay {
            opacity: 1;
            transform: translateY(0);
          }
          p {
            font-size: 20px;
            font-weight: 700;
            line-height: 20px;
            margin-top: -10px;
            text-align: center;
          }
        }
        .img_tit:hover {
          border-color: #852311 !important;
        }
      }
    }
    .swiper_container___1gtpc {
      position: relative;
      width: 87%;
      margin: 24px auto;
      margin-bottom: 80px;
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
.router-link-active {
  text-decoration: none;
}
</style>
