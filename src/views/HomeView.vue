<template>
 <div class="container">
  <Header @search="handleSearch"></Header>
  <div class="content">
    <current-weather :weatherData="weatherData" :clotheIndex="clotheIndex"></current-weather>
    <air-quality v-if="airQualityData?.now" :airQualityData="airQualityData"></air-quality>
  </div>
  <life-index :lifeIndexData="lifeIndexData"></life-index>
  <HoursPrecast v-if="hoursData.length" :hours-data="hoursData"></HoursPrecast>
 </div>
</template>

<script setup lang="ts">
import {reactive,ref,onMounted} from 'vue';
import Header from '../components/Header.vue';
import CurrentWeather from '../components/CurrentWeather.vue';
import AirQuality from '../components/AirQuality.vue';
import LifeIndex from '@/components/LifeIndex.vue';
import HoursPrecast from '@/components/HoursPrecast.vue';
import useMainStore from '../stores/main';
import { getWeatherNow,getClotheIndexOnDay,getWeatherPrecastHourly,getAirQualityNow } from '@/api/weatherApi';
import {getCityLocation} from '@/api/location'

const mainStore = useMainStore();
const weatherData = ref({
  city:''
});
const clotheIndex = ref('');
const lifeIndexData =ref([]);
const hoursData = ref([]);
const airQualityData = ref<AirQuality>();
onMounted(()=>{
  handleSearch('北京');
});
// 搜索天气信息
const handleSearch = async (value:string)=>{
  const cityLocation = await getCityLocation({key:mainStore.key,location:value});
  const result = await getWeatherNow({
    key:mainStore.key,
    location:cityLocation.location[0].id
  })
  weatherData.value = result;
  weatherData.value.city = value;
  getClotheIndex(cityLocation.location[0].id);
  getHoursprecast(cityLocation.location[0].id);
  getAirQuality(cityLocation.location[0].id);
}
// 获取穿衣指数
const getClotheIndex = async (location:string)=>{
  const data = await getClotheIndexOnDay({
    key:mainStore.key,
    location:location,
    type:'0'
  });
  clotheIndex.value = data.daily[0].text;
  lifeIndexData.value = data.daily;
}
// 获取逐小时天气预报
const getHoursprecast = async (location:string)=>{
  const data = await getWeatherPrecastHourly({
    key:mainStore.key,
    location:location
  });
  hoursData.value = data.hourly;
}
// 获取空气质量指数
const getAirQuality = async (location:string)=>{
  const data = await getAirQualityNow({
    key:mainStore.key,
    location:location
  });
  airQualityData.value = data;
}
</script>

<style scoped lang="scss">
 .container{
  background-color:skyblue;
  padding:0 20px;
 }
 .content{
  display:flex;
  align-items:center;
 }
</style>