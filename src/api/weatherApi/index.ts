import request from '../request'
import type { AxiosResponse } from 'axios'
const PREFIX = '/weatherApi'
const api = request({
  // baseURL: import.meta.env.VITE_APP_BASE_URL
})

export const get = <T>(url: string, params:T) => {
  return api
    .get(`${PREFIX}${url}`, {
      params
    })
    .then((res: AxiosResponse) => {
      if (res.data.code === "200") {
        return Promise.resolve(res.data)
      } else {
        return Promise.reject(res.data)
      }
    }).catch(err=>{
      return err
    })
}

interface WeatherParams {
  key:string;
  location:string;
}
interface ClotheIndexParams extends WeatherParams{
  type: string
}
// 获取实时天气预报
export const getWeatherNow = (params:WeatherParams)=>{
  return get<WeatherParams>('/weather/now',params)
}

// 获取穿衣指数
export const getClotheIndexOnDay = (params:ClotheIndexParams)=>{
  return get<ClotheIndexParams>('/indices/1d', params)
}

// 获取逐小时天气预报
export const getWeatherPrecastHourly = (params:WeatherParams)=>{
  return get<WeatherParams>('/weather/24h', params)
}

// 获取空气质量指数
export const getAirQualityNow = (params:WeatherParams)=>{
  return get<WeatherParams>('/air/now', params)
}