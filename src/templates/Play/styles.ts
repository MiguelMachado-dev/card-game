import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Header = styled.header`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr;
    grid-template-areas: '. name button';
    gap: 0px 10px;
    justify-items: center;
    align-items: center;
    padding: ${theme.spacings.xxsmall};

    p {
      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.white};
    }

    .name {
      grid-area: name;
    }
    .button {
      grid-area: button;
    }
  `}
`

export const Actions = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    gap: ${theme.spacings.small};
    margin-bottom: ${theme.spacings.small};
  `}
`

export const CardsSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 96rem;
  margin: 0 auto;
  gap: 5px;

  ${media.lessThan('medium')`
    padding: 0 0.8rem;
  `}
`

export const Card = styled.div`
  width: 226px;
  height: 314px;

  ${media.lessThan('medium')`
    max-width: 110px;
    height: 100%;
  `}
`
