import request from '../request'
import type { AxiosResponse } from 'axios'
const PREFIX = '/locationApi'
const api = request({
  // baseURL: import.meta.env.VITE_APP_BASE_URL
})

export const get = <T>(url: string, params: T) => {
  return api
    .get(`${PREFIX}${url}`, {
      params
    })
    .then((res: AxiosResponse) => {
      if (res.data.code === '200') {
        return Promise.resolve(res.data)
      } else {
        return Promise.reject(res.data)
      }
    })
    .catch((err) => {
      return err
    })
}

interface LocationParams {
  key: string
  location: string
}
// 根据城市名成获取城市经纬度
export const getCityLocation = (params: LocationParams) => {
  return get<LocationParams>('/city/lookup', params)
}
