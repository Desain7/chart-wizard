<template>
  <el-form-item label="是否展示标题">
    <el-switch v-model="chartOptions.title.show" />
  </el-form-item>

  <el-form-item label="标题内容">
    <el-input v-model="chartOptions.title.text" />
  </el-form-item>
  <el-form-item label="超链接">
    <el-input v-model="chartOptions.title.link" placeholder="http://" />
  </el-form-item>
  <el-form-item label="超链接打开窗口">
    <el-select v-model="chartOptions.title.target" placeholder="self" size="medium">
      <el-option label="blank" value="blank" />
      <el-option label="self" value="self" />
    </el-select>
  </el-form-item>
  <el-form-item label="文字颜色">
    <el-color-picker
      v-model="chartOptions.title.textStyle.color"
      show-alpha
      :predefine="predefineColors"
    />
  </el-form-item>
  <el-form-item label="文字风格">
    <el-select v-model="chartOptions.title.textStyle.fontStyle" placeholder="normal" size="medium">
      <el-option label="normal" value="normal" />
      <el-option label="italic" value="italic" />
      <el-option label="oblique" value="oblique" />
    </el-select>
  </el-form-item>
  <el-form-item label="字体粗细">
    <el-select
      v-model="chartOptions.title.textStyle.fontWeight"
      :placeholder="chartOptions.title.textStyle.fontWeight"
      size="medium"
    >
      <el-option label="normal" value="normal" />
      <el-option label="bold" value="bold" />
      <el-option label="bolder" value="bolder" />
      <el-option label="lighter" value="lighter" />
    </el-select>
  </el-form-item>
</template>

<script lang="ts" setup>
import { useConfigStore } from '@/stores/chartConfig'
import { watch } from 'vue'
import { computed, ref } from 'vue'

// 标题相关配置
const configStore = useConfigStore()
const chartOptions = computed(() => configStore.chartConfig)

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
