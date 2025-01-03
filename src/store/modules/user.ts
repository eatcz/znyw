import { defineStore } from 'pinia'
import { login } from '../../api/login'
import type { LoginInfo } from '../../types/login'
import { getToken } from '../../utils'
import { getMenus } from '../../api/menus'
import { useRouter } from 'vue-router'

const router = useRouter()

export const useUserStore = defineStore('user', {
  state: () => ({
    token: getToken() || '',
    menus:[]
  }),
  actions: {
    // 登录
    async login(loginInfo: LoginInfo) {
      const token = await login(loginInfo)
      if (token) {
        this.token = token
        router.push('/')
        this.getMenuList()
      }
    },

    // 设置storetoken
    storeSetToken() {
      this.token = getToken() as string
    },

    // 获取路由菜单
    async getMenuList() {
      const res = await getMenus()
      console.log(res)
    }
  },
  getters: {

  },

})

