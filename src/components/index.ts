// 引入项目全局组件
import SvgIcon from './SvgIcon/index.vue'
import Card from './Card/index.vue'
import Title from './Title/index.vue'
import Btn from './Button/index.vue'
import WordCloud from './wordCloud/index.vue'
import SelectSearch from './SelectSearch/index.vue'

import type { App, Component } from 'vue'
const components: { [name: string]: Component } = {
  SvgIcon,
  Card,
  Title,
  Btn,
  WordCloud,
  SelectSearch,
}
export default {
  install(app: App) {
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key])
    })
  },
}
