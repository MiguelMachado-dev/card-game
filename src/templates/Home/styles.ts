import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Container } from 'components/Container'

export const Main = styled(Container)`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: ${theme.grid.gutter};
    `}
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 3.6rem;
    color: ${theme.colors.primary};
    line-height: 1.5;
  `}
`

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.white};
    line-height: 1.5;
    margin-bottom: 1.4rem;
  `}
`

export const Form = styled.form``

export const FormWrapper = styled.div`
  display: grid;
  gap: 1.6rem;
`
