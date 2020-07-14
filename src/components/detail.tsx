import React from 'react'
import styled from 'styled-components'
import { RouteComponentProps, useParams } from '@reach/router'
import moment from 'moment'
import { useForecast } from '../api'
import { getImageFromCondition } from '../utils'
import Arrow, { BackArrow } from './arrow'
import Heart from './heart'

const Detail = (props: RouteComponentProps) => {
  const { cityId } = useParams()
  const { data } = useForecast(cityId)

  if (!data) return null

  const { city, list } = data
  const { weather, main } = list[0]

  return (
    <Container>
      <BackArrow />
      <Heart cityId={cityId} />
      <City>{city.name}</City>
      <Weather>{weather[0].main}</Weather>
      <img
        src={getImageFromCondition(weather[0].main)}
        alt={weather[0].description}
      />
      <Details>
        <Temp>{Math.round(main.temp)}°</Temp>
        <Wind>
          <Arrow rotation={list[0].wind.deg} />
          <p>
            {list[0].wind.speed}
            <span> m/s</span>
          </p>
        </Wind>
        <SecondaryDetail>
          {main.pressure}
          <span>Pressure (hPa)</span>
        </SecondaryDetail>
        <SecondaryDetail>
          {main.humidity}%<span>Humidity</span>
        </SecondaryDetail>
      </Details>
      <WindSpeeds>
        {list.slice(0, 5).map(({ dt_txt, wind }) => (
          <WindSpeed key={dt_txt}>
            <p>{`${String(moment(dt_txt).hour()).padStart(2, '0')}:00`}</p>
            <Arrow rotation={wind.deg} />
            <p>
              {wind.speed}
              <span> m/s</span>
            </p>
          </WindSpeed>
        ))}
      </WindSpeeds>
    </Container>
  )
}

export default Detail

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  img {
    width: 90%;
    max-height: 300px;
  }
`

const City = styled.p`
  color: #666;
  letter-spacing: 0.5px;
`

const Weather = styled.h2`
  margin-bottom: 0;
  z-index: 1;
`

const Details = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  margin: 2rem 0 0;
  text-align: center;

  p {
    padding: 0 0.5rem;
  }
`

const Temp = styled.p`
  font-size: 36px;
  font-weight: 700;
  color: #666;
`

const Wind = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;

  p {
    margin: 0;
    font-size: 16px;
    font-weight: 700;
    color: #666;
  }

  span {
    font-weight: 300;
    font-size: 12px;
  }
`

const SecondaryDetail = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #666;

  span {
    display: block;
    font-weight: 300;
    font-size: 12px;
  }
`

const WindSpeeds = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0.5rem 0;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 600px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`

const WindSpeed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin: 0;
    font-size: 12px;
    color: #333;
    font-weight: 700;
  }

  span {
    font-size: 8px;
    font-weight: 300;
  }
`
