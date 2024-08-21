<template>
  <div class="precast">
    <div class="title">每小时预报</div>
    <div class="chart-box" ref="chartBox"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';

const props = defineProps({
  hoursData: {
    type: Array<HourlyPrecast>,
    default: () => ([])
  }
});
const chartBox = ref(null);
onMounted(() => {
  const xData = props.hoursData.map(hour => {
    const time = new Date(hour.fxTime);
    return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()} ${time.getHours()}:00`
  });
  const options = {
    tooltip:{
      trigger:'axis'
    },
    grid:{
      top:'10%'
    },
    xAxis: {
      type: 'category',
      data: xData,
      axisTick: {
        show: true,
        interval:0
      },
      axisLine:{
        lineStyle:{
          color:"#fff"
        }
      }
    },
    yAxis: {
      type: 'value',
     axisLine:{
      lineStyle:{
        color:'#fff'
      }
     }
    },
    series: [{
      name:'气温',
      type: 'bar',
      data: props.hoursData.map(item => item.temp),
      barWidth: 20,
      itemStyle:{
        color:'#fff'
      }
    }]
  };
  const chart = echarts.init(chartBox.value);
  chart.setOption(options);
});
</script>

<style scoped lang="scss">
.precast {
  margin-top:10px;
  padding: 20px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  height: auto;
  color:#fff;
}

.chart-box {
  width: 100%;
  height: 200px;
}
</style>