<template>
  <div class="chart-container">
    <div ref="chart" style="width: 500px; height: 500px"></div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { onMounted, type ComponentInternalInstance } from 'vue'
import { getCurrentInstance, ref } from 'vue'
import { useConfigStore } from '@/stores/chartConfig'
import { watch } from 'vue'

const { proxy } = getCurrentInstance() as ComponentInternalInstance
const chart = ref<any>(null)

let myChart: any

// 引入图表配置store
const configStore = useConfigStore()

// 图表配置项
const chartOptions = computed(() => configStore.chartConfig)

// 初始化图表
const initChart = () => {
  myChart = proxy.$Echarts.init(chart.value)
  myChart.setOption(chartOptions.value)
}

// 更新图表
const updateChart = () => {
  myChart.setOption(chartOptions.value)
}

watch(
  () => chartOptions.value,
  () => {
    updateChart()
    console.log('update', chartOptions.value)
  },
  {
    deep: true
  }
)

onMounted(() => {
  initChart()
})
</script>

<style lang="scss" scoped></style>
