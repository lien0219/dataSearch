import { createApp } from 'vue'
import App from '@/App.vue'
// 引入element-plus插件和样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 配置element-plus国际化
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// 获取应用实例
const app = createApp(App)
// 安装element-plus插件
app.use(ElementPlus, {
  locale: zhCn,
})
// svg图标配置
import 'virtual:svg-icons-register'
// 自定义插件对象以及安装自定义插件
import gloablComponent from './components/index'
app.use(gloablComponent)
// 全局样式
import '@/styles/index.scss'
// 挂载到挂载点上
app.mount('#app')
