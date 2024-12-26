import {  type App } from 'vue'

// 如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const registerIcon = (app:App) => {
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
}

export default registerIcon