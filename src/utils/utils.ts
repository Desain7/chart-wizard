import * as echarts from 'echarts'

interface ColorItemType {
  offset: number
  color: string
}

const LinearGradientColor = (
  right: number,
  bottom: number,
  left: number,
  top: number,
  colors: Array<ColorItemType>
) => {
  /*四个数字分别对应 数组中颜色的开始位置，分别为 右，下，左，上。例如（1,0,0,0 ）代表从右边开始渐变。
        offset取值为0~1，0代表开始时的颜色，1代表结束时的颜色，柱子表现为这两种颜色的渐变。*/
  return new echarts.graphic.LinearGradient(right, bottom, left, top, colors)
}

export { LinearGradientColor }
