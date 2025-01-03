import { defineStore } from 'pinia'
import { login } from '../../api/login'
import type { LoginInfo } from '../../types/login'
export const useUserStore = defineStore('user', {
  state: () => ({
    token: ''
  }),
  actions: {
    // 登录
    async login(loginInfo: LoginInfo) {
      const token = await login(loginInfo)
      if (token) {
        this.token = token
      }
    },

    // 获取路由菜单
    async getMenuList() {
      
    }
  },
  getters: {

  },

})

