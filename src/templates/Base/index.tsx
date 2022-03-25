import { Container } from 'components/Container'

import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => {
  return (
    <S.Wrapper>
      <S.Content>{children}</S.Content>

      <S.SectionFooter>
        <Container>
          <S.Footer>
            <p>Made by Miguel Machado</p>
          </S.Footer>
        </Container>
      </S.SectionFooter>
    </S.Wrapper>
  )
}

export default Base
