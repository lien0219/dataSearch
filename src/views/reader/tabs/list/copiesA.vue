<template>
  <div class="listA">
    <div
      class="reader_content___PdLul pdf_only___bIj3S"
      v-if="activeContent === 1"
    >
      <div class="pdf_con___35T-n">
        <img src="../../../../assets/book/1.png" />
      </div>
    </div>
    <div
      class="reader_content___PdLul pdf_only___bIj3S"
      v-if="activeContent === 2"
    >
      <button
        type="button"
        class="ant-btn ant-btn-default traditional_icon___Wnrmw"
        ant-click-animating-without-extra-node="false"
      >
        <img
          src="data:image/png;base64,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"
        />
      </button>
      <div class="text_con___1tLFE normal___UIvsJ">
        <div class="text_title___1w12Z">周易上經泰傳第一</div>
        <div class="text_info___GntMQ">王弼《注》</div>
        <div class="text_paragraph___1Lm-Y">
          <span class="text_explain___2LeMa">《彖》</span>
          曰：咸，感也。柔上而剛下，二氣感應以相與，
          <span class="text_mark___3y1SC">
            《象》曰：咸其股，亦不處也。志在隨人，所執下也。
          </span>
          是以亨也。止而說，故利貞也。男下女，取女吉也。是以亨利貞，取女吉也。天地感而萬物化生，二氣相與，乃化生也。聖人感人心而天下和平。觀其所感，而天地萬物之情可見矣。
        </div>
        <div class="text_paragraph___1Lm-Y">
          《彖》曰：咸，感也。柔上而剛下，二氣感應以相與，是以亨也。
          <span class="text_explain___2LeMa">止而說，故利貞也。</span>
          止而說，故利貞也。男下女，取女吉也。是以亨利貞，取女吉也。
        </div>
        <div class="text_paragraph___1Lm-Y">
          天地感而萬物化生，二氣相與，乃化生也。聖人感人心而天下和平。觀其所感，而天地萬物之情可見矣。天地萬物之情，見於所感也。凡感之爲道，不能感非類者也，故引取女以明同類之義也。同類而不相感應，以其各亢所處也，故女雖應男之物，必下之而後取女，乃吉也。
          <span class="text_mark___3y1SC">
            《象》曰：咸其股，亦不處也。志在隨人，所執下也。
          </span>
        </div>
        <div class="text_paragraph___1Lm-Y">
          觀其所感，而天地萬物之情可見矣。
          <span class="text_explain___2LeMa">天地萬物之情，見於所感也。</span>
          凡感之爲道，不能感非類者也，故引取女以明同類之義也。同類而不相感應，以其各亢所處也，故女雖應男之物，必下之而後取女，乃吉也。
        </div>
        <div class="text_paragraph___1Lm-Y">
          《凡感之爲道，不能感非類者也，故引取女以明同類之義也。同類而不相感應，以其各亢所處也，故女雖應男之物，必下之而後取女，乃吉也。
        </div>
      </div>
    </div>
    <div
      class="reader_content___PdLul pdf_only___bIj3S"
      v-if="activeContent === 3"
    >
      <button
        type="button"
        class="ant-btn ant-btn-default traditional_icon___Wnrmw btnic"
        ant-click-animating-without-extra-node="false"
      >
        <img
          src="data:image/png;base64,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"
          width="30"
          height="30"
        />
      </button>
      <div class="pdf_con">
        <img src="../../../../assets/book/1.png" />
      </div>
      <div class="text_con___1tLFE traditional___2AF5V">
        <div class="text_title___1w12Z">周易上經泰傳第一</div>
        <div class="text_info___GntMQ">王弼《注》</div>
        <div class="text_paragraph___1Lm-Y">
          <span class="text_explain___2LeMa">《彖》</span>
          曰：咸，感也。柔上而剛下，二氣感應以相與，
          <span class="text_mark___3y1SC">
            《象》曰：咸其股，亦不處也。志在隨人，所執下也。
          </span>
          是以亨也。止而說，故利貞也。男下女，取女吉也。是以亨利貞，取女吉也。天地感而萬物化生，二氣相與，乃化生也。聖人感人心而天下和平。觀其所感，而天地萬物之情可見矣。
        </div>
        <div class="text_paragraph___1Lm-Y">
          《彖》曰：咸，感也。柔上而剛下，二氣感應以相與，是以亨也。
          <span class="text_explain___2LeMa">止而說，故利貞也。</span>
          止而說，故利貞也。男下女，取女吉也。是以亨利貞，取女吉也。
        </div>
        <div class="text_paragraph___1Lm-Y">
          天地感而萬物化生，二氣相與，乃化生也。聖人感人心而天下和平。觀其所感，而天地萬物之情可見矣。天地萬物之情，見於所感也。凡感之爲道，不能感非類者也，故引取女以明同類之義也。同類而不相感應，以其各亢所處也，故女雖應男之物，必下之而後取女，乃吉也。
          <span class="text_mark___3y1SC">
            《象》曰：咸其股，亦不處也。志在隨人，所執下也。
          </span>
        </div>
        <div class="text_paragraph___1Lm-Y">
          觀其所感，而天地萬物之情可見矣。
          <span class="text_explain___2LeMa">天地萬物之情，見於所感也。</span>
          凡感之爲道，不能感非類者也，故引取女以明同類之義也。同類而不相感應，以其各亢所處也，故女雖應男之物，必下之而後取女，乃吉也。
        </div>
        <div class="text_paragraph___1Lm-Y">
          《凡感之爲道，不能感非類者也，故引取女以明同類之義也。同類而不相感應，以其各亢所處也，故女雖應男之物，必下之而後取女，乃吉也。
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const activeContent = inject('activeContent')
</script>

<style scoped lang="scss">
.listA {
  .reader_content___PdLul {
    display: inline-block;
    height: 840px;
    width: 100%;
    padding: 32px 48px;
    background-color: #f1f0eb;
    vertical-align: top;
    position: relative;
    border: 1px solid red;
    overflow-y: auto;
    .pdf_con___35T-n {
      background-color: #f3f2ec;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 750px;
        height: 750px;
      }
    }
  }
  .pdf_only___bIj3S {
  }
  .reader_content___PdLul {
    .ant-btn {
      img {
        vertical-align: middle;
        border-style: none;
        width: 40px;
        aspect-ratio: auto 40 / 40;
        height: 40px;
      }
      .ant-btn:active {
        color: #852311;
        border-color: #852311;
        background: #fff;
      }
      .ant-btn:focus,
      .ant-btn:hover {
        color: #b8593e;
        border-color: #b8593e;
        background: #fff;
      }
    }
    .ant-btn-default {
    }
    .traditional_icon___Wnrmw {
      position: absolute;
      right: 15px;
      top: 15px;
      padding: 0;
      width: 30px;
      height: 30px;
      cursor: pointer;
      border: none;
      background-color: transparent;
    }
    .text_con___1tLFE {
      width: 100%;
      padding: 24px;
      overflow: auto;
      display: inline-block;
      vertical-align: top;
      height: calc(100% - 24px);
      .text_title___1w12Z {
        font-size: 28px;
        line-height: 30px;
        height: 30px;
        color: #4d4d52;
        font-weight: 400;
      }
      .text_info___GntMQ {
        margin-top: 8px;
        line-height: 34px;
        font-size: 20px;
        color: #80838a;
      }
      .text_paragraph___1Lm-Y {
        text-indent: 2em;
        font-size: 20px;
        line-height: 54px;
        color: #7b7b82;
        margin: 20px 0;
        .text_explain___2LeMa {
          border: 2px solid;
          border-image-outset: 0 0 1 0;
          border-image-repeat: repeat;
          border-image-slice: 0 2 2 2;
          border-image-source: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIgZmlsbD0iIzgwODM4YSIvPjxjaXJjbGUgY3g9IjUiIGN5PSIxIiByPSIxIiBmaWxsPSIjODA4MzhhIi8+PGNpcmNsZSBjeD0iOSIgY3k9IjEiIHI9IjEiIGZpbGw9IiM4MDgzOGEiLz48Y2lyY2xlIGN4PSIxIiBjeT0iNCIgcj0iMSIgZmlsbD0iIzgwODM4YSIvPjxjaXJjbGUgY3g9IjkiIGN5PSI0IiByPSIxIiBmaWxsPSIjODA4MzhhIi8+PGNpcmNsZSBjeD0iMSIgY3k9IjciIHI9IjEiIGZpbGw9IiM4MDgzOGEiLz48Y2lyY2xlIGN4PSI1IiBjeT0iNyIgcj0iMSIgZmlsbD0iIzgwODM4YSIvPjxjaXJjbGUgY3g9IjkiIGN5PSI3IiByPSIxIiBmaWxsPSIjODA4MzhhIi8+PC9zdmc+);
          border-left: 0;
          border-right: 0;
          cursor: pointer;
        }
        .text_mark___3y1SC {
          color: #aa381e;
        }
      }
      .text_paragraph___1Lm-Y {
        .text_explain___2LeMa {
        }
      }
      .text_paragraph___1Lm-Y {
        .text_mark___3y1SC {
        }
      }
      .text_paragraph___1Lm-Y {
        .text_explain___2LeMa {
        }
      }
      .text_paragraph___1Lm-Y {
      }
    }
    .normal___UIvsJ {
      font-variant-east-asian: normal;
    }
  }
  .reader_content___PdLul {
    .ant-btn {
      img {
      }
    }
    .ant-btn-default {
    }
    .traditional_icon___Wnrmw {
    }
    .btnic {
      top: 0px;
      z-index: 1;
    }
    .pdf_con {
      width: calc(50% - 32px);
      margin-right: 32px;
      padding: 12px 0;
      background-color: #f3f2ec;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      vertical-align: top;
      height: calc(100% - 24px);
      border: 1px solid red;
      img {
        width: 100%;
        height: 70%;
      }
    }
    .text_con___1tLFE {
      .text_title___1w12Z {
      }
      .text_info___GntMQ {
      }
      .text_paragraph___1Lm-Y {
        .text_explain___2LeMa {
        }
        .text_mark___3y1SC {
        }
      }
      .text_paragraph___1Lm-Y {
        .text_explain___2LeMa {
        }
      }
      .text_paragraph___1Lm-Y {
        .text_mark___3y1SC {
        }
      }
      .text_paragraph___1Lm-Y {
        .text_explain___2LeMa {
        }
      }
      .text_paragraph___1Lm-Y {
      }
    }
    .traditional___2AF5V {
      font-variant-east-asian: traditional;
      position: absolute;
      width: 660px;
      height: 90%;
      white-space: normal;
    }
    .pagination___1_UDH {
      .ant-space {
        .ant-space-item {
          .ant-btn {
            .anticon {
            }
            .anticon-left {
            }
          }
          .ant-btn-default {
          }
          .ant-btn-sm {
          }
          .ant-btn-icon-only {
          }
        }
        .ant-space-item {
          .ant-space {
            .ant-space-item {
              span {
              }
            }
            .ant-space-item {
            }
            .ant-space-item {
              span {
              }
            }
          }
          .ant-space-horizontal {
          }
          .ant-space-align-center {
          }
        }
        .ant-space-item {
          .ant-btn {
            .anticon {
            }
            .anticon-right {
            }
          }
          .ant-btn-default {
          }
          .ant-btn-sm {
          }
          .ant-btn-icon-only {
          }
        }
        .ant-space-item {
          .ant-space {
            .ant-space-item {
              span {
              }
            }
            .ant-space-item {
              .ant-input-number {
                .ant-input-number-input-wrap {
                  .ant-input-number-input {
                  }
                }
              }
              .ant-input-number-sm {
              }
            }
            .ant-space-item {
              span {
              }
            }
          }
          .ant-space-horizontal {
          }
          .ant-space-align-center {
          }
        }
      }
      .ant-space-horizontal {
      }
      .ant-space-align-center {
      }
    }
  }
}
</style>
