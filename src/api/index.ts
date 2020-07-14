import axios, { AxiosRequestConfig } from 'axios'
import useSwr from 'swr'
import { City, Forecast } from '../types'

export const weather = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
})

export const fetcher = async (path: string, config: AxiosRequestConfig) => {
  const { data } = await weather.get(path, {
    ...config,
    params: {
      appid: process.env.REACT_APP_API_KEY,
    },
  })
  return data
}

export const useCityWeather = (id: number) =>
  useSwr<City>(`/weather?id=${id}&units=metric`)

export const useBulkCityWeather = (ids: number[]) =>
  useSwr<{ cnt: number; list: City[] }>(
    `/group?id=${ids.join(',')}&units=metric`
  )

export const useForecast = (id: number) =>
  useSwr<Forecast>(`/forecast?id=${id}&units=metric`)
