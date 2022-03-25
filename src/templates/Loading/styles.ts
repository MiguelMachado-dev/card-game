import styled, { css } from 'styled-components'
import { Container } from 'components/Container'

export const Main = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.primary};
  `}
`
