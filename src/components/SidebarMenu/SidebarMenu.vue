<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>Card name</span>
        <el-button class="button" text>Operation button</el-button>
      </div>
    </template>
    <div class="handle-area">
      <el-form :model="chartOptions">
        <el-collapse v-model="activeNames">
          <el-collapse-item title="图表类型" name="1">
            <Series></Series>
          </el-collapse-item>
          <el-collapse-item title="标题" name="2">
            <Title></Title>
          </el-collapse-item>
        </el-collapse>
        <el-form-item label="导出配置">
          <el-button @click="output()">导出</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { useConfigStore } from '@/stores/chartConfig'
import { watch } from 'vue'
import { computed, ref } from 'vue'
import Title from './Title/Title.vue'
import Series from './Series/Series.vue'

const activeNames = ref(['1'])

const configStore = useConfigStore()
const chartOptions = computed(() => configStore.chartConfig)

const output = () => {
  console.log('当前配置', chartOptions.value)
}
</script>

<style lang="scss" scoped></style>
