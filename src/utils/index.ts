import { WeatherCondition } from '../types'
import Clear from '../images/Clear.svg'
import Clouds from '../images/Clouds.svg'
import Rain from '../images/Rain.svg'
import Snow from '../images/Snow.svg'
import Wind from '../images/Wind.svg'

export const getImageFromCondition = (condition: WeatherCondition) => {
  switch (condition) {
    case 'Clear':
      return Clear
    case 'Clouds':
      return Clouds
    case 'Rain':
      return Rain
    case 'Snow':
      return Snow
    default:
      return Wind
  }
}
