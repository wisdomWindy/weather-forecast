<template>
  <div class="air-quality">
    <div class="title">空气质量</div>
    <div class="chart-box" ref="chartBox"></div>
  </div>
</template>

<script setup lang="ts">
import { ref,onMounted } from 'vue';
import * as echarts from 'echarts';

const chartBox = ref(null);
const props = defineProps({
  airQualityData: {
    type: Object,
    default: () => ({})
  }
});

onMounted(()=>{
  const chart = echarts.init(chartBox.value);
  const options = {
    series:[{
      type:'gauge',
      data:[{
        name: props.airQualityData.now.category,
        value: props.airQualityData.now.aqi
      }],
      detail:{
        padding:10
      },
      axisLabel:{
        show:false
      },
      axisTick:{
        show:false
      }
    }]
  };
  chart.setOption(options);
});
</script>

<style scoped lang="scss">
.air-quality {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  width: 30%;
  margin-left: 10%;
  padding: 10px;
}

.title {
  font-size: 16px;
}
.chart-box{
  height:200px;
}
</style>