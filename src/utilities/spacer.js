import React from 'react'
import styled from 'styled-components'
import BREAKPOINTS from './breakpoints'

const StyledSpacer = styled.div`
  height: ${props => props.height}rem;
  width: 100%;

  @media screen and (max-width: ${BREAKPOINTS.XL}px) {
    height: ${props => props.largeHeight}rem;
  }

  @media screen and (max-width: ${BREAKPOINTS.L}px) {
    height: ${props => props.medHeight}rem;
  }

  @media screen and (max-width: ${BREAKPOINTS.M}px) {
    height: ${props => props.smallHeight}rem;
  }

  @media screen and (max-width: ${BREAKPOINTS.S}px) {
    height: ${props => props.xSmallHeight}rem;
  }
`

export default props => {
  const {
    height,
    largeHeight = height,
    medHeight = largeHeight,
    smallHeight = medHeight,
    xSmallHeight = smallHeight,
    ...rest
  } = props
  return (
    <StyledSpacer
      height={height}
      largeHeight={largeHeight}
      medHeight={medHeight}
      smallHeight={smallHeight}
      xSmallHeight={xSmallHeight}
      {...rest}
    />
  )
}
