<template>
  <div class="chart-container">
    <div ref="chart" style="width: 500px; height: 500px"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, type ComponentInternalInstance } from 'vue'
import { getCurrentInstance, ref, reactive } from 'vue'

const { proxy } = getCurrentInstance() as ComponentInternalInstance
const chart = ref<any>(null)

const chartOptions = reactive({
  title: {
    text: ''
  },
  tooltip: {},
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
})

const initChart = function () {
  const myChart = proxy.$Echarts.init(chart.value)
  // 绘制图表
  myChart.setOption(chartOptions)
}
onMounted(() => {
  initChart()
})
</script>

<style lang="scss" scoped></style>
