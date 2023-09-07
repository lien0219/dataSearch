<template>
  <div class="login_register">
    <div class="left_login"></div>
    <div class="ant-pro-form-login-page">
      <div class="ant-pro-form-login-page-notice"></div>
      <div class="ant-pro-form-login-page-container">
        <div class="ant-pro-form-login-page-top">
          <div class="ant-pro-form-login-page-header">
            <span class="ant-pro-form-login-page-title">注册</span>
          </div>
        </div>
        <div class="ant-pro-form-login-page-main">
          <div class="ant_pro">
            <div class="ant_form">
              <div class="ant_formItem">
                <span
                  :class="{ act_click: registrationType === 'phone' }"
                  @click="toggleRegistrationType('phone')"
                >
                  手机注册
                </span>
                <span
                  :class="{ act_click: registrationType === 'email' }"
                  @click="toggleRegistrationType('email')"
                >
                  邮箱注册
                </span>
              </div>
              <div v-if="registrationType === 'phone'">
                <el-form class="login_form">
                  <el-form-item>
                    <el-input
                      :prefix-icon="Iphone"
                      placeholder="手机号"
                      v-model="loginForm.phone"
                      style="height: 40px; font-size: 18px"
                    ></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-input
                      type="password"
                      :prefix-icon="Lock"
                      v-model="loginForm.phonePassword"
                      placeholder="请输入六位或以上密码"
                      show-password
                      style="height: 40px; font-size: 18px"
                    ></el-input>
                  </el-form-item>
                  <el-form-item>
                    <div class="input-container">
                      <el-input
                        placeholder="请输入验证码"
                        v-model="loginForm.phoneCode"
                        style="height: 40px; font-size: 18px"
                      ></el-input>
                      <el-button
                        style="width: 150px; height: 40px; font-size: 15px"
                        @click="sendCode"
                      >
                        {{ sendBtnText }}
                      </el-button>
                    </div>
                  </el-form-item>
                  <el-form-item>
                    <div class="loginFlex">
                      <div>
                        <el-checkbox
                          v-model="checked"
                          label="自动登录"
                          size="large"
                        />
                      </div>
                      <div class="backLogin">
                        已有账号，
                        <button
                          type="button"
                          style="border: none; background-color: white"
                        >
                          返回登录
                        </button>
                      </div>
                    </div>
                  </el-form-item>
                </el-form>
                <button class="login_btn" @click="registerPhone">登录</button>
                <div class="agreement">
                  <el-checkbox
                    v-model="checked"
                    label="我已阅读并接受"
                    size="large"
                  />
                  <button
                    type="button"
                    style="border: none; background-color: white; color: brown"
                  >
                    《服务条款及保密政策》
                  </button>
                </div>
              </div>
              <div v-else-if="registrationType === 'email'">
                <el-form class="login_form">
                  <el-form-item>
                    <el-input
                      :prefix-icon="Message"
                      placeholder="请输入手机邮箱"
                      v-model="loginForm.email"
                      style="height: 40px; font-size: 18px"
                    ></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-input
                      type="password"
                      :prefix-icon="Lock"
                      v-model="loginForm.emailPassword"
                      placeholder="请输入六位或以上密码"
                      show-password
                      style="height: 40px; font-size: 18px"
                    ></el-input>
                  </el-form-item>
                  <el-form-item>
                    <div class="input-container">
                      <el-input
                        placeholder="请输入邮箱验证码"
                        v-model="loginForm.emailCode"
                        style="height: 40px; font-size: 18px"
                      ></el-input>
                      <el-button
                        style="width: 150px; height: 40px; font-size: 15px"
                        @click="sendCode"
                      >
                        {{ sendBtnText }}
                      </el-button>
                    </div>
                  </el-form-item>
                  <el-form-item>
                    <div class="loginFlex">
                      <div>
                        <el-checkbox
                          v-model="checked"
                          label="自动登录"
                          size="large"
                        />
                      </div>
                      <div class="backLogin">
                        已有账号，
                        <button
                          type="button"
                          style="border: none; background-color: white"
                        >
                          返回登录
                        </button>
                      </div>
                    </div>
                  </el-form-item>
                </el-form>
                <button class="login_btn" @click="registerEmail">登录</button>
                <div class="agreement">
                  <el-checkbox
                    v-model="checked"
                    label="我已阅读并接受"
                    size="large"
                  />
                  <button
                    type="button"
                    style="border: none; background-color: white; color: brown"
                  >
                    《服务条款及保密政策》
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="ant-pro-form-login-page-other"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Iphone, Lock, Message } from '@element-plus/icons-vue'
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

let $router = useRouter()
let registrationType = ref('phone')
const phone = ref('')
const email = ref('')
const countDownNum = ref(60)
const sendBtnText = ref('发送验证码')
const checked = ref(false)
let loginForm = reactive({
  phone: '',
  phonePassword: '',
  phoneCode: '',
  email: '',
  emailPassword: '',
  emailCode: '',
})
const toggleRegistrationType = (type: string) => {
  registrationType.value = type
}
const registerPhone = () => {
  console.log('手机注册', phone.value)
  $router.push('/retrieval')
}
const registerEmail = () => {
  console.log('邮箱注册', email.value)
  $router.push('/retrieval')
}
const sendCode = () => {
  sendBtnText.value = countDownNum.value + 's'
  const timer = setInterval(() => {
    countDownNum.value--
    sendBtnText.value = countDownNum.value + 's'
    if (countDownNum.value === 0) {
      clearInterval(timer)
      sendBtnText.value = '重新发送验证码'
      countDownNum.value = 60
    }
  }, 1000)
}
</script>

<style scoped lang="scss">
.login_register {
  background-color: #aa381e;
  height: 100vh;
  .left_login {
    position: fixed;
    z-index: 1;
    width: 70%;
    height: 100%;
    -webkit-filter: invert(1);
    filter: invert(1);
    background: url(../../assets/images/register.svg) no-repeat;
    background-size: 60%;
    background-position: 30% 45%;
  }
  .ant-pro-form-login-page {
    display: flex;
    width: 100%;
    height: 100%;
    background-size: contain;
    .ant-pro-form-login-page-notice {
      display: flex;
      flex: 1;
      align-items: flex-end;
    }
    .ant-pro-form-login-page-container {
      display: flex;
      flex: 1;
      flex-direction: column;
      max-width: 600px;
      height: 100%;
      padding-inline: 0;
      padding-block: 32px;
      overflow: auto;
      background: #ffffff;
      .ant-pro-form-login-page-top {
        text-align: center;
        .ant-pro-form-login-page-header {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 44px;
          line-height: 44px;
          .ant-pro-form-login-page-title {
            position: relative;
            font-weight: 600;
            font-size: 33px;
          }
        }
      }
      .ant-pro-form-login-page-main {
        width: 428px;
        margin: 0 auto;
        .ant_pro {
          .ant_form {
            .ant_formItem {
              position: relative;
              display: flex;
              flex: none;
              align-items: center;
              justify-content: space-evenly;
              margin-bottom: 20px;
              .phone {
              }
              .email {
              }
              span {
                cursor: pointer;
                font-size: 18px;
                color: rgba(0, 0, 0, 0.85);
                line-height: 50px;
                border: 3px solid white;
              }
              span:hover {
                color: #aa381e;
              }
            }
            .ant_formItem::before {
              content: '';
              display: block;
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 1px;
              border: 1px solid #f0f0f0;
            }
            .ant_formItem span:nth-child(1) {
              margin-left: 100px;
            }
            .ant_formItem span:nth-child(2) {
              margin-right: 100px;
            }
            .act_click {
              color: #aa381e !important;
              border-bottom: 3px solid #aa381e !important;
            }
            div {
              .login_form {
                .input-container {
                }
                .loginFlex {
                  display: flex;
                  justify-content: space-between;
                  width: 100%;
                  div {
                    flex: 1;
                  }
                  .backLogin {
                    text-align: right;
                    button {
                      cursor: pointer;
                      color: #aa381e;
                    }
                  }
                }
                div {
                }
                .backLogin {
                  button {
                  }
                }
                .el-form-item {
                  // ::v-deep .el-input__wrapper {
                  //   font-size: 20px;
                  // }
                  .input-container {
                    display: flex;
                    align-items: center;
                  }
                }
              }
              .login_btn {
                color: #fff;
                border-color: #aa381e;
                background: #aa381e;
                text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
                box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
                width: 100%;
                height: 50px;
                padding: 6.4px 15px;
                font-size: 18px;
                border-radius: 2px;
                position: relative;
                display: inline-block;
                font-weight: 400;
                white-space: nowrap;
                text-align: center;
                cursor: pointer;
                transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
                user-select: none;
                touch-action: manipulation;
                border: 1px solid #d9d9d9;
                border: none;
              }
              .agreement {
                margin-top: 20px;
                display: flex;
                justify-content: flex-start;
                font-size: 16px;
                button {
                  cursor: pointer;
                }
              }
              .login_btn:hover {
                color: #fff;
                border-color: #b8593e;
                background: #b8593e;
              }
            }
            div {
              .login_form {
                .input-container {
                }
              }
              .login_btn {
              }
              button {
              }
            }
          }
        }
        .ant-pro-form-login-page-other {
        }
      }
    }
    @media (min-width: 768px) {
      .ant-pro-form-login-page-container {
        padding-inline: 0;
        padding-block-start: 128px;
        padding-block-end: 24px;
        background-repeat: no-repeat;
        background-position: center 110px;
        background-size: 100%;
      }
    }
  }
}
</style>
