import axios from 'axios'
import type { AxiosRequestConfig, InternalAxiosRequestConfig, AxiosResponse } from 'axios'

axios.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  return config
})

axios.interceptors.response.use((res: AxiosResponse) => {
  return res
})

export default function (options: AxiosRequestConfig) {
  return axios.create(options)
}
