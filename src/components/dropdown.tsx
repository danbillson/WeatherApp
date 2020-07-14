import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'
import { BasicCity } from '../types'

interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  list: BasicCity[]
}

const Dropdown = ({ list }: DropdownProps) => (
  <Container>
    {list.map(({ id, name }) => (
      <CityLink key={id} to={`/${id}`}>
        {name}
      </CityLink>
    ))}
  </Container>
)

export default Dropdown

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100px;
  width: 100%;
  max-height: 50vh;
  background-color: #fff;
  overflow: scroll;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15),
    0 4px 4px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;
`

const CityLink = styled(Link)`
  padding: 1rem;
  border-top: 1px solid #ddd;
  color: #111;
  text-decoration: none;
`
