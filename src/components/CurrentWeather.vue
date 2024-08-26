<template>
  <div class="weather">
    <div class="title">{{weatherData.city}}天气</div>
    <div class="weather-content">
      <img :src="`/src/assets/weather-icons/${weatherData.now?.icon}-fill.svg`" class="weather-icon" />
      <span class="weather-temperature">{{weatherData.now?.temp}}℃</span>
      <div class="weather-info">
        <div class="weather-wind">{{weatherData.now?.text}}</div>
        <div class="apparent-temperature">体感温度{{weatherData.now?.feelsLike}}℃</div>
      </div>
    </div>
    <div class="list">
      <div class="list-item">
        <div class="item-title">风向</div>
        <div class="item-content">{{ weatherData.now?.windDir }}</div>
      </div>
      <div class="list-item">
        <div class="item-title">风力等级</div>
        <div class="item-content">{{ weatherData.now?.windScale }}级</div>
      </div>
      <div class="list-item">
        <div class="item-title">相对温度</div>
        <div class="item-content">{{ weatherData.now?.humidity }}</div>
      </div>
      <div class="list-item">
        <div class="item-title">大气压强</div>
        <div class="item-content">{{ weatherData.now?.feelsLike }}hpa</div>
      </div>
      <div class="list-item">
        <div class="item-title">能见度</div>
        <div class="item-content">{{ weatherData.now?.vis }}KM</div>
      </div>
    </div>
    <div class="clothe-index">{{ clotheIndex }}</div>
  </div>
</template>

<script setup lang="ts">
const props= defineProps({
  weatherData:{
    type:Object,
    default:()=>({})
  },
  clotheIndex:{
    type:String,
    default:''
  }
});
</script>

<style scoped lang="scss">
.weather{
  width:60%;
  padding:10px;
  color:#fff;
  background-color:rgba(255,255,255,0.2);
  border-radius:10px;
  &-content{
    display:flex;
    align-items:center;
    padding:10px 10px 10px 0;
  }
  &-temperature{
    font-size:30px;
    font-weight:bold;
    margin:0 20px;
  }
  &-wind{
    font-size:20px;
    font-weight:bold;
  }
  &-temperature{
    font-size:30px;
  }
  &-icon{
    width:50px;
    height:50px;
  }
}
 .title{
  font-size:16px;
 }
 .list{
  display:flex;
  align-items: center;
  justify-content: space-between;
  margin:20px 0;
 }
 .item-title{
  font-size:10px;
 }
 .item-content{
  font-size:20px;
  font-weight: bold;
 }
 .clothe-index{
  font-size:16px;
 }
</style>