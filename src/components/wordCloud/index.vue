<template>
  <div :id="chartId" style="width: 100%; height: 200px"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import * as echarts from 'echarts/core'
import 'echarts-wordcloud'

import { TooltipComponent } from 'echarts/components'
echarts.use([TooltipComponent])

let $router = useRouter()
let props = defineProps({
  wordList: {
    type: Array,
    required: true,
  },
  shape: {
    type: String,
    default: 'circle',
  },
  chartId: {
    type: String,
    required: true,
  },
})
onMounted(() => {
  init()
})
const init = () => {
  let myChart: any = echarts.getInstanceByDom(
    document.getElementById(props.chartId)!,
  )
  if (myChart) {
    echarts.dispose(myChart)
  }

  myChart = echarts.init(document.getElementById(props.chartId)!)

  const option = {
    tooltip: {
      show: true,
      formatter: (params: { data: { name: any; value: any }; color: any }) => {
        const { name, value } = params.data
        return `
        <div>
          <div style="display: flex; align-items: center;">
            <div style="width: 8px; height: 8px; background-color: ${params.color}; border-radius: 50%; margin-right: 5px;"></div>
            <div>${name}：${value}</div>
          </div>
        </div>
        `
      },
    },
    series: [
      {
        type: 'wordCloud',
        // 要绘制云的形状,默认是 circle，可选的参数有 cardioid 、 diamond 、 triangle-forward 、 triangle 、 star
        shape: props.shape,
        keepAspect: false,
        left: 'center',
        top: 'center',
        width: '100%',
        height: '100%',
        right: null,
        bottom: null,
        sizeRange: [10, 18],
        rotationRange: [-90, 90],
        rotationStep: 45,
        gridSize: 10,
        drawOutOfBound: false,
        shrinkToFit: true,
        layoutAnimation: true,
        textStyle: {
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
          color: function () {
            return (
              'rgb(' +
              [
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
              ].join(',') +
              ')'
            )
          },
        },
        emphasis: {
          focus: 'self',
          textStyle: {
            textShadowBlur: 1,
            textShadowColor: '#333',
          },
          clickable: true,
        },
        data: props.wordList,
      },
    ],
  }
  myChart.setOption(option)
  window.addEventListener('resize', () => {
    myChart.resize()
  })
  myChart.on('click', (params: { name: any; value: any }) => {
    const { name, value } = params
    $router.push({
      path: '/wordCloudDetail',
      query: { wordCloudInfo: name, number: value },
    })
  })
}
</script>

<style scoped></style>
