import { css, keyframes } from 'styled-components'

export const defaultTransition = css`
  transition: all 200ms ease-in-out;
`

export const slowTransition = css`
  transition: all 300ms ease-in-out;
`

export const fadeIn = keyframes`
from {opacity: 0}
to {opacity: 1}
`
