import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'

const Arrow = ({ rotation, ...props }: any) => (
  <SVG
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
    rotation={rotation}
    {...props}
  >
    <polyline points="112 244 256 100 400 244" />
    <line x1="256" y1="120" x2="256" y2="412" />
  </SVG>
)

export default Arrow

const LineStyles = `
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 48px;`

const SVG = styled.svg<{ rotation: number }>`
  width: 30px;
  height: 30px;
  transform: rotate(
    ${(props) => (props.rotation ? `${props.rotation}deg` : 0)}
  );

  polyline,
  line {
    ${LineStyles}
    stroke: #75d0c1;
  }
`

export const BackArrow = (props: any) => (
  <Link to="/">
    <BackSVG
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
      {...props}
    >
      <polyline points="112 244 256 100 400 244" />
      <line x1="256" y1="120" x2="256" y2="412" />
    </BackSVG>
  </Link>
)

const BackSVG = styled.svg`
  position: absolute;
  top: 20px;
  left: 0;
  transform: rotate(270deg);
  width: 50px;
  height: 50px;
  cursor: pointer;

  polyline,
  line {
    ${LineStyles}
    stroke: #999;
  }
`
