import React, { useState } from 'react'
import styled from 'styled-components'
import Dropdown from './dropdown'
import { BasicCity } from '../types'

const cities: BasicCity[] = require('../data/uk.cities.json')

const Search = () => {
  const [value, setValue] = useState('')

  const suggestions =
    value.length >= 3
      ? cities.filter(({ name }) =>
          // Ignore case
          name.toUpperCase().startsWith(value.toUpperCase())
        )
      : []

  return (
    <Container>
      <Label>
        <p>City</p>
        <Input
          name="city"
          type="text"
          placeholder="e.g. London"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Label>
      <Dropdown list={suggestions} />
    </Container>
  )
}

export default Search

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 2rem 0;
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;

  p {
    margin: 0 0 -3px 1.5rem;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.5px;
    z-index: 1;
  }
`

const Input = styled.input`
  padding: 0.5rem 1rem;
  min-width: 200px;
  border: 2px solid #777;
  border-bottom-width: 5px;
  border-radius: 40px;
  font-size: 18px;
  letter-spacing: 0.5px;
`
