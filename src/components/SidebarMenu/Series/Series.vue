<template>
  <el-form-item label="是否展示背景色">
    <el-switch v-model="chartOptions.series[0].showBackground" />
  </el-form-item>
  <el-form-item label="柱状图背景色">
    <el-color-picker
      v-model="chartOptions.series[0].backgroundStyle.color"
      show-alpha
      :predefine="predefineColors"
    />
  </el-form-item>
  <el-form-item label="柱状图颜色">
    <el-color-picker
      v-model="chartOptions.series[0].itemStyle.color"
      show-alpha
      :predefine="predefineColors"
    />
    <!-- <div class="gradient" v-for="(item, index) in colorItems" :key="index">
      <el-input-number v-model="item.offset"></el-input-number>
      <el-color-picker v-model="item.color" show-alpha :predefine="predefineColors" />
    </div> -->
  </el-form-item>
  <el-form-item label="柱状图描边宽度">
    <el-input-number
      v-model="chartOptions.series[0].itemStyle.borderWidth"
      :min="0"
      :max="10"
      placeholder="0"
    />
  </el-form-item>
  <el-form-item label="柱状图描边颜色">
    <el-color-picker
      v-model="chartOptions.series[0].itemStyle.borderColor"
      show-alpha
      :predefine="predefineColors"
    />
  </el-form-item>
  <el-form-item label="描边类型">
    <el-select v-model="chartOptions.series[0].itemStyle.borderType" placeholder="solid">
      <el-option label="solid" value="solid"></el-option>
      <el-option label="dotted" value="dotted"></el-option>
      <el-option label="dashed" value="dashed"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="圆角半径">
    <el-input-number
      v-model="chartOptions.series[0].itemStyle.borderRadius"
      min="0"
      placeholder="0"
    >
    </el-input-number>
  </el-form-item>
</template>

<script lang="ts" setup>
import { useConfigStore } from '@/stores/chartConfig'
import { computed, ref } from 'vue'

const configStore = useConfigStore()
const chartOptions = computed(() => configStore.chartConfig)

// 渐变色

// let colorItems = reactive([
//   {
//     offset: 0,
//     color: 'rgba(0, 0, 0, 1)'
//   },
//   {
//     offset: 1,
//     color: 'rgba(0, 0, 0, 1)'
//   }
// ])

// watch(
//   () => colorItems,
//   () => {
//     chartOptions.value.series[0].itemStyle.color = {
//       type: 'linear',
//       x: 0,
//       y: 0,
//       x2: 0,
//       y2: 1,
//       colorStops: colorItems,
//       global: false // 缺省为 false
//     }
//   },
//   {
//     deep: true
//   }
// )

// 预设颜色
const predefineColors = ref([
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577'
])
</script>

<style lang="scss" scoped></style>
