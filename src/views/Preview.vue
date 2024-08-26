<template>
  <div class="preview">
    <div class="chart-box" ref="chart"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import map from '@/assets/map/china.json'

const chart = ref(null)
const data = [
  20, 30, 40, 30, 20, 30, 40, 30, 20, 30, 40, 30, 20, 30, 40, 30, 20, 30, 40, 30, 20, 30, 40, 30,
  20, 30, 40, 30,20,40,40,30
]
function createData() {
  return map.features.map((item, index) => {
    return {
      name: item.properties.name,
      value: data[index]
    }
  })
}
onMounted(() => {
  const myChart = echarts.init(chart.value)
  echarts.registerMap('china', map)
  const options = {
    tooltip:{
      show:true
    },
    visualMap: {
      type: 'continuous',
      min: -180,
      max: 50,
      seriesIndex: 0,
      dimension: 0,
      pieces: [
        {
          min: 0,
          max: 100,
          color: '#10ff10'
        },
        {
          min: 101,
          max: 190,
          color: '#eeffaa'
        },
        {
          min: 191,
          max: 360,
          color: '#eeffff'
        }
      ]
    },
    series: {
      type: 'map',
      map: 'china',
      nameProperty: 'name',
      name: 'name',
      data: createData()
    }
  }
  myChart.setOption(options)
  window.onresize = () => {
    myChart.resize({ width: window.innerWidth, height: window.innerHeight })
  }
})
</script>

<style scoped>
.preview {
  width: 100%;
  height: 100%;
}
.chart-box {
  width: 100%;
  height: 100%;
}
</style>
