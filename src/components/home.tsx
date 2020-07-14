import React from 'react'
import { RouteComponentProps } from '@reach/router'
import styled from 'styled-components'
import Search from './search'
import List from './list'
import { useFavourites } from '../state'

// London, Newcastle, Liverpool
const popularLocations = [2643743, 2641673, 2644210]

const Home = (props: RouteComponentProps) => {
  const { favourites, limit } = useFavourites()
  const hasFavourites = favourites.length > 0

  return (
    <Main>
      <h2>
        {hasFavourites
          ? `Welcome back, try searching for a city to get an up to date forecast...`
          : `Hello, it looks like you don't have any favourite locations yet! Try
        searching for a city...`}
      </h2>
      <Search />
      <Right>
        {hasFavourites
          ? `...or see a list of your favourite locations`
          : `...or look at some popular locations`}
      </Right>
      {hasFavourites && (
        <Count>
          {favourites.length} <span>/ {limit}</span>
        </Count>
      )}
      <List locations={hasFavourites ? favourites : popularLocations} />
    </Main>
  )
}

export default Home

const Main = styled.main`
  margin-top: 3rem;
`

const Right = styled.h2`
  text-align: right;
  margin-bottom: 3rem;
`

const Count = styled.p`
  text-align: right;
  font-size: 12px;

  span {
    font-weight: 700;
  }
`
