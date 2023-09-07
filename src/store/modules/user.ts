import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user'

// 数据类型
import type { loginForm, loginResponseData } from '@/api/user/type'
import type { UserState } from './types/type'

// 本地存储工具
import { SET_TOKEN, GET_TOKEN } from '@/utils/token'

let useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
    }
  },
  actions: {
    async userLogin(data: loginForm) {
      let result: loginResponseData = await reqLogin(data)
      if (result.code == 200) {
        this.token = result.data.token as string
        //  持久化存储
        SET_TOKEN(result.data.token as string)

        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
  },
  getters: {},
})

export default useUserStore
