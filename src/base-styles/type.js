import styled from 'styled-components'

import COLOR from './color'
import BREAKPOINTS from './breakpoints'

export const HeaderL1 = styled.h1`
  font-size: 4.125rem;
  line-height: 1.1;
  letter-spacing: -1px;
  font-weight: 800;
  text-align: ${({ center }) => (center ? 'center' : 'unset')};

  @media (max-width: ${BREAKPOINTS.S}px) {
    font-size: 2.5rem;
    font-weight: 700;
  }
`

export const HeaderL2 = styled.h2`
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 700;
  text-align: ${({ center }) => (center ? 'center' : 'unset')};

  @media (max-width: ${BREAKPOINTS.S}px) {
    font-size: 2rem;
  }
`

export const HeaderL3 = styled.h3`
  font-size: 2rem;
  line-height: 1.25;
  font-weight: 700;
  text-align: ${({ center }) => (center ? 'center' : 'unset')};

  @media (max-width: ${BREAKPOINTS.S}px) {
    font-size: 1.5rem;
  }
`

export const HeaderL4 = styled.h4`
  font-size: 1.5rem;
  line-height: 1.25;
  font-weight: 700;
  text-align: ${({ center }) => (center ? 'center' : 'unset')};

  @media (max-width: ${BREAKPOINTS.S}px) {
    font-size: 1.125rem;
  }
`

export const HeaderL5 = styled.h5`
  font-size: 1.125rem;
  line-height: 1.375;
  font-weight: 700;
  text-align: ${({ center }) => (center ? 'center' : 'unset')};

  @media (max-width: ${BREAKPOINTS.S}px) {
    font-size: 1rem;
  }
`
export const HeaderL6 = styled.h6`
  font-size: 0.875rem;
  line-height: 1.429;
  font-weight: 700;
  text-align: ${({ center }) => (center ? 'center' : 'unset')};
`

export const Label = styled.p`
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.429;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: ${({ center }) => (center ? 'center' : 'unset')};
`

export const LabelSmall = styled.p`
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1.333;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: ${({ center }) => (center ? 'center' : 'unset')};
`

export const Lede = styled.p`
  font-size: 1.5rem;
  font-family: 'Sentinel';
  font-weight: 500;
  font-style: italic;
  text-align: ${({ center }) => (center ? 'center' : 'unset')};
`

export const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 500;
  text-align: ${({ center }) => (center ? 'center' : 'unset')};
`

export const ParagraphSmall = styled.p`
  font-size: 0.875rem;
  line-height: 1.429;
  font-weight: 500;
  text-align: ${({ center }) => (center ? 'center' : 'unset')};
`

export const ParagraphAccent = styled.p`
  font-size: 1.125rem;
  line-height: 1.222;
  font-family: 'Sentinel';
  font-weight: 500;
  font-style: italic;
  text-align: ${({ center }) => (center ? 'center' : 'unset')};
`

export const PullQuote = styled.blockquote`
  font-size: 1.875rem;
  line-height: 1.333;
  font-family: 'Sentinel';
  font-weight: 500;
  text-align: ${({ center }) => (center ? 'center' : 'unset')};
`

export const FeaturedLabel = styled.p`
  display: inline;
  font-size: 0.75rem;
  line-height: 1;
  letter-spacing: 1px;
  text-transform: uppercase;
  background-color: ${({ featureColor }) =>
    featureColor ? featureColor : COLOR.impact.default};
  color: white;
  font-weight: 700;
  padding: 0.35rem 0.5rem 0.25rem;
  text-align: ${({ center }) => (center ? 'center' : 'unset')};
`
