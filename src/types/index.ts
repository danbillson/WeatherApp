export interface BasicCity {
  id: number
  name: string
}

export interface City {
  coord: { lon: number; lat: number }
  sys: {
    country: string
    timezone: number
    sunrise: number
    sunset: number
  }
  weather: [
    { id: number; main: WeatherCondition; description: string; icon: string }
  ]
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
  visibility: number
  wind: { speed: number; deg: number }
  clouds: { all: number }
  dt: number
  id: number
  name: string
}

export interface Forecast {
  cod: string
  message: number
  cnt: number
  list: {
    dt: number
    main: {
      temp: number
      feels_like: number
      temp_min: number
      temp_max: number
      pressure: number
      sea_level: number
      grnd_level: number
      humidity: number
      temp_kf: number
    }
    weather: [
      { id: number; main: WeatherCondition; description: string; icon: string }
    ]
    clouds: { all: number }
    wind: { speed: number; deg: number }
    sys: { pod: string }
    dt_txt: string
  }[]
  city: {
    id: number
    name: string
    coord: { lat: string; lon: string }
    country: string
    timezone: number
    sunrise: number
    sunset: number
  }
}

export type WeatherCondition =
  | 'Thunderstorm'
  | 'Drizzle'
  | 'Rain'
  | 'Snow'
  | 'Clear'
  | 'Clouds'
  | 'Mist'
  | 'Smoke'
  | 'Haze'
  | 'Dust'
  | 'Fog'
  | 'Sand'
  | 'Ash'
  | 'Squall'
  | 'Tornado'
