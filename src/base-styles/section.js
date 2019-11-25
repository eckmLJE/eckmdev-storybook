import styled from 'styled-components'

const Section = styled.section`
  position: relative;
  width: 100%;
  overflow-x: hidden;
  min-height: 100vh;
`

export default ({ children }) => <Section>{children}</Section>
