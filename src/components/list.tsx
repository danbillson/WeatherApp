import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'
import { useBulkCityWeather } from '../api'
import { City } from '../types'
import Arrow from './arrow'

const CityDetail = ({ info }: { info: City }) => {
  const { id, name, wind, main, weather } = info
  return (
    <Detail to={`/${id}`}>
      <p>{name}</p>
      <Info>
        <Icon
          src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
          alt={weather[0].description}
        />
        <Wind>
          <Arrow rotation={wind.deg} />
          <p>
            {wind.speed}
            <span> m/s</span>
          </p>
        </Wind>
        <Temp>{Math.round(main.temp)}°</Temp>
      </Info>
    </Detail>
  )
}

const List = ({ locations }: { locations: number[] }) => {
  const { data } = useBulkCityWeather(locations)

  return !data ? null : (
    <Container>
      {data.list.map((city) => (
        <CityDetail key={city.id} info={city} />
      ))}
    </Container>
  )
}

export default List

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Detail = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border-top: 1px solid #ccc;
  text-decoration: none;
  color: #333;

  &:last-child {
    border-bottom: 1px solid #ccc;
  }
`

const Info = styled.div`
  display: flex;
  align-items: center;
`

const Icon = styled.img`
  height: 50px;
`

const Wind = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0.75rem;
  min-width: 50px;

  p {
    margin: 0;
    font-size: 12px;
    font-weight: 700;
    color: #666;
  }

  span {
    font-weight: 300;
    font-size: 8px;
  }
`

const Temp = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #777;
`
