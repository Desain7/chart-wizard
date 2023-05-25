import { defineStore } from 'pinia'
import { title } from '@/components/SidebarMenu/Title/Title'
import { series } from '@/components/SidebarMenu/Series/Series'

export const useConfigStore = defineStore('config', {
  state: () => {
    return {
      chartConfig: {
        title,
        series,
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {}
      }
    }
  }
})
