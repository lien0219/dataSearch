import { createApp } from 'vue'
import App from '@/App.vue'
// 引入element-plus插件和样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 配置element-plus国际化
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// 路由
import router from './router'
// 仓库
import pinia from './store'
// 适配
// import '@/libflexible/flexible'
import 'amfe-flexible'
// svg图标配置
import 'virtual:svg-icons-register'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// 自定义插件对象以及安装自定义插件
import gloablComponent from './components/index'
// 全局样式
import '@/styles/index.scss'
import Particles from 'particles.vue3'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css'
// 获取应用实例
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(VueAwesomeSwiper)
app.use(gloablComponent)
app.use(router)
app.use(pinia)
app.use(Particles)
app.mount('#app')
