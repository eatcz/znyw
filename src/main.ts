import { createApp } from 'vue'
import './style.css'
import 'reset.css'
import './styles/index.scss'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import BaiduMap from 'vue-baidu-map-3x'
import App from './App.vue'
import router from './router'
import store from './store'

import registerIcon from './plugin/directive'



const app = createApp(App)

registerIcon(app)

app.use(router)
app.use(store)
app.use(ElementPlus)
app.use(BaiduMap, {
    ak: 'SiJ79eAWnSFb4hU4hIZ1ECKCFjpSkkG8',
})

app.mount('#app')
