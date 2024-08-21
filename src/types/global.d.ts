interface LifeIndex {
  date: string
  type: string
  name: string
  level: number
  category: string
  text: string
}

interface AirQuality {
  updateTime: string
  fxLink: string
  now: AirQualityNow
}

interface AirQualityNow {
    pubTime: string
    aqi: string
    level: string
    category: string
    primary: string
    pm10: string
    pm2p5: string
    no2: string
    so2: string
    co: string
    o3: string
  }

  interface HourlyPrecasts{
    hourly: HourlyPrecast[]
  }

  interface HourlyPrecast {
    fxTime: string
    temp: string
    icon: string
    text: string
    wind360: string
    windDir: string
    windScale: string
    windSpeed: string
    humidity: string
    pop: string
    precip: string
    pressure: string
    cloud: string
    dew: string
  }